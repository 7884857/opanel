use std::path::{Path, PathBuf};

pub fn opanel_dir_pathbuf() -> PathBuf {
  Path::new("opanel").to_path_buf()
}

pub fn tmp_dir_pathbuf() -> PathBuf {
  opanel_dir_pathbuf().join(".tmp")
}

pub fn access_key_pathbuf() -> PathBuf {
  opanel_dir_pathbuf().join("INITIAL_ACCESS_KEY.txt")
}
