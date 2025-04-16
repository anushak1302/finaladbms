import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Booking() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [form, setForm] = useState({ name: '', seats: 1 });

  useEffect(() => {
    fetch(`https://arya-project.onrender.com/api/movies/${id}`)
      .then(res => res.json())
      .then(setMovie);
  }, [id]);

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`https://arya-project.onrender.com/api/book`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, movieId: id })
    }).then(() => alert('Booking Confirmed!'));
  }

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="p-8 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Booking for: {movie.title}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" className="w-full p-2" placeholder="Your Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
        <input type="number" className="w-full p-2" placeholder="No. of Seats" value={form.seats} onChange={e => setForm({ ...form, seats: e.target.value })} required min="1" />
        <button type="submit" className="bg-green-500 px-4 py-2 text-white rounded">Confirm Booking</button>
      </form>
    </div>
  );
}
