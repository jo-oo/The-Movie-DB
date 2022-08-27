import axios from 'axios'

const API_KEY = import.meta.env.VITE_API_KEY
axios.defaults.baseURL = 'https://api.themoviedb.org/3/'

const adultCont = "&include_adult=false";

const getPopularMovies = async () => {
	console.log("apikey:", API_KEY)
	
	const test = await axios.get(`movie/popular?api_key=${API_KEY}${adultCont}`)
	console.log(test)
	return test;	
}

const getTopRatedMovies = async () => {
	const response = await axios.get(`movie/top_rated?api_key=${API_KEY}${adultCont}`)
	console.log(response)
	return response;
}

const getCurrentMovies = async () => {
	return await axios.get(`movie/now_playing?api_key=${API_KEY}${adultCont}`)
}

//get specific movie, based on id. 
const getSpecificMovie = async (id) => {
	const res = await axios.get(`movie/${id}?api_key=${API_KEY}${adultCont}&append_to_response=credits`) //only gets credits endpoint when this is added
	console.log("Response", res.data)
	return res.data;
}

//get specific actor, based on id. 
const getSpecificActor = async (id) => {
	console.log("GetSpecificAvtpr", id)
	const res = await axios.get(`person/${id}?api_key=${API_KEY}&append_to_response=credits`) //only gets credits endpoint when this is added
	console.log("Response actor", res.data)
	return res.data;
}




//get movie dy genre /discover


const functions = {
	getPopularMovies,
	getTopRatedMovies,
	getCurrentMovies,
	getSpecificMovie,
	getSpecificActor
}

export default functions