import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import logo from './logo.svg'
import Header from './components/Header.js'
import MainBanner from './components/MainBanner.js'
import AgendaTabs from './components/AgendaTabs.js'
import Filter from './components/Filter.js'
import Agenda from './components/Agenda.js'
import Footer from './components/Footer.js'

function App() {
	const [sessions, setSessionsData] = useState([])
	const [initialSessions, setInitialSessions] = useState([])
	const sessionChannel1 = sessions.filter(
		(session) => session.stage == 'channel_1'
	)
	const sessionChannel2 = sessions.filter(
		(session) => session.stage == 'channel_2'
	)

	const getSessions = (selectedDay) => {
		axios
			.get(`http://localhost:4000/sessions/days/${selectedDay}`)
			.then((response) => {
				setInitialSessions(response.data)
				setSessionsData(response.data)
			})
			.catch((err) => console.log(err))
	}

	const getTagsSessions = (selectedtags) => {
		if (selectedtags == null) return getSessions(new Date().getDate())

		selectedtags = selectedtags.map((tag) => tag.value)

		setSessionsData(
			initialSessions.filter((session) => {
				let tags = session.tags.filter((tag) => {
					return selectedtags.includes(tag.name)
				})

				if (tags.length) return session
			})
		)
	}

	const getTracksSessions = (selectedTracks) => {
		if (selectedTracks == null) return getSessions(new Date().getDate())

		selectedTracks = selectedTracks.map((track) => track.value)

		setSessionsData(
			initialSessions.filter((session) => {
				return selectedTracks.includes(session.venue)
				let tracks = session.venue.filter((track) => {})

				if (tracks.length) return session
			})
		)
	}

	useEffect(() => {
		let today = new Date()
		getSessions(today.getDate())
	}, [])

	return (
		<div className='App'>
			<Header />
			<MainBanner />
			<AgendaTabs onDaySelected={getSessions} />
			<Filter
				onTracksFiltered={getTracksSessions}
				onTagsFiltered={getTagsSessions}
			/>
			<div className='container-fluid'>
				<div className='row agenda__container overflow-hidden'>
					<div className='col-6 p-0'>
						<Agenda
							greeting={'Channel 1'}
							sessions={sessionChannel1}
							mainClass='agenda--1'
						/>
					</div>
					<div className='col-6 p-0'>
						<Agenda
							greeting={'Channel 2'}
							sessions={sessionChannel2}
							mainClass='agenda--2'
						/>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default App
