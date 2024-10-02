import PropTypes from "prop-types"; // Mengimpor PropTypes untuk validasi props

// Komponen MovieCard untuk menampilkan informasi film tunggal
const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      {" "}
      {/* Kontainer untuk informasi film */}
      <div>
        <p>{movie.Year}</p> {/* Menampilkan tahun rilis film */}
      </div>
      <div>
        <img
          src={
            movie.Poster !== "N/A" // Memeriksa apakah poster tersedia
              ? movie.Poster // Jika tersedia, gunakan URL poster film
              : "https://via.placeholder.com/400" // Jika tidak, tampilkan placeholder
          }
          alt={movie.Title} // Alt text untuk gambar poster
        />
      </div>
      <div>
        <span>{movie.Type}</span>{" "}
        {/* Menampilkan jenis film (misalnya, movie, series) */}
        <h3>{movie.Title}</h3> {/* Menampilkan judul film */}
      </div>
    </div>
  );
};

// Definisikan PropTypes untuk validasi props
MovieCard.propTypes = {
  movie: PropTypes.shape({
    // Memastikan movie adalah objek dengan bentuk tertentu
    Year: PropTypes.string.isRequired, // Year harus ada dan bertipe string
    Poster: PropTypes.string.isRequired, // Poster harus ada dan bertipe string
    Type: PropTypes.string.isRequired, // Type harus ada dan bertipe string
    Title: PropTypes.string.isRequired, // Title harus ada dan bertipe string
  }).isRequired, // movie harus diisi
};

export default MovieCard; // Ekspor komponen MovieCard

/*
 *  Props: Komponen ini menerima satu prop bernama movie, yang diharapkan memiliki struktur tertentu.
 * Conditional Rendering: Menggunakan pengecekan untuk menentukan apakah URL poster film tersedia, dan jika tidak, menggunakan URL gambar placeholder.
 * PropTypes: Validasi prop digunakan untuk memastikan bahwa semua informasi yang diperlukan tentang film disediakan dan dalam format yang benar.
 */
