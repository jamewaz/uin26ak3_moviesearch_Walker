import { useEffect, useState } from "react"
import { searchMovies } from "../services/omdbApi"
import MovieList from "../components/MovieList"

function Home() {

  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    searchMovies("James Bond").then(setMovies)
  }, [])

  async function handleSearch(e) {
    const value = e.target.value
    setSearch(value)

    if (value.length >= 3) {
      const results = await searchMovies(value)
      setMovies(results)
    }
  }

  return (
    <main>

      <header>
        <h1>Movie Search</h1>
      </header>

      <section>
        <label htmlFor="search">Search movie</label>
        <input
          id="search"
          type="text"
          value={search}
          onChange={handleSearch}
        />
      </section>

      <MovieList movies={movies} />

    </main>
  )
}

export default Home