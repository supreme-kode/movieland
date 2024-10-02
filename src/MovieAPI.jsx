import { useState } from "react";

// URL untuk API OMDb dengan kunci API
const API_URL = "http://www.omdbapi.com/?apikey=5eb10e88";

const useMovieAPI = () => {
  const [loading, setLoading] = useState(false); // Menyimpan status loading
  const [error, setError] = useState(null); // Menyimpan pesan kesalahan

  // Fungsi untuk melakukan pencarian film berdasarkan judul
  const searchMovies = async (title) => {
    setLoading(true); // Set loading ke true saat pencarian dimulai
    setError(null); // Reset error state

    if (!title.trim()) {
      setLoading(false); // Set loading ke false
      setError("Please enter a movie title."); // Pesan kesalahan jika input kosong
      return; // Hentikan eksekusi fungsi
    }

    try {
      const response = await fetch(`${API_URL}&s=${title}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      if (data.Response === "False") {
        throw new Error(data.Error);
      }
      return data.Search || []; // Kembalikan hasil pencarian
    } catch (err) {
      setError(err.message); // Set error message
    } finally {
      setLoading(false); // Set loading ke false setelah selesai
    }
  };

  return { searchMovies, loading, error }; // Mengembalikan fungsi dan state
};

export default useMovieAPI;
