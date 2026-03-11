use std::{collections::HashMap, sync::{LazyLock, Mutex}};

use axum::{extract::Query, http::StatusCode, response::Response};
use serde::Deserialize;
use serde_json::json;

use crate::{handlers::utils::{send_ok, send_status_with_msg}, utils::generate_random_hex};

#[derive(Deserialize)]
pub struct CramQuery {
  id: Option<String>
}

#[derive(Deserialize)]
pub struct ValidateCramBody {
  id: String,
  result: String
}

static CRAM_MAP: LazyLock<Mutex<HashMap<String, String>>> = LazyLock::new(|| {
  Mutex::new(HashMap::new())
});

pub async fn get_cram_handler(Query(query): Query<CramQuery>) -> Response {
  let id = query.id.ok_or_else(|| {
    send_status_with_msg(StatusCode::BAD_REQUEST, "Id is missing.")
  }).unwrap();

  let mut random_hex = generate_random_hex(16);
  while CRAM_MAP.lock().unwrap().values().any(|v| v == &random_hex) {
    random_hex = generate_random_hex(16);
  }
  CRAM_MAP.lock().unwrap().insert(id, random_hex.clone());

  send_ok(json!({
    "cram": random_hex
  }))
}

// pub async fn validate_cram(Json(body): Json<ValidateCramBody>) -> Response {
//   let id = body.id.ok_or_else(|| {
//     send_status_with_msg(StatusCode::BAD_REQUEST, "Id is missing.")
//   }).unwrap();
//   let result = body.result.ok_or_else(|| {
//     send_status_with_msg(StatusCode::BAD_REQUEST, "Id is missing.")
//   }).unwrap();
// }
