import { Button, Card, Container, Col, Row} from 'react-bootstrap'
import { Link, useNavigate} from 'react-router-dom'
//import { Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'

const ActorInfoCard = ({ actor }) => {

	const navigate = useNavigate() 
    console.log(actor);

	return (
		<Container className="py-3 text-center">
				
			{/*render only if data (movie) is fetched*/}
			 { actor && ( 
               
                <Card key = {actor.id} className=''>

                    
                    <Card.Body>
                        <Card>
                    {/* Render info about the actor*/ }
                    <div className='d-flex flex-wrap m-3'>
                        <Col xs={4} md={2} lg={4} className="g-4">
                        {actor.profile_path && (
                                            <Card.Img className='actor-img' variant="top" src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} />
                                        )}
                            </Col>
                                <Col xs={8} md={10} lg={6} className="g-4"> 
                                    <Card.Text className='strong'> Place of birth: {actor.place_of_birth}</Card.Text>
                                    <Card.Text className='strong'> Popularity: {actor.popularity}</Card.Text>
                                </Col>
                            <Col>
                        
                        </Col>
                    </div>
                    </Card>


                    <h3>Filmography</h3>

                        {/* Render movies actor appeared in*/ }
                        <div className='d-flex flex-wrap'>

                            <Row xs={2} md={4} lg={6} className="g-4">
                                {actor.credits.cast.map(movie => (
                                    <Card key={movie.id} className=''>
                                        {movie.poster_path && (
                                            <Card.Img className= 'mt-3' variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                                        )}
                                        <Card.Body className='d-flex flex-column'>
                                            <Card.Title>{movie.title}</Card.Title>
                                            <Card.Text className='text-muted'> Average vote: {movie.vote_average}</Card.Text>
                                            <Card.Text className='text-muted'> Popularity: {movie.popularity}</Card.Text>
                                            <Button className='mt-auto' as={Link} to={`/movie/${movie.id}`} variant="dark">Read more</Button>
                                        </Card.Body>
                                    </Card>
                                 ))}
                            </Row>
                        </div>

                    </Card.Body>
                </Card>
            )}
        </Container>
	)
}




export default ActorInfoCard