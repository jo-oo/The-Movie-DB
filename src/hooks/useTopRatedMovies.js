//the useQuery hook executes queries. It uses getPopularMovies-function from the service to fetch data from the Movie DB

import { useQuery } from 'react-query'
import movieDbAPI from '../services/movieDbAPI'

const useTopRatedMovies = () => {
	return useQuery('topRatedMovies', movieDbAPI.getTopRatedMovies) //QueryKey=topRatedMovies
}

export default useTopRatedMovies