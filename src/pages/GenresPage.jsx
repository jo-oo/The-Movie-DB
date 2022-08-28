import { Container, Card, Button, Row } from 'react-bootstrap'
import useGenres from "../hooks/useGenres"
//import GenresCard from '../components/GenresCard'

const GenresPage = () => {
	const { data, isError, error, isLoading } = useGenres() //the usePopularMovies-hook is where we use useQuery

	return (
		<Container className="py-3 text-center">
			
			{isError && error.message}

			{isLoading && (
				<h2 className="text-center">Loading...</h2>
			)}

			{data && (
				<>
				 	<h1>Genres</h1>
					{/*<GenresCard data={data} /> */}

                    <div className='d-flex flex-wrap'>
                    {/*prints all genres */}
                    <Row xs={2} md={4} lg={6} className="g-4">
                        {data.genres.map(genre => (
                            <Card key={genre.id} className=''>
                                <Card.Body className='d-flex flex-column'>
                                    <Card.Title>{genre.name}</Card.Title>

                                </Card.Body>
                            </Card>
                        ))}
                    </Row>
                    </div>


                </>
			)}

		</Container>
	)
}

export default GenresPage