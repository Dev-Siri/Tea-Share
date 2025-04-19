CREATE TABLE Posts (
  post_id CHAR(36) PRIMARY KEY,
  caption TEXT,
  post_image VARCHAR(700),
  created_at TIMESTAMP DEFAULT UTC_TIMESTAMP,
  user_id CHAR(36) NOT NULL
);