import { Carousel, Row, Col } from 'react-bootstrap'
//import { Link } from 'react-router-dom'

//hooks that makes the query to the different end points
import usePopularMovies from '../hooks/usePopularMovies' //GET /popular
import useTopRatedMovies from '../hooks/useTopRatedMovies' //GET /top_rated
import useCurrentMovies from '../hooks/useCurrentMovies' //GET /now_playing

const MovieCarousel = () => {
    const { data: popularMovies } = usePopularMovies()
    const { data: topRatedMovies } = useTopRatedMovies()
    const { data: currentMovies } = useCurrentMovies()

    const BASE_URL_IMAGE = 'https://image.tmdb.org/t/p/w500'

	return (
        <><Row className="movieCarouselWrapper">
            <Col sm={12} md={6} lg={6}>
                <h2>In Cinemas now!</h2>
                {currentMovies && (
                    <Carousel className="my-3 movieCarousel">
                        {currentMovies.data.results.map(movie => (
                            <Carousel.Item
                                key={movie.id}
                                interval={1500}
                                action="true"
                            >
                                <img
                                    className="d-block w-100"
                                    src={BASE_URL_IMAGE + movie.poster_path}
                                    alt="First slide" />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                )}
            </Col>
            <Col sm={12} md={6} lg={6}>
                <h2>Top 20!</h2>
                {topRatedMovies && (
                    <Carousel className="my-3 movieCarousel">
                        {topRatedMovies.data.results.map(movie => (
                            <Carousel.Item
                                key={movie.id}
                                interval={1500}
                                action="true"
                            >
                                <img
                                    className="d-block w-100"
                                    src={BASE_URL_IMAGE + movie.poster_path}
                                    alt="First slide" />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                )}
            </Col>
        </Row>
        <Row className="movieCarouselWrapper">
            <Col className="d-md-none d-l-none d-flex" sm={12} md={6} lg={6}>
                <h2>Popular!</h2>
            </Col>
            <Col className="d-sm-none d-md-block text-center" sm={12} md={6} lg={6}>
                <h3 class="animate-charcter"> Trending now</h3>
            </Col>
            <Col sm={12} md={6} lg={6}>
                {popularMovies && (
                    <Carousel className="my-3 movieCarousel">
                        {popularMovies.data.results.map(movie => (
                            <Carousel.Item
                                key={movie.id}
                                    interval={1500}
                                    action="true"
                                >
                                    <img
                                        className="d-block w-100"
                                        src={BASE_URL_IMAGE + movie.poster_path}
                                        alt="First slide" />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    )}
                </Col>
            </Row></>
	)
}

export default MovieCarousel





