use std::{fs, sync::Arc, thread};

use pumpkin::plugin::Context;
use pumpkin_api_macros::{plugin_impl, plugin_method};
use tokio::runtime::Runtime;

use paths::*;

use crate::utils::is_dir_empty;

mod web;
mod handlers;
mod utils;
mod paths;

#[plugin_method]
pub async fn on_load(&mut self, ctx: Arc<Context>) -> Result<(), String> {
	ctx.init_log();

	init_dirs();

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

fn init_dirs() {
	// Create OPanel directory
	let opanel_dir = opanel_dir_pathbuf();
	if !opanel_dir.as_path().exists() {
		fs::create_dir_all(opanel_dir.as_path()).unwrap_or_else(|e| {
			tracing::error!("Cannot initialize opanel directory: {}", e);
		});
	}

	// Create .tmp directory
	let tmp_dir = tmp_dir_pathbuf();
	match is_dir_empty(&tmp_dir.as_path()) {
		Ok(true) => (),
		Ok(false) => {
			fs::remove_dir_all(tmp_dir.as_path()).unwrap_or_else(|e| {
				tracing::error!("Cannot clear the opanel/.tmp directory: {}", e);
			});
		},
		Err(_) => {}
	}
	if !tmp_dir.as_path().exists() {
		match fs::create_dir_all(tmp_dir.as_path()) {
			Ok(_) => (),
			Err(e) => {
				tracing::error!("Cannot initialize opanel/.tmp directory: {}", e);
				return;
			}
		}
	}

	// Remove access key txt file if exists
	let access_key_path = access_key_pathbuf();
	if access_key_path.as_path().exists() {
		fs::remove_file(access_key_path.as_path()).unwrap_or_else(|_| {
			tracing::error!("Cannot delete opanel/INITIAL_ACCESS_KEY.txt file, please delete it manually for your server security.");
		});
	}
}
