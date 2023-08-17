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
  INNER JOIN info ON titles.tconst = info.tconst
WHERE
  ratings.rating > 8
  -- AND ratings.rating < 8
  AND ratings.votes > 100000
  AND titles.startYear > 2000
  AND titles.titleType = 'movie' -- AND (titles.genres LIKE '%thriller%' OR titles.genres LIKE '%mystery%')
ORDER BY
  ratings.rating DESC,
  ratings.votes ASC;