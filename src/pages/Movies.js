import React from "react";
import MovieCard from "../components/Movie";

function MovieList(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 justify-content-center justify-content-sm-start py-3">
        {props.data.length > 0 ? (
          props.data.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              handleLike={props.handleLike}
              handleUnlike={props.handleUnlike}
              likedMovies={props.likedMovies}
            />
          ))
        ) : (
          <h4>There are no movies</h4>
        )}
      </div>
    </div>
  );
}

export default MovieList;
