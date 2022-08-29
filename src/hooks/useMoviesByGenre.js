//the useQuery hook executes queries. It uses getPopularMovies-function from the service to fetch data from the Movie DB

import { useQuery } from 'react-query'
import movieDbAPI from '../services/movieDbAPI'

//gives it the genre_id from the service. also returns that genre_id from getMoviesByGenre-function
const useMovieByGenre = (page, genre_id) => {
	return useQuery(['movie-by-genre', {page, genre_id} ], movieDbAPI.getMoviesByGenre,{keepPreviousData: true}) //QueryKey=g movie-by-genre
}

export default useMovieByGenre