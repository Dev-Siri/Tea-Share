CREATE TABLE Posts (
  post_id CHAR(36) PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  post_image VARCHAR(700),
  created_at TIMESTAMP DEFAULT UTC_TIMESTAMP,
  user_id CHAR(36) NOT NULL
);