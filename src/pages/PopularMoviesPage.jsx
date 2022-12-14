/*import { Container, Card, Button } from 'react-bootstrap'
import usePopularMovies from "../hooks/usePopularMovies"
import MovieInfoCard from '../components/MovieInfoCard'

const PopularMoviesPage = () => {
	const { data, isError, error, isLoading } = usePopularMovies() //the usePopularMovies-hook is where we use useQuery

	return (
		<Container className="py-3 text-center">
			
			{isError && error.message}

			{isLoading && (
				<h2 className="text-center">Loading...</h2>
			)}

			{data && (
				<>
				 	<h1>Popular movies</h1>
					<MovieInfoCard data={data} /> 
				</>
			)}

		</Container>
	)
}

export default PopularMoviesPage*/