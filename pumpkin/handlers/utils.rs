use axum::{
	Json, body::Bytes, http::{HeaderValue, StatusCode, header}, response::{IntoResponse, Response}
};
use serde_json::{Value, json};

pub fn send_ok(mut data: Value) -> Response {
	data["code"] = json!(200);
	data["error"] = json!("");

	(
		StatusCode::OK,
		Json(data)
	).into_response()
}

pub fn send_status(code: StatusCode) -> Response {
	send_status_with_msg(code, code.canonical_reason().unwrap_or(""))
}

pub fn send_status_with_msg(code: StatusCode, msg: &str) -> Response {
	(
		code,
		Json(json!({
			"code": code.as_u16(),
			"error": msg
		})),
	).into_response()
}

pub async fn send_content(bytes: Bytes, content_type: &str) -> Response {
	let mut response = bytes.into_response();
	response.headers_mut().insert(
		header::CONTENT_TYPE,
		HeaderValue::from_str(content_type).unwrap_or_else(|_| HeaderValue::from_static("application/octet-stream")),
	);
	response
}

pub async fn send_content_with_name(bytes: Bytes, content_type: &str, name: &str) -> Response {
	let mut response = send_content(bytes, content_type).await;
	if let Ok(header_value) = HeaderValue::from_str(&format!("attachment; filename=\"{}\"", name)) {
		response.headers_mut().insert(header::CONTENT_DISPOSITION, header_value);
	}
	response
}

pub async fn send_content_via_path(path: &str, content_type: &str) -> Response {
	match tokio::fs::read(path).await {
		Ok(bytes) => send_content(bytes.into(), content_type).await,
		Err(_) => send_status(StatusCode::NOT_FOUND),
	}
}

pub fn not_implemented() -> Response {
  send_status(StatusCode::NOT_IMPLEMENTED)
}

pub fn not_found() -> Response {
  send_status(StatusCode::NOT_FOUND)
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
		response.headers_mut().insert(header::LOCATION, header_value);
		return response;
	}
	StatusCode::NOT_FOUND.into_response()
}
