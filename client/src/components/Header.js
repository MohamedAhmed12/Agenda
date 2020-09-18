import React from 'react'
import '../assets/sass/components/header.scss'
import {
	Navbar,
	Nav,
	Button,
	Form,
	FormControl,
	Dropdown,
	NavDropdown,
} from 'react-bootstrap'

function Header() {
	return (
		<Navbar expand='lg' className='menu--nav'>
			<Navbar.Brand href='#home'>
				<div className='menu--logo'>
					<a aria-current='page' className='active' href='#'>
						<img
							src='https://staging.riseupsummit.com/static/media/RiseUpw.781cb81d.png'
							alt='RiseUp '
						></img>
					</a>
				</div>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' variant='dark' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='ml-auto mr-2 menu--items'>
					<Nav.Link href='#'>Home</Nav.Link>
					<Nav.Link href='#'>About</Nav.Link>

					<Dropdown>
						<Dropdown.Toggle variant='transparent' id='dropdown-basic'>
							FEATURES
						</Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item href='#'>Startup Exhibition</Dropdown.Item>
							<Dropdown.Item href='#'>Startup Office Hours</Dropdown.Item>
							<Dropdown.Item href='#'>Networking Circles</Dropdown.Item>
							<Dropdown.Item href='#'>Satellite Experience</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>

					<Dropdown>
						<Dropdown.Toggle variant='transparent' id='dropdown-basic'>
							CROWD
						</Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item href='#'>Speakers</Dropdown.Item>
							<Dropdown.Item href='#'>PARTNERS</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>

					<Dropdown>
						<Dropdown.Toggle variant='transparent' id='dropdown-basic'>
							AGENDA
						</Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item href='#'>AGENDA</Dropdown.Item>
							<Dropdown.Item href='#'>Workshops</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
					<Button href='#' className='btn bg-white ml-2 signup-btn'>
						Sign in
					</Button>
					<Button href='#' className='btn bg-white ml-2 signup-btn'>
						BUY TICKETS
					</Button>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default Header
