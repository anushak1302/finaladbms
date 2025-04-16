import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav className="bg-black text-white p-4 flex justify-between">
        <h1 className="font-bold text-xl">🎬 BookMyFlick</h1>
        <div className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/bookings">My Bookings</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/bookings" element={<Bookings />} />
      </Routes>
    </Router>
  );
}

const Home = () => (
  <div className="p-8 text-center">
    <h2 className="text-3xl font-bold">Welcome to BookMyFlick</h2>
    <p className="mt-4 text-gray-700">Book your favorite movies, fast and easy.</p>
  </div>
);

const Movies = () => <div className="p-8">🎬 Movie listings coming soon...</div>;
const Bookings = () => <div className="p-8">📃 Your bookings will show here.</div>;

export default App;
