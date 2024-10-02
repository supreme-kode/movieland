import PropTypes from "prop-types"; // Mengimpor PropTypes untuk validasi props
import MovieCard from "./MovieCard"; // Mengimpor komponen MovieCard untuk menampilkan detail film

// Komponen MovieList untuk menampilkan daftar film
const MovieList = ({ movies }) => {
  return (
    <>
      {movies?.length > 0 ? ( // Memeriksa apakah ada film dalam daftar
        <div className="container">
          {" "}
          {/* Kontainer untuk menampung MovieCard */}
          {movies.map(
            (
              movie // Mengiterasi setiap film dalam array movies
            ) => (
              <MovieCard key={movie.imdbID} movie={movie} /> // Menghasilkan MovieCard untuk setiap film
            )
          )}
        </div>
      ) : (
        <div className="empty">
          {" "}
          {/* Jika tidak ada film ditemukan */}
          <h2>No movie found</h2> {/* Tampilkan pesan bahwa tidak ada film */}
        </div>
      )}
    </>
  );
};

// Validasi prop types untuk komponen MovieList
MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    // Memastikan movies adalah array
    PropTypes.shape({
      // Setiap item dalam array adalah objek dengan bentuk tertentu
      imdbID: PropTypes.string.isRequired, // imdbID harus ada dan bertipe string
      // Tambahkan validasi properti lain sesuai kebutuhan
    })
  ).isRequired, // movies harus diisi
};

export default MovieList; // Ekspor komponen MovieList

/*
 * PropTypes: Digunakan untuk memvalidasi bahwa movies adalah array dan setiap elemen dalam array adalah objek yang memiliki imdbID yang diperlukan.
 * Conditional Rendering: Menggunakan pendekatan rendering bersyarat untuk menampilkan daftar film atau pesan kosong jika tidak ada film yang ditemukan.
 * Mapping: Menggunakan map untuk menghasilkan komponen MovieCard untuk setiap film dalam array movies.
 */
