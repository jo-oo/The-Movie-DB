import { Container, Card, Button } from 'react-bootstrap'
import ActorInfoCard from '../components/ActorInfoCard'
import {  useParams } from 'react-router-dom'
import MovieDbAPI from '../services/movieDbAPI'
import { useQuery } from 'react-query'
//import useSpecificActor from '../hooks/useSpecificActor'


const SpecificActorPage = () => {

	const { id } = useParams()
	const { data, isError, error, isLoading } =  useQuery(['specificActor', id], () => MovieDbAPI.getSpecificActor(id)) //the useSpecificActor-hook is where we use useQuery
 
	console.log("Actor data", data);

	return (
		<Container className="py-3 text-center">
				
			{isError && error.message}

			{isLoading && (
				<h2 className="text-center">Loading...</h2>
			)}
  
			{data && (
				<>
					<h1>Info about the actor</h1>
				    <ActorInfoCard actor= {data} />
				</>
			)}

	
	
			

		</Container>
	)
}

export default SpecificActorPage
