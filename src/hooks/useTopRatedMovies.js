//the useQuery hook executes queries. It uses getPopularMovies-function from the service to fetch data from the Movie DB

import { useQuery } from 'react-query'
import MovieDbAPI from '../services/MovieDbAPI'

const useTopRatedMovies = () => {
	return useQuery('topRatedMovies', MovieDbAPI.getTopRatedMovies) //QueryKey=topRatedMovies
}

export default useTopRatedMovies