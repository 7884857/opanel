use axum::{
  Router,
  middleware,
  routing::{delete, get, post},
};
use tokio::net::TcpListener;

use crate::handlers::{frontend::static_fallback, hello::hello_handler, middleware::before_all_middleware, utils::{not_found, not_implemented}};
use crate::handlers::middleware::nextjs_rsc_middleware;

const PORT: usize = 3000;

pub async fn init_web_server() -> Result<(), String> {
  let frontend_router = Router::new()
    .fallback(static_fallback)
    .layer(middleware::from_fn(nextjs_rsc_middleware));

  let app = Router::new()
    // .route("/", get(hello_handler))
    // .route("/socket/players", get(not_implemented))
    // .route("/socket/inventory/{uuid}", get(not_implemented))
    // .route("/socket/terminal", get(not_implemented))
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
    .route("/{name}", get(not_implemented))
    .route("/upload/{name}", post(not_implemented))
    .route("/reset/{name}", delete(not_implemented))
    .fallback(not_found)
}

fn file_routes() -> Router {
  Router::new()
    .route("/{id}/{fileName}", get(not_implemented))
    .fallback(not_found)
}

fn api_routes() -> Router {
  Router::new()
    .route("/hello", get(hello_handler))
    .nest("/auth", Router::new()
      .route("/", get(not_implemented).post(not_implemented))
      .route("/check", post(not_implemented))
      .route("/logout", post(not_implemented)))
    .nest("/banned-ips", Router::new()
      .route("/", get(not_implemented))
      .route("/add", post(not_implemented))
      .route("/remove", post(not_implemented)))
    .nest("/control", Router::new()
      .route("/properties", get(not_implemented).post(not_implemented))
      .route("/code-of-conduct", get(not_implemented).post(not_implemented).delete(not_implemented))
      .route("/stop", post(not_implemented))
      .route("/reload", post(not_implemented))
      .route("/world", post(not_implemented))
      .route("/bukkit-config", get(not_implemented).post(not_implemented))
      .route("/paper-world-config", get(not_implemented).post(not_implemented)))
    .nest("/gamerules", Router::new()
      .route("/", get(not_implemented).post(not_implemented).patch(not_implemented)))
    .nest("/icon", Router::new()
      .route("/", get(not_implemented).post(not_implemented)))
    .nest("/info", Router::new()
      .route("/", get(not_implemented))
      .route("/motd", post(not_implemented)))
    .nest("/logs", Router::new()
      .route("/", get(not_implemented).delete(not_implemented))
      .route("/{fileName}", get(not_implemented).delete(not_implemented))
      .route("/{fileName}/download", get(not_implemented)))
    .route("/monitor", get(not_implemented))
    .nest("/players", Router::new()
      .route("/", get(not_implemented).delete(not_implemented))
      .route("/list", get(not_implemented))
      .route("/op", post(not_implemented))
      .route("/deop", post(not_implemented))
      .route("/kick", post(not_implemented))
      .route("/ban", post(not_implemented))
      .route("/pardon", post(not_implemented))
      .route("/gamemode", post(not_implemented)))
    .nest("/saves", Router::new()
      .route("/", get(not_implemented).post(not_implemented))
      .route("/{saveName}", get(not_implemented).post(not_implemented).patch(not_implemented).delete(not_implemented)))
    .nest("/plugins", Router::new()
      .route("/", get(not_implemented).post(not_implemented))
      .route("/icon/{fileName}", get(not_implemented))
      .route("/{fileName}", get(not_implemented).post(not_implemented).delete(not_implemented)))
    .nest("/terminal", Router::new()
      .route("/", get(not_implemented).post(not_implemented)))
    .route("/security", post(not_implemented))
    .route("/version", get(not_implemented))
    .nest("/whitelist", Router::new()
      .route("/", get(not_implemented))
      .route("/enable", post(not_implemented))
      .route("/disable", post(not_implemented))
      .route("/write", post(not_implemented))
      .route("/add", post(not_implemented))
      .route("/remove", post(not_implemented)))
    .nest("/tasks", Router::new()
      .route("/", get(not_implemented).post(not_implemented))
      .route("/{id}", post(not_implemented).patch(not_implemented).delete(not_implemented)))
    .nest("/mcp", Router::new()
      .route("/", get(not_implemented).post(not_implemented))
      .route("/token", get(not_implemented).post(not_implemented)))
    .nest("/open-api", Router::new()
      .route("/", get(not_implemented).post(not_implemented)))
    .fallback(not_found)
}

fn open_api_routes() -> Router {
  Router::new()
    .route("/info", get(not_implemented))
    .route("/monitor", get(not_implemented))
    .nest("/plugins", Router::new()
      .route("/", get(not_implemented))
      .route("/icon/{fileName}", get(not_implemented)))
    .nest("/players", Router::new()
      .route("/", get(not_implemented))
      .route("/{uuid}", get(not_implemented)))
    .fallback(not_found)
}
