import SearchIcon from "./search.svg"; // Mengimpor ikon pencarian
import PropTypes from "prop-types"; // Mengimpor PropTypes

const Search = ({ searchTerm, setSearchTerm, searchMovies }) => {
  // Fungsi untuk menangani event keydown pada input
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      searchMovies(searchTerm); // Panggil fungsi searchMovies
    }
  };

  return (
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
  );
};

// Menambahkan prop types
Search.propTypes = {
  searchTerm: PropTypes.string.isRequired, // Menyatakan bahwa searchTerm adalah string dan wajib
  setSearchTerm: PropTypes.func.isRequired, // Menyatakan bahwa setSearchTerm adalah fungsi dan wajib
  searchMovies: PropTypes.func.isRequired, // Menyatakan bahwa searchMovies adalah fungsi dan wajib
};

export default Search;
