import axios from 'axios'

const API_KEY = import.meta.env.VITE_API_KEY
axios.defaults.baseURL = 'https://api.themoviedb.org/3/'

const adultCont = "&include_adult=false";

const getPopularMovies = async () => {
	const popular = await axios.get(`movie/popular?api_key=${API_KEY}&region=US${adultCont}`)
	return popular;	
}

const getTopRatedMovies = async () => {
	const response = await axios.get(`movie/top_rated?api_key=${API_KEY}&region=US${adultCont}`)
	return response;
}

const getCurrentMovies = async () => {
	return await axios.get(`movie/now_playing?api_key=${API_KEY}&region=US${adultCont}`)
}

//get specific movie, based on id. Also gets credits and similar movies: //https://api.themoviedb.org/3/movie/{movie_id}/similar?api_key=<<api_key>>&language=en-US&page=1
const getSpecificMovie = async (id) => {
	const res = await axios.get(`movie/${id}?api_key=${API_KEY}&region=US${adultCont}&append_to_response=credits,similar`) //only gets credits, and similar endpoints when this is added
	return res.data;
}

//get specific actor, based on id. 
const getSpecificActor = async (id) => {
	const result = await axios.get(`person/${id}?api_key=${API_KEY}&region=US${adultCont}&append_to_response=credits`) //only gets credits endpoint when this is added
	return result.data;
}

//get genres in DB
const getGenres = async () => {
    const resp = await axios.get(`/genre/movie/list?api_key=${API_KEY}&region=US`)
    return resp.data
}

//get movies by genre
const getMoviesByGenre = async ({ queryKey }) => {
	const [_key, {page, genre_id}] = queryKey	
	return await axios.get(`discover/movie?api_key=${API_KEY}&region=US&popularity.desc${adultCont}&page=${page}&with_genres=${genre_id}`)
}


const functions = {
	getPopularMovies,
	getTopRatedMovies,
	getCurrentMovies,
	getSpecificMovie,
	getSpecificActor,
	getGenres,
	getMoviesByGenre	
}

export default functions