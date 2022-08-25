import Container from 'react-bootstrap/Container'

//components
import MovieCarousel from '../components/MovieCarousel'

const HomePage = () => {

	return (
		<Container className="py-3 my-3">
			<h1>Welcome to The Movie DB!</h1>

			<MovieCarousel />
		
		</Container>
	)
}

export default HomePage