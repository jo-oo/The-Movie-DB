import axios from 'axios'

const API_KEY = import.meta.env.VITE_API_KEY
axios.defaults.baseURL = 'https://api.themoviedb.org/3/'

const getPopularMovies = async () => {
	console.log("apikey:", API_KEY)
	
	const test = await axios.get(`movie/popular?api_key=${API_KEY}`)
	console.log(test)
	return test;	
}

const getTopRatedMovies = async () => {
	const response = await axios.get(`movie/top_rated?api_key=${API_KEY}`)
	console.log(response)
	return response;
}

const getCurrentMovies = async () => {
	return await axios.get(`movie/now_playing?api_key=${API_KEY}`)
}

const functions = {
	getPopularMovies,
	getTopRatedMovies,
	getCurrentMovies
}

export default functions