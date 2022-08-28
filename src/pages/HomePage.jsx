import Container from 'react-bootstrap/Container'
import movieDbAPI from '../services/movieDbAPI' //testing response for genres (remove later)
import { useQuery } from 'react-query' //testing response for genres (remove later)

//components
import MovieCarousel from '../components/MovieCarousel'

const HomePage = () => {

//testing repsonse for genre. (remove later)
console.log("DETTA ÄR HOMEPAGE", movieDbAPI.getGenres());
const { data, isError, error, isLoading } =  useQuery('genres', movieDbAPI.getGenres) 

	return (
		<Container className="py-3 my-3">
			<h1>Welcome to The Movie DB!</h1>
			

			<MovieCarousel />
		
		</Container>
	)
}

export default HomePage