USE movies;

SELECT
  titles.originalTitle,
  ratings.rating,
  titles.startYear,
  titles.runtimeMinutes,
  ratings.votes,
  titles.genres
FROM
  titles
  INNER JOIN ratings ON titles.tconst = ratings.tconst
WHERE
  ratings.rating > 7 -- AND ratings.rating < 8
  AND ratings.votes > 10000
  AND titles.startYear >= 2020
  AND titles.titleType = 'movie'
  -- AND titles.genres LIKE '%Comedy%'
  -- AND titles.genres LIKE '%Romance%'
ORDER BY
  -- ratings.rating DESC;
  ratings.votes DESC;