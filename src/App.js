import { useState, useEffect } from 'react';
import './App.css';

function App() {
  let [movieInfo, setMovieInfo] = useState("The Avengers");
  let [title, setTitle] = useState("The Avengers");

  useEffect(() => {
      getMovieData();
    }, [])

    function readTitle(value) {
      setTitle(value)
    }

    function getMovieData() {
      let url = `http://www.omdbapi.com/?t=${title}&apikey=928c896f`;

      fetch(url)
        .then((response) => response.json())
        .then((movie) => {
          console.log(movie)
          setMovieInfo(movie)
        })
        .catch((err) => {
          console.log(err);
        })
    }

  return (
    <div className="App">
      <div className="container">
        <div className="padd-search">
          <h1>Search Movie Details</h1>
          <div className="search-group">
            <input type="text" placeholder="Enter Movie" onChange={(event) => {readTitle(event.target.value)}} className="movie-search"/>
            <button className="btn" onClick={getMovieData}>Get Movie</button>
          </div>
          {
            movieInfo?.Error === undefined ? (
              <div className="movie">
                <div className="poster">
                  <img src={movieInfo?.Poster} className="img-poster" alt="Movie Poster" />
                </div>
                <div className="details">
                  <div className="padd">
                    <h1>{movieInfo?.Title}</h1>
                    <p><strong>Genre</strong>: {movieInfo?.Genre}</p>
                    <p><strong>Directed by</strong>: {movieInfo?.Director}</p>
                    <p><strong>Plot</strong>: {movieInfo?.Plot}</p>
                    <p><strong>Cast</strong>: {movieInfo?.Actors}</p>
                    <p><strong>BoxOffice</strong>: {movieInfo?.BoxOffice}</p>
                    <p><strong>Language</strong>: {movieInfo?.Language}</p>
                    <p><strong>Released</strong>: {movieInfo?.Released}</p>
                    <p><strong>Runtime</strong>: {movieInfo?.Runtime}</p>
                    <p><strong>Rated</strong>: {movieInfo?.Rated}</p>
                    
                    {/* <div className="movie-ratings">
                      {
                        movieInfo?.Ratings.map((rating, index) => (
                          <div key={index}>
                            <strong>{rating.Source}</strong>
                            <h3>{rating.Value}</h3>
                          </div>
                        ))
                      }
                    </div>   */}
                    
                </div>
              </div>
            </div>
            ) : 
            (
              <h1>Movie Not Found</h1>
            )
          }

        </div>
     
      </div>
    </div>
  );
}

export default App;
