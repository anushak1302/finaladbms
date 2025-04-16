import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://arya-project.onrender.com/api/movies')
      .then(res => res.json())
      .then(setMovies);
  }, []);

  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {movies.map(movie => (
        <div key={movie._id} className="bg-gray-800 p-4 rounded">
          <img src={movie.poster} alt={movie.title} className="w-full h-64 object-cover mb-2 rounded" />
          <h3 className="text-xl font-bold">{movie.title}</h3>
          <p className="text-sm text-gray-400">{movie.genre}</p>
          <Link to={`/book/${movie._id}`} className="mt-2 inline-block bg-red-500 text-white px-3 py-1 rounded">
            Book Now
          </Link>
        </div>
      ))}
    </div>
  );
}
