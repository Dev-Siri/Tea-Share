CREATE TABLE Likes(
  like_id CHAR(36) PRIMARY KEY,
  user_id CHAR(36) NOT NULL,
  post_id CHAR(36) NOT NULL
);