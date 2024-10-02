import { useState } from "react"; // Mengimpor hooks dari React
import "./App.css"; // Mengimpor stylesheet untuk styling aplikasi
import MovieList from "./MovieList"; // Mengimpor komponen MovieList untuk menampilkan daftar film
import Search from "./Search"; // Mengimpor komponen Search
import useMovieAPI from "./MovieAPI"; // Mengimpor hook useMovieAPI

const App = () => {
  const [movies, setMovies] = useState([]); // Menyimpan daftar film
  const [searchTerm, setSearchTerm] = useState(""); // Menyimpan kata pencarian
  const { searchMovies, loading, error } = useMovieAPI(); // Menggunakan hook useMovieAPI

  const handleSearch = async (term) => {
    const results = await searchMovies(term); // Memanggil fungsi pencarian
    setMovies(results); // Set state movies dengan hasil pencarian
  };

  return (
    <div className="app">
      <h1>MovieLand</h1> {/* Judul aplikasi */}
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchMovies={handleSearch}
      />
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        <MovieList movies={movies} />
      )}
    </div>
  );
};

export default App; // Ekspor komponen App
