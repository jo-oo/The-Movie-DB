import { Carousel, Row, Col } from 'react-bootstrap'
//import { Link } from 'react-router-dom'

//hooks that makes the query to the different end points
import usePopularMovies from '../hooks/usePopularMovies' //GET /popular
import useTopRatedMovies from '../hooks/useTopRatedMovies' //GET /top_rated

const MovieCarousel = () => {
    const { data: popularMovies } = usePopularMovies()
    const { data: topRatedMovies } = useTopRatedMovies()

    const BASE_URL_IMAGE = 'https://image.tmdb.org/t/p/w500'

	return (
        <Row className="movieCarouselWrapper">

            <Col sm={12} md={4} lg={6}>
                <h2>20 most popular movies</h2>
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
            <Col sm={12} md={4} lg={6}>
                <h2>Top 20!</h2>
                {topRatedMovies && (
                    <Carousel className="my-3 movieCarousel">
                    {topRatedMovies.data.results.map(movie => (
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





