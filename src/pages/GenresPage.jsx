import { Container } from 'react-bootstrap'
import useGenres from "../hooks/useGenres"
import GenresList from '../components/GenresList'

const GenresPage = () => {
	const { data , error, isLoading, isError} = useGenres() //gets Genres
    console.log("genresPage", data)
	
    return (
		<Container className="py-3 text-center">
			
			{isError && error.message}

			{isLoading && (
				<h2 className="text-center">Loading...</h2>
			)}

			{data && (
				<>
				 	<h1 className="mb-5 mt-3">Genres</h1>
					<GenresList genres={data} />
                </>
			)}

		</Container>
	)
}

export default GenresPage