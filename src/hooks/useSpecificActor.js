//the useQuery hook executes queries. It uses getPopularMovies-function from the service to fetch data from the Movie DB

import { useQuery } from 'react-query'
import movieDbAPI from '../services/movieDbAPI'


const useSpecificActor= (id) => {
	console.log("useSpecificActor", id)
	return useQuery(['actor', id], () => movieDbAPI.getSpecificActor(id))
}


export default useSpecificActor