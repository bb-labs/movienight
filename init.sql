DROP DATABASE movies;

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

CREATE TABLE info (
  tconst VARCHAR(255),
  id INT,
  title VARCHAR(255),
  region VARCHAR(255),
  language VARCHAR(255),
  types VARCHAR(255),
  attributes VARCHAR(255),
  originalTitle INT
);

LOAD DATA LOCAL INFILE '/Users/trumanpurnell/Workspace/labs/movies/title.basics.tsv' INTO TABLE titles;

LOAD DATA LOCAL INFILE '/Users/trumanpurnell/Workspace/labs/movies/title.ratings.tsv' INTO TABLE ratings;

LOAD DATA LOCAL INFILE '/Users/trumanpurnell/Workspace/labs/movies/title.akas.tsv' INTO TABLE info;

CREATE UNIQUE INDEX primary_titles ON titles (tconst);

CREATE UNIQUE INDEX primary_ratings ON ratings (tconst);

CREATE UNIQUE INDEX primary_info ON info (tconst);