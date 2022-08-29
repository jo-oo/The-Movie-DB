import { Container } from 'react-bootstrap'
import useMovieByGenre from '../hooks/useMoviesByGenre'
import { useSearchParams } from 'react-router-dom'
import MoviesByGenreList from '../components/MoviesByGenreList'
import Pagination from '../components/Pagination'


const MoviesByGenrePage = () => {

	const [searchParams, setSearchParams] = useSearchParams({ page: 1, genre_id: "", }) //intitiates useSearchParams with a page 1 and the genre_id from the GET-request
	console.log("")

	// gets data from url: id and page. these are named in the path in App.jsx
	//gets the data from searchParams. They are returned as strings so they are here converted into Numbers
	const genre_id = searchParams.get('genre_id') ? Number(searchParams.get('genre_id')) : ""
	const page = searchParams.get('page') ? Number(searchParams.get('page')) : null /
	
	console.log("page", page)
	console.log("genre_id ", genre_id)

	//gets Movies by Genre
	const { data , error, isLoading, isError} = useMovieByGenre(page, genre_id) 

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
				 	<h1 className="mb-3 mt-3">Movies in this Genre</h1>
					
					<MoviesByGenreList movies = {data} />

					<Pagination
							page={page}
							numPages={data.data.total_pages} 
							//will be disabled if no previous page exists (if page is bigger than 1)
							hasPreviousPage={(data.data.page > 1)} 
							//will be disabled if no next page exists. If page is less than total pages, it sets total pages to either total pages or a maximum of 500 total pages in pagination since api stops fetching new data after 500 pages
							hasNextPage={(data.data.page < (data.data.total_pages <= 500 ? data.data.total_pages : 500)) } 
							//when clicking on Previous Page, searchParams is set to: genre_id to what it already is, and page to what it is minus 1
							onPreviousPage={() => setSearchParams({ genre_id: genre_id, page: page - 1})} 
							onNextPage={() => setSearchParams({ genre_id: genre_id, page: page + 1})}
					/>
                </>
			)}

		</Container>
	)
}

export default MoviesByGenrePage