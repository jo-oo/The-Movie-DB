import Container from 'react-bootstrap/Container'

//components
import MovieCarousel from '../components/MovieCarousel'

//hooks that makes the query to the different end points
import usePopularMovies from '../hooks/usePopularMovies' //GET /popular
import useTopRatedMovies from '../hooks/useTopRatedMovies' //GET /top_rated
import useCurrentMovies from '../hooks/useCurrentMovies' //GET /now_playing

const HomePage = () => {

	const { data: popularMovies, error: popularMoviesError, isError: popularMoviesIsError, isLoading: popularMoviesIsLoading } = usePopularMovies()
	const { data: topRatedMovies, error: topRatedMoviesError, isError: topRatedMoviesIsError, isLoading: topRatedMoviesIsLoading } = useTopRatedMovies()
    const { data: currentMovies, error: currentMoviesError, isError: currentMoviesIsError, isLoading: currentMoviesIsLoading } = useCurrentMovies()

	return (
		<Container className="py-3 my-3">
			
			<h1 className="mb-1 mt-3">Welcome to The Movie DB!</h1>

			{popularMoviesIsLoading && <p>Loading Popular ones....</p>}
			{popularMoviesIsError && popularMoviesError.message}

			{topRatedMoviesIsLoading && <p>Loading Top 20...</p>}
			{topRatedMoviesIsError && topRatedMoviesError.message}

			{currentMoviesIsLoading && <p>Loading in cinemas now...</p>}
			{currentMoviesIsError && currentMoviesError.message}
			
			<MovieCarousel 
			popularMovies={popularMovies} 
			topRatedMovies={topRatedMovies} 
			currentMovies={currentMovies}
			/>
		
		</Container>
	)
}

export default HomePage