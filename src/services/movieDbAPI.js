import axios from 'axios'

const API_KEY = import.meta.env.VITE_API_KEY
axios.defaults.baseURL = 'https://api.themoviedb.org/3/'
// axios.defaults.headers.common = {
// 	"api_key": API_KEY,
//   };


//axios.defaults.headers.common['api_key'] = API_KEY;
//axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'api_key';
//axios.defaults.headers.common['Access-Control-Allow-Headers'] = '*';
//   "Access-Control-Allow-Origin": "*",
//   "Access-Control-Allow-Headers": "Content-Type, Authorization, api_key",
//   "Access-Control-Allow-Credentials": "true",
//   "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
//   "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",

const getPopularMovies = async () => {
	console.log("apikey:", API_KEY)
	
	const test = await axios.get(`movie/popular?api_key=${API_KEY}`)
	console.log(test)
	return test;	
}


const functions = {
	getPopularMovies,
}

export default functions