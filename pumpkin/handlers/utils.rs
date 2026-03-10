use axum::{
	Json, http::{HeaderValue, StatusCode, header::LOCATION}, response::{IntoResponse, Response}
};
use serde_json::{Value, json};

pub fn ok(mut data: Value) -> (StatusCode, Json<Value>) {
	data["code"] = json!(200);
	data["error"] = json!("");

	(
		StatusCode::OK,
		Json(data)
	)
}

pub async fn not_implemented() -> (StatusCode, Json<Value>) {
  (
    StatusCode::NOT_IMPLEMENTED,
    Json(json!({
      "code": 501,
      "error": "Route exists but is not implemented yet"
    })),
  )
}

pub async fn not_found() -> (StatusCode, Json<Value>) {
  (
    StatusCode::NOT_FOUND,
    Json(json!({
      "code": 404,
      "error": "Not found"
    })),
  )
}

pub fn query_contains_key(query: Option<&str>, key: &str) -> bool {
	let Some(query) = query else {
		return false;
	};

	query.split('&').any(|pair| {
		if let Some((k, _)) = pair.split_once('=') {
			k == key
		} else {
			pair == key
		}
	})
}

pub fn trim_txt_route_suffix(path: &str) -> String {
	if let Some(stripped) = path.strip_suffix(".txt/") {
		return stripped.to_string();
	}
	if let Some(stripped) = path.strip_suffix(".txt") {
		return stripped.to_string();
	}
	path.to_string()
}

pub fn map_txt_route_to_index_txt(path: &str) -> String {
	if let Some(stripped) = path.strip_suffix(".txt") {
		return format!("{}/index.txt", stripped);
	}
	path.to_string()
}

pub fn append_query_to_path(path: String, query: Option<&str>) -> String {
	if let Some(query) = query {
		return format!("{}?{}", path, query);
	}
	path
}

pub fn response_redirect_found(location: &str) -> Response {
	let mut response = StatusCode::FOUND.into_response();
	if let Ok(header_value) = HeaderValue::from_str(location) {
		response.headers_mut().insert(LOCATION, header_value);
		return response;
	}
	StatusCode::NOT_FOUND.into_response()
}
