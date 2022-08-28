//the useQuery hook executes queries. It uses getSpecificMovie-function from the service to fetch data from the Movie DB

import { useQuery } from 'react-query'
import movieDbAPI from '../services/movieDbAPI'

const useSpecificMovie = (id) => {
	return useQuery(['specificMovie', id], () => movieDbAPI.getSpecificMovie(id))
	//QueryKey=specificMovie, send key and id in as an empty array
}

export default useSpecificMovie
