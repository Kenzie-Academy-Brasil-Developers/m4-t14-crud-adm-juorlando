CREATE TABLE users(
"id" serial PRIMARY KEY,
"name" varchar(20) NOT NULL,
"email" varchar(100) UNIQUE NOT NULL,
"password" varchar(120) NOT NULL,
"admin" boolean NOT NULL DEFAULT FALSE,
"active" boolean NOT NULL DEFAULT TRUE
);