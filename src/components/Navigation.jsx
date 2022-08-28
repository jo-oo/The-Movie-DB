import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link, NavLink } from 'react-router-dom'

const Navigation = () => {
	return (
		<Navbar className="navbar" variant="dark" expand="md">
			<Container>
				<Navbar.Brand as={Link} to="/">The Movie DB</Navbar.Brand>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link as={NavLink} end to="/">Home</Nav.Link>
						<Nav.Link as={NavLink} end to="/popular">Popular Movies</Nav.Link>
						<Nav.Link as={NavLink} end to="/top_rated">Top Movies</Nav.Link>
						<Nav.Link as={NavLink} end to="/genres">Genres</Nav.Link>
						{/*<Nav.Link as={NavLink} end to="/movie/:id">Movie Site</Nav.Link>*/}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Navigation
