import { Button, Card, Container, Row} from 'react-bootstrap'
import { Link, useNavigate} from 'react-router-dom'
//import { Link } from 'react-router-dom'

const MoviesByGenreList = ({movies}) => {   
	const navigate = useNavigate() 
    console.log("Movies by genre", movies)

	return (
		<Container className="py-3 text-center">
				
			{/*render only if data (movies) is fetched. Renders all Genres as links*/}
			 { movies && 
	<Card key="" className="mb-3 card">
						

    {/* Render movies in genre */ }
    <div className='d-flex flex-wrap'>
    <Row xs={2} md={4} lg={6} className="g-4">
        {
        movies.data.results.map((movie) => (
            <Card key={movie.id} className='movie'>
                {movie.poster_path && (
                    <Card.Img className= 'mt-3' variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                )}
                <Card.Body className='d-flex flex-column'>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text className='text-muted'>{movie.vote_average}</Card.Text>
                    <Button className='mt-auto' as={Link} to={`/movie/${movie.id}`} variant="dark">Read more</Button>
                    
                </Card.Body>
            </Card>
        ))
        }
    </Row>
    </div>

</Card>

			}
		</Container>
	)
}

export default MoviesByGenreList