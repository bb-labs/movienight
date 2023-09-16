DROP DATABASE IF EXISTS movies;

CREATE DATABASE movies;

USE movies;

CREATE TABLE titles (
  tconst VARCHAR(255),
  titleType VARCHAR(255),
  primaryTitle VARCHAR(255),
  originalTitle VARCHAR(255),
  isAdult INT,
  startYear INT,
  endYear INT,
  runtimeMinutes INT,
  genres VARCHAR(255)
);

CREATE TABLE ratings (
  tconst VARCHAR(255),
  rating DECIMAL(5, 2),
  votes INT
);

LOAD DATA LOCAL INFILE '/tmp/titles.tsv' INTO TABLE titles;

LOAD DATA LOCAL INFILE '/tmp/ratings.tsv' INTO TABLE ratings;

CREATE UNIQUE INDEX primary_titles ON titles (tconst);

CREATE UNIQUE INDEX primary_ratings ON ratings (tconst);