//the useQuery hook executes queries. It uses getPopularMovies-function from the service to fetch data from the Movie DB

import { useQuery } from 'react-query'
import movieDbAPI from '../services/movieDbAPI'

const useMovieByGenre = (id, page) => {
	return useQuery(['movie-by-genre', id], () => movieDbAPI.getMoviesByGenre(page, id)) //QueryKey=g movie-by-genre
}

export default useMovieByGenre