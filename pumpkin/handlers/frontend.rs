use axum::{
	extract::Request,
	http::{HeaderValue, StatusCode, Uri, header::CONTENT_TYPE},
	response::{IntoResponse, Response},
};
use include_dir::{Dir, File, include_dir};
use mime_guess::from_path;

use crate::handlers::utils::not_found;

static WEB_DIR: Dir<'_> = include_dir!("$CARGO_MANIFEST_DIR/pumpkin/resources/web");

pub async fn static_fallback(uri: Uri, req: Request) -> Response {
	if req.method().as_str() != "GET" && req.method().as_str() != "HEAD" {
		return not_found().await.into_response();
	}

	if let Some((path, file, status)) = resolve_static_file(uri.path()) {
		return static_file_response(path, file, status);
	}

	not_found().await.into_response()
}

fn resolve_static_file(path: &str) -> Option<(String, &'static File<'static>, StatusCode)> {
	if let Some(file) = WEB_DIR.get_file("index.html") {
		if path == "/" {
			return Some(("index.html".to_string(), file, StatusCode::OK));
		}
	}

	let normalized = path.trim_start_matches('/');

	if !normalized.is_empty() {
		if let Some(file) = WEB_DIR.get_file(normalized) {
			return Some((normalized.to_string(), file, StatusCode::OK));
		}

		let index_path = if normalized.ends_with('/') {
			format!("{}index.html", normalized)
		} else {
			format!("{}/index.html", normalized)
		};
		if let Some(file) = WEB_DIR.get_file(&index_path) {
			return Some((index_path, file, StatusCode::OK));
		}
	}

	WEB_DIR
		.get_file("404.html")
		.map(|file| ("404.html".to_string(), file, StatusCode::NOT_FOUND))
}

fn static_file_response(path: String, file: &'static File<'static>, status: StatusCode) -> Response {
	let mut res = (status, file.contents().to_vec()).into_response();
	let content_type = from_path(path)
		.first_or_octet_stream()
		.essence_str()
		.to_string();
	if let Ok(header_value) = HeaderValue::from_str(&content_type) {
		res.headers_mut().insert(CONTENT_TYPE, header_value);
	}
	res
}
