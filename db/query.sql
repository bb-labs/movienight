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
  ratings.rating > 7
  AND ratings.votes > 100000
  AND titles.titleType = 'movie'
  AND titles.genres LIKE '%Western%'
  -- AND titles.genres LIKE '%Crime%'
ORDER BY
  ratings.votes DESC;