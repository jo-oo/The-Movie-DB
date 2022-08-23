//the useQuery hook executes queries. It uses getPopularMovies-function from the service to fetch data from the Movie DB

import { useQuery } from 'react-query'
import MovieDbAPI from '../services/MovieDbAPI'

const usePopularMovies = () => {
	return useQuery('popularMovies', MovieDbAPI.getPopularMovies) //QueryKey=popularMovies
}

export default usePopularMovies