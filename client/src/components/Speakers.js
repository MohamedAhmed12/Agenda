import React from 'react'
import '../assets/sass/components/speakers.scss'
import { Image, Col, Row } from 'react-bootstrap'

function Speakers({ speaker }) {
	return (
		<Col xs={6} className='list-unstyled'>
			<li>
				<Row>
					<Col xs={2} className='p-0'>
						<Image src={speaker.pic} roundedCircle width='50' height='50' />
					</Col>
					<Col xs={8}>
						<h6 className='speaker--name'>{speaker.name}</h6>
						<p className='small mb-0'>
							Cofounder and General Partner AT Andreessen{' '}
						</p>
						<p className='small'>Horowitz</p>
					</Col>
				</Row>
			</li>
		</Col>
	)
}

export default Speakers
