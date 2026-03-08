use axum::{Router, routing::get};
use tokio::net::TcpListener;

use crate::handlers::hello::*;

const PORT: usize = 3000;

pub async fn init_web_server() -> Result<(), String> {
  let app = Router::new()
    .route("/", get(hello_handler));

  let listener = TcpListener::bind(format!("0.0.0.0:{}", PORT))
    .await
    .unwrap();
  axum::serve(listener, app)
    .await
    .unwrap();

  tracing::info!("OPanel web server is ready on port {}", PORT);

  Ok(())
}
