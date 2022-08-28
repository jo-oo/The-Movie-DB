//the useQuery hook executes queries. It uses getPopularMovies-function from the service to fetch data from the Movie DB

import { useQuery } from 'react-query'
import movieDbAPI from '../services/movieDbAPI'

const useGenres = () => {
	return useQuery(['genres'], movieDbAPI.getGenres) //QueryKey=genres
}

export default useGenres