import React from 'react'
import '../assets/sass/components/main-banner.scss'
import { Button, Jumbotron } from 'react-bootstrap'

function MainBanner() {
	return (
		<Jumbotron className='agenda--main-banner mb-0'>
			<div className='title'>Got Grit?</div>
			<h2>The RiseUp from Home Agenda</h2>
			<div className='details-agenda-19'>
				Get access to 100+ talks, panels,fireside chats, and workshops. Plus:{' '}
				<br />
				More info on the Global Startup Expo, Satellite Experiences, and Startup
				Office Hours!
			</div>
		</Jumbotron>
	)
}

export default MainBanner
