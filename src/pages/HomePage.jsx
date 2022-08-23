import { Container, Card, Button } from 'react-bootstrap'
import usePopularMovies from "../hooks/usePopularMovies"


const PopularMovies = () => {
	const { data, isError, error, isLoading } = usePopularMovies() //the usePopularMovies-hook is where we use useQuery

	return (
		<Container className="py-3 text-center">
			
			{isError && error.message}

			{isLoading && (
				<h2 className="text-center">Loading...</h2>
			)}

			{data && (
				<>
					<Container className="py-3 text-center">

						<h1>Popular movies</h1>

						{data.data.results.map((movie) => (

						<Card key={movie.id} className="mb-3">
							<Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} /> 
								<Card.Body>
									<Card.Title> {movie.original_title} </Card.Title>
										<Card.Text> 
											<div>
												<span className="fw-bold"> Released: </span>  {movie.release_date}
											</div>
											<div>
												<span className="fw-bold"> Average score: </span>  {movie.vote_average}
											</div>
											<div>
												<span className="fw-bold"> Overview: </span>  {movie.overview}
											</div>
										</Card.Text>
										<Button 
											//as={Link}
											//to={`/movie/${movie.id}`}
											variant="primary">
											Read more
										</Button>
								</Card.Body>
						</Card>

						))}
					</Container>
				</>
			)}

		</Container>
	)
}

export default PopularMovies