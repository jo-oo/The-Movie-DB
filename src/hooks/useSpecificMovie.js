//the useQuery hook executes queries. It uses getSpecificMovie-function from the service to fetch data from the Movie DB
/*
import { useQuery } from 'react-query'
import MovieDbAPI from '../services/MovieDbAPI'

const useSpecificMovie = (id) => {
	return useQuery(['specificMovie', id], () => MovieDbAPI.getSpecificMovie(id))
	//QueryKey=specificMovie, send key and id in as an empty array
}

export default useSpecificMovie
*/