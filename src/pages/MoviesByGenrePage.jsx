import { Container, Card, Button, Row } from 'react-bootstrap'
import useMovieByGenre from '../hooks/useMoviesByGenre'
import GenresList from '../components/GenresList'
import { useParams, useSearchParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import MoviesByGenreList from '../components/MoviesByGenreList'
import Pagination from '../components/Pagination'


const MoviesByGenrePage = () => {

	const [searchParams, setSearchParams] = useSearchParams({ page: 1, genre_id: "", }) //intitierar useSearchParams med en page 1 and the genre_id from the GET-request
	console.log("")

	// hämtar data från url id och page namnen på dom säts i App.jsx
	const genre_id = searchParams.get('genre_id') ? Number(searchParams.get('genre_id')) : ""
	const page = searchParams.get('page') ? Number(searchParams.get('page')) : null //hämtar ut page från searchParams. Dom kommer tillbaka som stärngar så jag konvereterar den till number


	console.log("page", page)
	console.log("genre_id ", genre_id)
	const { data , error, isLoading, isError} = useMovieByGenre(page, genre_id) //gets Movies by Genre

	
    console.log("movies by genre Page", genre_id)
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


					<Pagination
							page={page}
							numPages={data.data.total_pages}
							hasPreviousPage={(data.data.page > 1)} //kmr va disabled om det inte finns nån förra sida, om page är större än 1
							hasNextPage={(data.data.page < data.data.total_pages) } //kmr va disabled om det inte finns nån nästa sida. om page är mindre än total pages
							onPreviousPage={() => setSearchParams({ genre_id: genre_id, page: page - 1})} //när du trycker på tex Previous Page sätter jag mina serachParams till: query till avd query redan är och page till vad den är minus 1
							onNextPage={() => setSearchParams({ genre_id: genre_id, page: page + 1})}
						/>

                </>
			)}

		</Container>
	)
}

export default MoviesByGenrePage