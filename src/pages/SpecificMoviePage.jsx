import { Container, Card, Button } from 'react-bootstrap'
import useSpecificMovie from '../hooks/useSpecificMovie'
import MovieInfoCard from '../components/MovieInfoCard'
import {  Link, useNavigate, useParams } from 'react-router-dom'


const SpecificMoviePage = () => {

	const { id } = useParams()
	const { data, isError, error, isLoading } = useSpecificMovie(id) //the useSpecificMovie-hook is where we use useQuery
 
	console.log("Data heeere", data);

	return (
		<Container className="py-3 text-center">
			
			{isError && error.message}

			{isLoading && (
				<h2 className="text-center">Loading...</h2>
			)}
  
			{data && (
				<>
					<h1 className="mb-3 mt-3">Info about the movie</h1>
					<MovieInfoCard movie= {data} />
				</>
			)}
			
		</Container>
	)
}

export default SpecificMoviePage
