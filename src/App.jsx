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


function App() {
	return (
		<div id="App">
			<Navigation />

			<Routes>
				<Route path="/" element={<HomePage />} />
				{/*<Route path="/popular" element={<PopularMoviesPage />} /> */ }
				{/*<Route path="/top_rated" element={<TopRatedMoviesPage />} /> */}
				<Route path="/movie/:id" element={<SpecificMoviePage />} />
				<Route path="/person/:id" element={<SpecificActorPage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>

			<ReactQueryDevtools position='bottom-right' />
		</div>
	)
}

export default App
