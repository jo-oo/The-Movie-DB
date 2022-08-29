import { Button, Card, Container, Row} from 'react-bootstrap'
import { Link, useNavigate} from 'react-router-dom'
//import { Link } from 'react-router-dom'

const GenresList = ({ genres }) => {   
	const navigate = useNavigate() 
    console.log("GenresList", genres)

	return (
		<Container className="py-3 text-center">
				
			{/*render only if data (genres) is fetched. Renders all Genres as links*/}
			 { genres && 
                 <div className='d-flex flex-wrap'>
                 {/*prints all genres */}
                 <Row xs={2} md={4} lg={6} className="g-4">
                     {genres.genres.map(genre => (
                         <Card key={genre.id} className='mt-auto' as={Link} to={`/genres/${genre.id}/1/`} variant="dark">
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