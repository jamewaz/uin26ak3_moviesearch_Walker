import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getMovie } from "../services/omdbApi"

function MoviePage() {

  const { movie } = useParams()
  const [data, setData] = useState(null)

  useEffect(() => {
    getMovie(movie).then(setData)
  }, [movie])

  if (!data) {
    return <p>Loading...</p>
  }

  return (
    <main>

      <header>
        <h1>{data.Title}</h1>
      </header>

      <section>
        <img src={data.Poster} alt={data.Title} />
        <p>{data.Year}</p>
        <p>{data.Plot}</p>
      </section>

    </main>
  )
}

export default MoviePage