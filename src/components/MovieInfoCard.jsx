import { Button, Card, Container, Row, Col} from 'react-bootstrap'
import { Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const MovieInfoCard = ({ movie }) => {

	return (
		<Container className="py-3 text-center">
				
			{/*render only if data (movie) is fetched*/}
			{ movie && 

				<Card key={movie.id} className="mb-3 card">
				<Card.Img className="mb-3" variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} /> 
					<Card.Body>
						<Card.Title> {movie.title} </Card.Title>
						<Card.Text className="mb-3 mt-4"> 
							<div>
								<span className="fw-bold"> Released: </span>  {movie.release_date}
							</div>
							<div>
								<span className="fw-bold"> Average score: </span>  {movie.vote_average}
							</div>
							<div className="mb-4">
								<span className="fw-bold"> Overview: </span>  {movie.overview}
							</div>
							
							<div>
								<h3 className="mb-3 mt-4">Cast</h3>

								{/* Render actors in movie */ }
								<div className='d-flex flex-wrap'>
									<Row xs={2} md={4} lg={6} className="g-4 m-1 justify-content-center">
										{movie.credits.cast.map(actor => (
											<Card key={actor.id} className='cast'>
												{actor.profile_path && (
												<Card.Img className= 'mt-3' variant="top" src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} />
												)}
												<Card.Body className='d-flex flex-column'>
													<Card.Title>{actor.name}</Card.Title>
													<Card.Text className='text-muted'>{actor.character}</Card.Text>
													<Button className='mt-auto' as={Link} to={`/actor/${actor.id}`} variant="dark">Read more</Button>
												</Card.Body>
											</Card>
										))}
									</Row>
								</div>
												
							</div>
						</Card.Text>		
					</Card.Body>
						
					{/*Similar movies Carousel*/}
					<Row className="movieCarouselWrapper ml-5">
						<Col className='mt-5' sm={12} md={12} lg={12}>
						<h2 className="mb-4 mt-4">Similar movies</h2>
		
						<Carousel className="my-3 movieCarousel">
							{movie.similar.results.map(movie => (
								<Carousel.Item
									key={movie.id}
									interval={1500}
									action="true"
									as={Link}
									to={`/movie/${movie.id}`}
									>
									<img
										className="d-block w-100 carousel-img"
										src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
										alt="First slide" />
								</Carousel.Item>
							))}
						</Carousel>
						</Col>
					</Row>
				</Card>
			}
		</Container>
	)
}

export default MovieInfoCard