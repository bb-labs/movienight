import { useState } from 'react';
import './Form.css';
import Loading from './Loading.jsx'

const MovieForm = () => {
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    titleType: [],
    startYear: '',
    endYear: '',
    genres: [],
    minRating: '',
    maxRating: '',
    popularity: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTitleTypeChange = (event) => {
    const selectedOption = event.target.value;
    if (selectedOption && !formData.titleType.includes(selectedOption)) {
      setFormData({
        ...formData,
        titleType: [...formData.titleType, selectedOption],
      });
    }
  };

  const handleTitleTypeRemove = (optionToRemove) => {
    const updatedTitleType = formData.titleType.filter((option) => option !== optionToRemove);
    setFormData({
      ...formData,
      titleType: updatedTitleType,
    });
  };

  const handleGenresChange = (event) => {
    const selectedOption = event.target.value;
    if (selectedOption && !formData.genres.includes(selectedOption)) {
      setFormData({
        ...formData,
        genres: [...formData.genres, selectedOption],
      });
    }
  };

  const handleGenresRemove = (optionToRemove) => {
    const updatedGenres = formData.genres.filter((option) => option !== optionToRemove);
    setFormData({
      ...formData,
      genres: updatedGenres,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle form submission here, e.g., make an API request.
    // Use formData to get the form data.
  };

  // Generate an array of years from 1950 to 2023
  const yearOptions = [];
  for (let year = 1950; year <= 2023; year++) {
    yearOptions.push(year.toString());
  }

  const genreOptions = [
    'Documentary',
    'Animation',
    'Romance',
    'Comedy',
    'Sport',
    'News',
    'Drama',
    'Fantasy',
    'Horror',
    'Biography',
    'Music',
    'War',
    'Crime',
    'Western',
    'Family',
    'Adventure',
    'Action',
    'History',
    'Mystery',
    'Sci-Fi',
    'Musical',
    'Thriller',
    'Film',
    'Talk',
    'Game',
    'Reality',
  ];

  const popularityOptions = [
    'Slept On',
    'Not a Big Hit',
    'I May Have Heard of It',
    'Who Hasn\'t Heard of This',
    'Culturally Iconic',
  ];

  if (loading) {
    return <Loading />
  }

  return (
    <div className="container">
      <div className="form-container">
        <h2>Movie Selection Form</h2>
        <form className="form" onSubmit={handleSubmit}>
          {/* Title Type */}
          <div className="dropdown-container">
            <label className="label">Title Type:</label>
            <div className="dropdown-input">
              <select
                className="dropdown"
                value=""
                onChange={handleTitleTypeChange}
              >
                <option value="">Select an option</option>
                {['Short', 'Movie', 'TV Show', 'TV Miniseries', 'TV Special'].map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {formData.titleType.length > 0 && (
            <div className="pill-container">
              {formData.titleType.map((option) => (
                <div key={option} className="pill">
                  {option}
                  <span className="remove-button" onClick={() => handleTitleTypeRemove(option)}>
                    x
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Start Year */}
          <div className="dropdown-container">
            <label className="label">Start Year:</label>
            <div className="dropdown-input">
              <select
                className="dropdown"
                name="startYear"
                value={formData.startYear}
                onChange={handleInputChange}
              >
                <option value="">Include from the beginning of time</option>
                {yearOptions.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* End Year */}
          <div className="dropdown-container">
            <label className="label">End Year:</label>
            <div className="dropdown-input">
              <select
                className="dropdown"
                name="endYear"
                value={formData.endYear}
                onChange={handleInputChange}
              >
                <option value="">Include all up to today!</option>
                {yearOptions.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Genres */}
          <div className="dropdown-container">
            <label className="label">Genres:</label>
            <div className="dropdown-input">
              <select
                className="dropdown"
                value=""
                onChange={handleGenresChange}
              >
                <option value="">Select an option</option>
                {genreOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {formData.genres.length > 0 && (
            <div className="pill-container">
              {formData.genres.map((option) => (
                <div key={option} className="pill">
                  {option}
                  <span className="remove-button" onClick={() => handleGenresRemove(option)}>
                    x
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Minimum Rating */}
          <div className="dropdown-container">
            <label className="label">Minimum Rating:</label>
            <input
              className="input"
              type="number"
              name="minRating"
              value={formData.minRating}
              onChange={handleInputChange}
              placeholder="0"
              min="0" // Minimum value
              max="10" // Maximum value
            />
          </div>

          {/* Maximum Rating */}
          <div className="dropdown-container">
            <label className="label">Maximum Rating:</label>
            <input
              className="input"
              type="number"
              name="maxRating"
              value={formData.maxRating}
              onChange={handleInputChange}
              placeholder="10"
              min="0" // Minimum value
              max="10" // Maximum value
            />
          </div>

          {/* Popularity */}
          <div className="dropdown-container">
            <label className="label">Popularity:</label>
            <div className="dropdown-input">
              <select
                className="dropdown"
                name="popularity"
                value={formData.popularity}
                onChange={handleInputChange}
              >
                <option value="">Include them all!</option> {/* Placeholder text */}
                {popularityOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button className="button" type="submit" onClick={() => {
            setLoading(true)
          }}>
            Search Movies
          </button>
        </form>
      </div>
    </div>
  );
};

export default MovieForm;
