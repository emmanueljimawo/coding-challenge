import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MovieList from "./pages/Movies";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Loading from "./components/Loader";
import Navbar from "./components/Navbar";
import ApiData from "./hooks/api";
import "./App.css";

const url = "https://api.themoviedb.org/3/movie/popular";
const API_KEY = "d0f5f2e135336200362af8a1a73acb17";

function App() {
  const { isloading, data } = ApiData(`${url}?api_key=${API_KEY}`);
  const [likedMovies, setLikedMovies] = useState([]);

  const addLikedMovie = (movie) => {
    setLikedMovies((prev) => [...prev, movie]);
  };

  const removeLikedMovie = (movie) => {
    setLikedMovies((prev) =>
      prev.filter((likedMovie) => likedMovie.id !== movie.id)
    );
  };

  const HomePage = data ? (
    <MovieList
      data={data.results}
      title="Popular Movies"
      handleLike={addLikedMovie}
      handleUnlike={removeLikedMovie}
      likedMovies={likedMovies}
    />
  ) : (
    <h4>Could not fetch data. Please try again later.</h4>
  );
  const LikedPage = (
    <MovieList
      data={likedMovies}
      title="Liked Movies"
      handleLike={addLikedMovie}
      handleUnlike={removeLikedMovie}
      likedMovies={likedMovies}
    />
  );

  return (
    <div>
      <Navbar />
      {isloading ? (
        <Loading />
      ) : (
        <div>
          <div className="container content" style={{ minHeight: "80vh" }}>
            <div>
              <Search />
              <Routes>
                + <Route path="/" element={HomePage} />
                + <Route path="/liked" element={LikedPage} />+{" "}
              </Routes>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
