const API_KEY = "fdfa2aa1"
const BASE_URL = "https://www.omdbapi.com/"

export async function searchMovies(query) {
  const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${query}`)
  const data = await response.json()
  return data.Search || []
}

export async function getMovie(title) {
  const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&t=${title}`)
  const data = await response.json()
  return data
}