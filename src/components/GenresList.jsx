import { Card, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const GenresList = ({ genres }) => {   
	
	return (
		<Container className="py-3 text-center">
				
			{/*render only if data (genres) is fetched. Renders all Genres as links*/}
			{ genres && 
                 <div className='d-flex flex-wrap m-2'>
                 {/*prints all genres */}
                 <Row xs={2} md={4} lg={6} className="g-4">
                     {genres.genres.map(genre => (
                        <Card key={genre.id} className='mt-auto m-1' as={Link} to={`/genres/genre?genre_id=${genre.id}&page=1`} variant="dark"
                            onClick={() => {
                                setSearchParams({ 
                                    page: 1 ,
                                    genre_id: genre.id, 
                                })
                            }}>
                            <Card.Body className='d-flex flex-column'>
                                <Card.Title>{genre.name}</Card.Title>
                            </Card.Body>
                        </Card>
                    ))}
                </Row>
                </div>
			}
		</Container>
	)
}

export default GenresList