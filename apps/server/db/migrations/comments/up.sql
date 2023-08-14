CREATE TABLE Comments(
  comment_id CHAR(36) PRIMARY KEY,
  post_id CHAR(36) NOT NULL,
  user_id CHAR(36) NOT NULL,
  created_at TIMESTAMP DEFAULT UTC_TIMESTAMP,
  comment TEXT
);