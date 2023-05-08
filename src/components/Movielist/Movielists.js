import React from 'react';

function Movie({ title, release_date, description, trailer_link, poster_path }) {
  return (
    <div className="movie">
      <h2>{title}</h2>
      <p>Released: {release_date}</p>
      <p>Description: {description}</p>
      <iframe src={trailer_link} title={`${title} Trailer`} width="560" height="315" frameborder="0"></iframe>
      <img src={poster_path} alt={`${title} Poster`} />
    </div>
  );
}

const movies = [
  {
    id: 1,
    title: 'Movie Title 1',
    release_date: '2022-01-01',
    description: 'This is a movie about ...',
    trailer_link: 'https://www.youtube.com/embed/abc123',
    poster_path: 'https://example.com/poster1.jpg'
  },
  {
    id: 2,
    title: 'Movie Title 2',
    release_date: '2022-02-01',
    description: 'This is another movie about ...',
    trailer_link: 'https://www.youtube.com/embed/def456',
    poster_path: 'https://example.com/poster2.jpg'
  },
  // ...
];

function MovieList() {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <Movie key={movie.id} {...movie} />
      ))}
    </div>
  );
}

export default MovieList;