import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Booking from './pages/Booking';

export default function App() {
  return (
    <Router>
      <div className="bg-black text-white p-4 flex justify-between">
        <h1 className="text-xl font-bold">🎬 BookMyFlick</h1>
        <nav className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/book/:id" element={<Booking />} />
      </Routes>
    </Router>
  );
}
