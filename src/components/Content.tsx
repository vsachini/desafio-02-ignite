import { useEffect, useState } from 'react'
import { api } from '../services/api'
import { Header } from './Header'
import { MovieCard } from './MovieCard'
import { GenreResponseProps } from './SideBar'

interface MovieProps {
  imdbID: string
  Title: string
  Poster: string
  Ratings: Array<{
    Source: string
    Value: string
  }>
  Runtime: string
}

interface ContentProps {
  selectedGenreId: number
  selectedGenre: GenreResponseProps
}

export function Content({ selectedGenreId, selectedGenre }: ContentProps) {
  const [movies, setMovies] = useState<MovieProps[]>([])

  useEffect(() => {
    api
      .get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`)
      .then((response) => {
        setMovies(response.data)
      })
  }, [selectedGenreId])

  return (
    <div className="container">
      <Header category={selectedGenre?.name} />

      <main>
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  )
}
