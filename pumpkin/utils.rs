use rand::{rngs::OsRng, Rng, RngCore};

pub fn generate_random_int(min: i32, max: i32) -> i32 {
  assert!(
    min <= max,
    "Min number cannot be larger than the max number."
  );

  let mut rng = OsRng;
  rng.gen_range(min..=max)
}

pub fn generate_random_hex(byte_length: usize) -> String {
  assert!(
    byte_length > 0,
    "The byte length should be larger than zero."
  );

  let mut rng = OsRng;
  let mut rand_bytes = vec![0_u8; byte_length];
  rng.fill_bytes(&mut rand_bytes);

  let mut result = String::with_capacity(byte_length * 2);
  for b in rand_bytes {
    result.push_str(&format!("{:02x}", b));
  }

  result
}

pub fn generate_random_char_sequence(length: usize, special_chars: bool) -> String {
  let chars = if special_chars {
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@$"
  } else {
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  };

  let chars_bytes = chars.as_bytes();
  let mut rng = OsRng;
  let mut result = String::with_capacity(length);
  while result.len() < length {
    let char_index = rng.gen_range(0..chars_bytes.len());
    result.push(chars_bytes[char_index] as char);
  }

  result
}
