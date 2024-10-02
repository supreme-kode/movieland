import { useState } from "react"; // Mengimpor hooks dari React
import "./App.css"; // Mengimpor stylesheet untuk styling aplikasi
import SearchIcon from "./search.svg"; // Mengimpor ikon pencarian
import MovieList from "./MovieList"; // Mengimpor komponen MovieList untuk menampilkan daftar film

// URL untuk API OMDb dengan kunci API
const API_URL = "http://www.omdbapi.com/?apikey=5eb10e88";

const App = () => {
  // State untuk menyimpan data film, kata pencarian, status loading, dan pesan kesalahan
  const [movies, setMovies] = useState([]); // Menyimpan daftar film
  const [searchTerm, setSearchTerm] = useState(""); // Menyimpan kata pencarian
  const [loading, setLoading] = useState(false); // Menyimpan status loading
  const [error, setError] = useState(null); // Menyimpan pesan kesalahan

  // Fungsi untuk melakukan pencarian film berdasarkan judul
  const searchMovies = async (title) => {
    setLoading(true); // Set loading ke true saat pencarian dimulai
    setError(null); // Reset error state

    // Tambahkan pengecekan untuk searchTerm kosong
    if (!title.trim()) {
      setLoading(false); // Set loading ke false
      setError("Please enter a movie title."); // Pesan kesalahan jika input kosong
      return; // Hentikan eksekusi fungsi
    }

    try {
      // Lakukan fetch ke API dengan judul film
      const response = await fetch(`${API_URL}&s=${title}`);
      // Periksa apakah respons dari API berhasil
      if (!response.ok) {
        throw new Error("Network response was not ok"); // Lempar error jika tidak
      }
      const data = await response.json(); // Mengubah respons menjadi format JSON
      // Periksa apakah API mengembalikan hasil yang valid
      if (data.Response === "False") {
        throw new Error(data.Error); // Lempar error jika respons tidak valid
      }
      // Set state movies dengan hasil pencarian, atau array kosong jika tidak ada hasil
      setMovies(data.Search || []);
    } catch (err) {
      // Tangani kesalahan yang mungkin terjadi selama fetch
      setError(err.message); // Set error message
    } finally {
      setLoading(false); // Set loading ke false setelah selesai
    }
  };

  // Fungsi untuk menangani event keydown pada input
  const handleKeyDown = (event) => {
    // Jika tombol yang ditekan adalah "Enter"
    if (event.key === "Enter") {
      searchMovies(searchTerm); // Panggil fungsi searchMovies
    }
  };

  return (
    <div className="app">
      <h1>MovieLand</h1> {/* Judul aplikasi */}
      <div className="search">
        <input
          placeholder="Search for Movies" // Placeholder untuk input pencarian
          value={searchTerm} // Nilai input dikendalikan oleh state searchTerm
          onChange={(e) => setSearchTerm(e.target.value)} // Update state saat input berubah
          onKeyDown={handleKeyDown} // Panggil handleKeyDown saat ada keydown
        />
        <img
          src={SearchIcon} // Tampilkan ikon pencarian
          alt="search"
          onClick={() => searchMovies(searchTerm)} // Panggil searchMovies saat ikon diklik
        />
      </div>
      {loading ? ( // Jika sedang loading
        <div>Loading...</div> // Tampilkan pesan loading
      ) : error ? ( // Jika ada error
        <div className="error">{error}</div> // Tampilkan pesan error
      ) : (
        // Jika tidak ada loading dan tidak ada error
        <MovieList movies={movies} /> // Tampilkan daftar film
      )}
    </div>
  );
};

export default App; // Ekspor komponen App

/*
State Management: Kode ini menggunakan state untuk mengelola data yang berbeda, termasuk daftar film, kata pencarian, status loading, dan pesan kesalahan.
Fetch API: Menggunakan fetch untuk mengambil data dari API dan menangani error dengan baik.
User Interaction: Mengatur interaksi pengguna melalui input dan event handling, memungkinkan pencarian film hanya ketika pengguna menekan tombol "Enter" atau mengklik ikon pencarian.
 */
