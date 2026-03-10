use axum::{
	extract::Request, http::HeaderValue, middleware::Next, response::Response
};

use crate::handlers::utils::{
	append_query_to_path,
	map_txt_route_to_index_txt,
	query_contains_key,
	response_redirect_found,
	trim_txt_route_suffix,
};

pub async fn before_all_middleware(req: Request, next: Next) -> Response {
	let mut res = next.run(req).await;
	res.headers_mut().insert(
		"X-Powered-By",
		HeaderValue::from_static("OPanel")
	);

	res
}

pub async fn nextjs_rsc_middleware(req: Request, next: Next) -> Response {
	const DEFAULT_RSC_FILE: &str = "index.txt";

	let uri = req.uri().clone();
	let req_path = uri.path();
	if req_path.contains(".txt") && !req_path.contains(DEFAULT_RSC_FILE) && req_path != "/robots.txt" {
		let location = if query_contains_key(uri.query(), "_rsc") {
			append_query_to_path(map_txt_route_to_index_txt(req_path), uri.query())
		} else {
			append_query_to_path(trim_txt_route_suffix(req_path), uri.query())
		};
		return response_redirect_found(&location);
	}

	next.run(req).await
}
