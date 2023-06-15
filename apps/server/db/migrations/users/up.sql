CREATE TABLE Users(
  user_id CHAR(36) PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  user_image VARCHAR(700) NOT NULL,
  password CHAR(88) UNIQUE,
  salt CHAR(24) UNIQUE,
  auth_provider VARCHAR(8) NOT NULL
);