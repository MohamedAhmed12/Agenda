import React, { useState } from 'react'
import '../assets/sass/components/agenda.scss'
import Speakers from './Speakers'
import { Table, Modal, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faCalendar,
	faClock,
	faMapMarker,
} from '@fortawesome/free-solid-svg-icons'

function Agenda({ greeting, mainClass, sessions }) {
	const [show, setShow] = useState(false)
	const [selectedModel, setSelectedModel] = useState([])

	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)
	const renderSpeakers = () => {
		let speakers = selectedModel.speakers
		if (!speakers) return ''

		return speakers.map((speaker) => <Speakers speaker={speaker} />)
	}

	return (
		<Table className={`${mainClass} agenda`}>
			<thead>
				<tr className='header'>
					<h1>{greeting}</h1>
				</tr>
			</thead>
			<tbody>
				{sessions.map((session) => {
					return (
						<tr
							onClick={() => {
								handleShow()
								setSelectedModel(session)
							}}
						>
							<td>
								<div className='session--container'>
									<div className='session--type'>
										<div className='row'>
											<div className='col-9'>
												<h5 className='pl-2 mt-2 text-left'>{session.type}</h5>
											</div>
											<div className='col-3 session-track'>
												<h6 className=' mt-2'> {session.venue}</h6>
											</div>
										</div>
									</div>
									<div className=' row pl-2 text-left'>
										<h5 className='session--time col-12'>
											{session.starting_time} - {session.ending_time}
										</h5>
										<div className='session--title col-12'>{session.title}</div>
										<h6 className='col-12 session--description'>
											{session.speakers.reduce(
												(accumulator, currentVal) =>
													accumulator.name + ' & ' + currentVal.name
											)}
										</h6>
									</div>
									<div className='session--tags'>
										<div className='d-flex'>
											{session.tags.map((tag) => {
												return <p>{tag.name}</p>
											})}
										</div>
									</div>
								</div>
							</td>
						</tr>
					)
				})}
			</tbody>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<div className='row'>
						<Modal.Title className='pl-3'>{selectedModel.title}</Modal.Title>
						<ul className='subTitle list-unstyled list-inline col-12 mb-0'>
							<li className='list-inline-item'>
								<FontAwesomeIcon icon={faCalendar} />
								1st
							</li>
							<li className='list-inline-item'>
								<FontAwesomeIcon icon={faClock} /> 17:30 - 18:00
							</li>
							<li className='list-inline-item'>
								<FontAwesomeIcon icon={faMapMarker} /> Channel 1{' '}
							</li>
						</ul>
					</div>
				</Modal.Header>
				<Modal.Body>
					<h6 className='session--speakers'>SESSION SPEAKER</h6>
					<div class='speaker'>
						<Container>
							<Row>{renderSpeakers()}</Row>
						</Container>
					</div>
				</Modal.Body>
			</Modal>
		</Table>
	)
}

export default Agenda
