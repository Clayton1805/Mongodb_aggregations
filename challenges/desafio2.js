db.movies.aggregate([
  {
    $match: {
      "imdb.rating": { $gte: 7 },
      $or: [{ genres: { $not: { $all: ["Crime"] } } }, { genres: { $not: { $all: ["Horror"] } } }],
      rated: { $in: ["PG", "G"] },
      languages: { $all: ["English", "Spanish"] },
    },
  },
  {
    $project: {
      _id: 0,
      titulo: "$title",
      avaliado: "$rated",
      notaIMDB: "$imdb.rating",
      votosIMDB: "$imdb.votes",
      ano: "$year",
    },
  },
]);