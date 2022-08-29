import { Container, Card, Button, Row } from 'react-bootstrap'
import useMovieByGenre from '../hooks/useMoviesByGenre'
import GenresList from '../components/GenresList'
import { useParams, useSearchParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import MoviesByGenreList from '../components/MoviesByGenreList'
import Pagination from '../components/Pagination'


const MoviesByGenrePage = () => {

	
	//Pagination with the same principle as useSearchParams only using useParams (//vi bör använda oss av useSearchParams för att pagineringen ska kunna överleva att vi uppdaterar sidan)

	// hämtar data från url id och page namnen på dom säts i App.jsx
	const { id , page} = useParams() 
	console.log("från params", page)
	const { data , error, isLoading, isError} = useMovieByGenre(id, page) //gets Movies by Genre

	
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


					<Pagination
							page={page}
							numPages={data.data.total_pages}
							hasPreviousPage={(data.data.page > 1)} //kmr va disabled om det inte finns nån förra sida, om page är större än 1
							//hasNextPage={(data.data.page < data.data.total_pages) } //kmr va disabled om det inte finns nån nästa sida. om page är mindre än total pages
							//if i should use SerachParams:
							//onPreviousPage={() => setSearchParams({ query, page: page - 1})} //när du trycker på tex Previous Page sätter jag mina serachParams till: query till avd query redan är och page till vad den är minus 1
							//onNextPage={() => setSearchParams({ query, page: page + 1})}
						/>

                </>
			)}

		</Container>
	)
}

export default MoviesByGenrePage