import { Link } from "react-router-dom"

function MovieCard({ movie }) {

  return (
    <article>

      <Link to={`/${movie.Title}`}>

        <figure>
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"}
            alt={movie.Title}
          />
        </figure>

        <h2>{movie.Title}</h2>
        <p>{movie.Year}</p>

      </Link>

    </article>
  )

}

export default MovieCard