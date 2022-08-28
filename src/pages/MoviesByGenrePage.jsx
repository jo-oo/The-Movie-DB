import { Container, Card, Button, Row } from 'react-bootstrap'
import useMovieByGenre from '../hooks/useMoviesByGenre'
import GenresList from '../components/GenresList'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import MoviesByGenreList from '../components/MoviesByGenreList'


const MoviesByGenrePage = () => {

	const { id } = useParams() 
	const { data , error, isLoading, isError} = useMovieByGenre(id) //gets Movies by Genre

	
    console.log("movies by genre Page", id)
	console.log(data)

	
    return (
		<Container className="py-3 text-center">
			
			{isError && error.message}

			{isLoading && (
				<h2 className="text-center">Loading...</h2>
			)}

			{data && (
				<>
				 	<h1>Movies in this Genre</h1>
					
					<MoviesByGenreList movies = {data} />

                </>
			)}

		</Container>
	)
}

export default MoviesByGenrePage