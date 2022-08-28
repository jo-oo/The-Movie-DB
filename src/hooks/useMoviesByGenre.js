//the useQuery hook executes queries. It uses getPopularMovies-function from the service to fetch data from the Movie DB

import { useQuery } from 'react-query'
import movieDbAPI from '../services/movieDbAPI'

const useMovieByGenre = (id) => {
	return useQuery(['movie-by-genre', id], () => movieDbAPI.getMoviesByGenre(1, id)) //QueryKey=g movie-by-genre
}

export default useMovieByGenre