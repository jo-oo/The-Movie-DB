import { Button, Card, Container } from 'react-bootstrap'
//import { Link } from 'react-router-dom'

const MovieInfoCard = ({ data }) => {
	return (
		<Container className="py-3 text-center">

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
	)
}

export default MovieInfoCard