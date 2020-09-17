import React from 'react'
import '../assets/sass/components/header.scss'
import {
	Navbar,
	Nav,
	Button,
	Form,
	FormControl,
	Dropdown,
} from 'react-bootstrap'

function Header() {
	return (
		<Navbar className='menu--nav' fixed='top'>
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
				<Nav.Link href='#'>Sign in</Nav.Link>
				<Nav.Link href='#'>BUY TICKETS</Nav.Link>
			</Nav>
			<Form inline>
				<FormControl type='text' placeholder='Search' className='mr-sm-2' />
				<Button variant='outline-info'>Search</Button>
			</Form>
		</Navbar>
	)
}

export default Header
