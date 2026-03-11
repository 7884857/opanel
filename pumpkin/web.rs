use axum::{
  Router,
  middleware,
  routing::{delete, get, post},
};
use tokio::net::TcpListener;

use crate::handlers::{
  auth::get_cram_handler, frontend::static_fallback, middleware::before_all_middleware, utils::*
};
use crate::handlers::middleware::nextjs_rsc_middleware;

const PORT: usize = 3000;

pub async fn init_web_server() -> Result<(), String> {
  let frontend_router = Router::new()
    .fallback(static_fallback)
    .layer(middleware::from_fn(nextjs_rsc_middleware));

  let app = Router::new()
    // .route("/", get(hello_handler))
    // .route("/socket/players", get(async || not_implemented()))
    // .route("/socket/inventory/{uuid}", get(async || not_implemented()))
    // .route("/socket/terminal", get(async || not_implemented()))
    .nest("/assets", assets_routes())
    .nest("/file", file_routes())
    .nest("/api", api_routes())
    .nest("/open-api", open_api_routes())
    .fallback_service(frontend_router)
    .layer(middleware::from_fn(before_all_middleware));

  let listener = TcpListener::bind(format!("0.0.0.0:{}", PORT))
    .await
    .unwrap();
  axum::serve(listener, app)
    .await
    .unwrap();

  tracing::info!("OPanel web server is ready on port {}", PORT);

  Ok(())
}

fn assets_routes() -> Router {
  Router::new()
    .route("/{name}", get(async || not_implemented()))
    .route("/upload/{name}", post(async || not_implemented()))
    .route("/reset/{name}", delete(async || not_implemented()))
    .fallback(async || not_found())
}

fn file_routes() -> Router {
  Router::new()
    .route("/{id}/{fileName}", get(async || not_implemented()))
    .fallback(async || not_found())
}

fn api_routes() -> Router {
  Router::new()
    .nest("/auth", Router::new()
      .route("/", get(get_cram_handler).post(async || not_implemented()))
      .route("/check", post(async || not_implemented()))
      .route("/logout", post(async || not_implemented())))
    .nest("/banned-ips", Router::new()
      .route("/", get(async || not_implemented()))
      .route("/add", post(async || not_implemented()))
      .route("/remove", post(async || not_implemented())))
    .nest("/control", Router::new()
      .route("/properties", get(async || not_implemented()).post(async || not_implemented()))
      .route("/code-of-conduct", get(async || not_implemented()).post(async || not_implemented()).delete(async || not_implemented()))
      .route("/stop", post(async || not_implemented()))
      .route("/reload", post(async || not_implemented()))
      .route("/world", post(async || not_implemented()))
      .route("/bukkit-config", get(async || not_implemented()).post(async || not_implemented()))
      .route("/paper-world-config", get(async || not_implemented()).post(async || not_implemented())))
    .nest("/gamerules", Router::new()
      .route("/", get(async || not_implemented()).post(async || not_implemented()).patch(async || not_implemented())))
    .nest("/icon", Router::new()
      .route("/", get(async || not_implemented()).post(async || not_implemented())))
    .nest("/info", Router::new()
      .route("/", get(async || not_implemented()))
      .route("/motd", post(async || not_implemented())))
    .nest("/logs", Router::new()
      .route("/", get(async || not_implemented()).delete(async || not_implemented()))
      .route("/{fileName}", get(async || not_implemented()).delete(async || not_implemented()))
      .route("/{fileName}/download", get(async || not_implemented())))
    .route("/monitor", get(async || not_implemented()))
    .nest("/players", Router::new()
      .route("/", get(async || not_implemented()).delete(async || not_implemented()))
      .route("/list", get(async || not_implemented()))
      .route("/op", post(async || not_implemented()))
      .route("/deop", post(async || not_implemented()))
      .route("/kick", post(async || not_implemented()))
      .route("/ban", post(async || not_implemented()))
      .route("/pardon", post(async || not_implemented()))
      .route("/gamemode", post(async || not_implemented())))
    .nest("/saves", Router::new()
      .route("/", get(async || not_implemented()).post(async || not_implemented()))
      .route("/{saveName}", get(async || not_implemented()).post(async || not_implemented()).patch(async || not_implemented()).delete(async || not_implemented())))
    .nest("/plugins", Router::new()
      .route("/", get(async || not_implemented()).post(async || not_implemented()))
      .route("/icon/{fileName}", get(async || not_implemented()))
      .route("/{fileName}", get(async || not_implemented()).post(async || not_implemented()).delete(async || not_implemented())))
    .nest("/terminal", Router::new()
      .route("/", get(async || not_implemented()).post(async || not_implemented())))
    .route("/security", post(async || not_implemented()))
    .route("/version", get(async || not_implemented()))
    .nest("/whitelist", Router::new()
      .route("/", get(async || not_implemented()))
      .route("/enable", post(async || not_implemented()))
      .route("/disable", post(async || not_implemented()))
      .route("/write", post(async || not_implemented()))
      .route("/add", post(async || not_implemented()))
      .route("/remove", post(async || not_implemented())))
    .nest("/tasks", Router::new()
      .route("/", get(async || not_implemented()).post(async || not_implemented()))
      .route("/{id}", post(async || not_implemented()).patch(async || not_implemented()).delete(async || not_implemented())))
    .nest("/mcp", Router::new()
      .route("/", get(async || not_implemented()).post(async || not_implemented()))
      .route("/token", get(async || not_implemented()).post(async || not_implemented())))
    .nest("/open-api", Router::new()
      .route("/", get(async || not_implemented()).post(async || not_implemented())))
    .fallback(async || not_found())
}

fn open_api_routes() -> Router {
  Router::new()
    .route("/info", get(async || not_implemented()))
    .route("/monitor", get(async || not_implemented()))
    .nest("/plugins", Router::new()
      .route("/", get(async || not_implemented()))
      .route("/icon/{fileName}", get(async || not_implemented())))
    .nest("/players", Router::new()
      .route("/", get(async || not_implemented()))
      .route("/{uuid}", get(async || not_implemented())))
    .fallback(async || not_found())
}
