use axum::{Router, routing::get};
use tokio::net::TcpListener;

use crate::handlers::hello::*;

pub async fn init_web_server() -> Result<(), String> {
  let app = Router::new()
    .route("/", get(hello_handler));

  let listener = TcpListener::bind("0.0.0.0:3000")
    .await
    .unwrap();
  axum::serve(listener, app)
    .await
    .unwrap();

  tracing::info!("OPanel web server is ready on port 3000");

  Ok(())
}
