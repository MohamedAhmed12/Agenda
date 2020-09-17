import React, { useEffect, useState } from 'react'
import '../assets/sass/components/agenda-tabs.scss'
import { Nav, Jumbotron } from 'react-bootstrap'
import axios from 'axios'

function AgendaTabs({ onDaySelected }) {
	const [data, setData] = useState([])
	const [selectedDay, setSelectedDay] = useState([])

	useEffect(() => {
		let today = new Date()
		setSelectedDay(today.getDate())

		axios
			.get('http://localhost:4000/sessions/days')
			.then((response) => {
				setData(response.data)
			})
			.catch((err) => console.log(err))
	}, [])

	return (
		<Nav variant='tabs' defaultActiveKey='/home'>
			{data.map((value) => {
				return (
					<Nav.Item>
						<Nav.Link
							className={selectedDay == value.day.split(' ')[0] ? 'active' : ''}
							onClick={() => {
								let day = value.day.split(' ')[0]
								onDaySelected(day)
								setSelectedDay(day)
							}}
						>
							{value.day}
						</Nav.Link>
					</Nav.Item>
				)
			})}
		</Nav>
	)
}

export default AgendaTabs
