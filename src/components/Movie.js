import React from "react";
import "./Movie.css";

function MovieCard(props) {
  return (
    <div className="col">
      <div
        className="card my-3"
        style={{
          backgroundColor: "transparent",
          height: "300px",
          position: "relative",
          border: "none",
        }}
      >
        <img
          className="card-img w-100 d-block"
          src={`https://image.tmdb.org/t/p/original${props.movie.poster_path}`}
          style={{ height: "inherit", objectFit: "fill" }}
          alt="movieImage"
        />
        <div className="card-img-overlay">
          <div className="row g-0" style={{ height: "100%" }}>
            <div className="col-10">
              <h6 className="text-truncate ">{props.movie.title}</h6>
              <p style={{ fontSize: "16px" }}>
                {props.movie.release_date.slice(0, 4)}
              </p>
            </div>
            <div className="col-2">
              <div
                className="text-center d-flex flex-column justify-content-around rubberBand animated text-danger rounded hide"
                style={{
                  height: "100%",
                  backgroundColor: "rgba(255,255,255,0.5)",
                }}
              >
                {props.likedMovies.includes(props.movie) ? (
                  <span onClick={() => props.handleUnlike(props.movie)}>
                    <i className="fas fa-heart fs-4 d-block"></i>
                  </span>
                ) : (
                    <span onClick={() => props.handleLike(props.movie)}>
                  <i 
                    className="far fa-heart fs-4 d-block"
                    
                  ></i>
                 </span>)}
                <i className="fas fa-share-alt-square fs-4 d-block"></i>
                <i
                  className="fas fa-play-circle fs-4 d-block"
                  style={{ animation: "pulse 1.5s infinite" }}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
