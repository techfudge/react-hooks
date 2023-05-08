// import React, { useState, useEffect } from 'react';
// import MovieList from './MovieList';
// import Filter from './Filter';

// const MovieApp = () => {
//   const [movies, setMovies] = useState([]);
//   const [titleFilter, setTitleFilter] = useState('');
//   const [rateFilter, setRateFilter] = useState(0);
//   const [newMovieTitle, setNewMovieTitle] = useState('');
//   const [newMovieDescription, setNewMovieDescription] = useState('');
//   const [newMoviePosterURL, setNewMoviePosterURL] = useState('');
//   const [newMovieRating, setNewMovieRating] = useState(0);

//   const addMovie = (e) => {
//     e.preventDefault();
//     const newMovie = {
//       title: newMovieTitle,
//       description: newMovieDescription,
//       posterURL: newMoviePosterURL,
//       rating: newMovieRating,
//     };
//     setMovies([...movies, newMovie]);
//     setNewMovieTitle('');
//     setNewMovieDescription('');
//     setNewMoviePosterURL('');
//     setNewMovieRating(0);
//   };


//   const filteredMovies = movies.filter(movie => (
//     movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
//     movie.vote_average >= rateFilter
//   ));

//   return (
//     <div>
//       <form onSubmit={addMovie}>
//         <label htmlFor="title-input">Title:</label>
//         <input id="title-input" type="text" value={newMovieTitle} onChange={e => setNewMovieTitle(e.target.value)} />
//         <label htmlFor="description-input">Description:</label>
//         <input id="description-input" type="text" value={newMovieDescription} onChange={e => setNewMovieDescription(e.target.value)} />
//         <label htmlFor="poster-url-input">Poster URL:</label>
//         <input id="poster-url-input" type="text" value={newMoviePosterURL} onChange={e => setNewMoviePosterURL(e.target.value)} />
//         <label htmlFor="rating-input">Rating:</label>
//         <input id="rating-input" type="number" min="0" max="10" step="0.1" value={newMovieRating} onChange={e => setNewMovieRating(parseFloat(e.target.value))} />
//         <button type="submit">Add Movie</button>
//       </form>
//       <Filter
//         title={titleFilter}
//         rate={rateFilter}
//         onTitleChange={e => setTitleFilter(e.target.value)}
//         onRateChange={e => setRateFilter(parseFloat(e.target.value))}
//       />
//       <MovieList movies={filteredMovies} />
//     </div>
//   );
// };

// export default MovieApp;