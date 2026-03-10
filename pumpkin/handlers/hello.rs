use axum::{Json, http::StatusCode};
use serde_json::{Value, json};

use crate::handlers::utils::*;

pub async fn hello_handler() -> (StatusCode, Json<Value>) {
  ok(json!({ "message": "Hello World" }))
}
