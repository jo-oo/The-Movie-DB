//the useQuery hook executes queries. It uses getPopularMovies-function from the service to fetch data from the Movie DB

import { useQuery } from 'react-query'
import movieDbAPI from '../services/movieDbAPI'

const useCurrentMovies = () => {
	return useQuery('currentMovies', movieDbAPI.getCurrentMovies) //QueryKey=currentMovies
}

export default useCurrentMovies