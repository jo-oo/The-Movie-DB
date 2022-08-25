import { Carousel, Row, Col } from 'react-bootstrap'
//import { Link } from 'react-router-dom'

//hooks that makes the query to the dirrerent end points
import usePopularMovies from '../hooks/usePopularMovies' //GET /popular

const MovieCarousel = () => {
    const { data: popularMovies } = usePopularMovies()

    const BASE_URL_IMAGE = 'https://image.tmdb.org/t/p/w500'

	return (
        <Row className="movieCarouselWrapper">
            <Col sm={12} md={5} lg={12}>
                <h5>20 most popular movies</h5>
                {popularMovies && (
                    <Carousel className="my-3 movieCarousel">
                    {popularMovies.data.results.map(movie => (
                    <Carousel.Item 
                        key={movie.id} 
                        interval={1500} 
                        action="true"
                        //as={Link}
                        //to={`/movie/${movie.id}`}
                    >
                        <img 
                        className="d-block w-100"
                        src={BASE_URL_IMAGE + movie.poster_path}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    ))}
                </Carousel>
                )} 
            </Col>
        </Row>
	)
}

export default MovieCarousel





