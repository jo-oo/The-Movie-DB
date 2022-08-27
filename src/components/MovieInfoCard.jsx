import { Button, Card, Container, Row} from 'react-bootstrap'
import { Link, useNavigate} from 'react-router-dom'
//import { Link } from 'react-router-dom'

const MovieInfoCard = ({ movie }) => {

	const navigate = useNavigate() 

	return (
		<Container className="py-3 text-center">
				
			{/*render only if data (movie) is fetched*/}
			 { movie && 

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
											
											<div>
											<h3>Cast</h3>

											{/* Render actors in movie */ }
											<div className='d-flex flex-wrap'>
											<Row xs={2} md={4} lg={6} className="g-4">
												{movie.credits.cast.map(actor => (
													<Card key={actor.id} className=''>
														{actor.profile_path && (
															<Card.Img className= 'mt-3' variant="top" src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} />
														)}
														<Card.Body className='d-flex flex-column'>
															<Card.Title>{actor.name}</Card.Title>
															<Card.Text className='text-muted'>{actor.character}</Card.Text>
															<Button className='mt-auto' as={Link} to={`/person/${actor.id}`} variant="dark">Read more</Button>
														</Card.Body>
													</Card>
												))}
											</Row>
											</div>
												
										</div>
										</Card.Text>
									
								</Card.Body>
						</Card>

						}
					</Container>
	)
}

export default MovieInfoCard