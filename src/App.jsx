import { ReactQueryDevtools } from 'react-query/devtools'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
//import PopularMoviesPage from './pages/PopularMoviesPage'
//import TopRatedMoviesPage from './pages/TopRatedMoviesPage'
import './assets/scss/App.scss'
import SpecificMoviePage from './pages/SpecificMoviePage'
import SpecificActorPage from './pages/SpecificActorPage'
import GenresPage from './pages/GenresPage'
import MoviesByGenrePage from './pages/MoviesByGenrePage'


function App() {
	return (
		<div id="App">
			<Navigation />

			<Routes>
				<Route path="/" element={<HomePage />} />
				{/*<Route path="/popular" element={<PopularMoviesPage />} /> */ }
				{/*<Route path="/top_rated" element={<TopRatedMoviesPage />} /> */}
				<Route path="/movie/:id" element={<SpecificMoviePage />} />
				<Route path="/actor/:id" element={<SpecificActorPage />} />
				<Route path="/genres" element={<GenresPage />} />
				<Route path="/genres/:id" element={<MoviesByGenrePage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>

			<ReactQueryDevtools position='bottom-right' />
		</div>
	)
}

export default App
