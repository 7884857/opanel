use std::{sync::Arc, thread};

use pumpkin::plugin::Context;
use pumpkin_api_macros::{plugin_impl, plugin_method};
use tokio::runtime::Runtime;

mod web;
mod handlers;

#[plugin_method]
pub async fn on_load(&mut self, ctx: Arc<Context>) -> Result<(), String> {
	ctx.init_log();

	thread::spawn(|| {
		let _ = tracing_subscriber::fmt::try_init();
		let rt = Runtime::new().unwrap();
		
		rt.block_on(async {
			web::init_web_server().await.unwrap();
		});
	});

	Ok(())
}

#[plugin_impl]
pub struct MyPlugin {}

impl MyPlugin {
	pub fn new() -> Self {
		MyPlugin {}
	}
}

impl Default for MyPlugin {
	fn default() -> Self {
		Self::new()
	}
}
