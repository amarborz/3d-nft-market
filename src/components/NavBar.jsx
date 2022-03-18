import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { models } from '../data'
import logo from '../utils/logo.png'

const NavBar = () => {
	return (
		<Navbar bg="dark" variant="dark" expand="lg">
			<Container>
				<Navbar.Brand as={Link} to="/" className="logo-text">
					3D <img src={logo} alt="logo" className="logo-img" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link as={Link} to="/">
							Home
						</Nav.Link>
						<NavDropdown title="NFTs" id="basic-nav-dropdown">
							{models.map((model) => {
								return (
									<div key={model.name}>
										<NavDropdown.Item
											as={Link}
											to={`/${model.name}`}
											file={model.file}
										>
											{model.title}
										</NavDropdown.Item>
										<NavDropdown.Divider />
									</div>
								)
							})}
							<NavDropdown.Item as={Link} to="/">
								Coming Soon
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default NavBar
