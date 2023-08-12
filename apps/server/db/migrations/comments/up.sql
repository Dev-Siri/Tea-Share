CREATE TABLE Comments(
  comment_id CHAR(36) PRIMARY KEY,
  post_id CHAR(36) NOT NULL,
  user_id CHAR(36) NOT NULL,
  comment TEXT
);