import { Container, Card, Button } from 'react-bootstrap'
import useTopRatedMovies from "../hooks/useTopRatedMovies"
import MovieInfoCard from '../components/MovieInfoCard'

const TopRatedMoviesPage = () => {
	const { data, isError, error, isLoading } = useTopRatedMovies() //the useTopRatedMovies-hook is where we use useQuery

	return (
		<Container className="py-3 text-center">
			
			{isError && error.message}

			{isLoading && (
				<h2 className="text-center">Loading...</h2>
			)}

			{data && (
				<>
					<h1>Top 20!</h1>
					<MovieInfoCard data={data} /> 
				</>
			)}

		</Container>
	)
}

export default TopRatedMoviesPage
