import { Container, Card, Button } from 'react-bootstrap'
//import useSpecificMovie from '../hooks/useSpecificMovie'
import MovieInfoCard from '../components/MovieInfoCard'
import { useParams } from 'react-router-dom'
import MovieDbAPI from '../services/movieDbAPI'
import { useQuery } from 'react-query'


const SpecificMoviePage = () => {

	const { id } = useParams()
	const { data, isError, error, isLoading } = useQuery(['specificMovie', id], () => MovieDbAPI.getSpecificMovie(id)) //the useSpecificMovie-hook is where we use useQuery
 
	console.log("Data heeere", data);

	return (
		<Container className="py-3 text-center">
			
			{isError && error.message}

			{isLoading && (
				<h2 className="text-center">Loading...</h2>
			)}
  
			{data && (
				<>
					<h1>Info about the movie</h1>
				<MovieInfoCard movie= {data} />
				</>
			)}
			

		</Container>
	)
}

export default SpecificMoviePage
