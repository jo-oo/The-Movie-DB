import { Container } from 'react-bootstrap'
import ActorInfoCard from '../components/ActorInfoCard'
import {  useParams } from 'react-router-dom'
import useSpecificActor from '../hooks/useSpecificActor'


const SpecificActorPage = () => {

	const { id } = useParams()
	const { data, isError, error, isLoading } = useSpecificActor(id) //the useSpecificActor-hook is where we use useQuery
	

	console.log("Actor data", data);

	return (
		<Container className="py-3 text-center">
				
			{isError && error.message}

			{isLoading && (
				<h2 className="text-center">Loading...</h2>
			)}
  
			{data && (
				<>
					<h1 className="mb-3 mt-3">Info about the actor</h1>
				    <ActorInfoCard actor= {data} />
				</>
			)}
			
		</Container>
	)
}

export default SpecificActorPage
