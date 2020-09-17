import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import axios from 'axios'
import '../assets/sass/components/filter.scss'

function Filter({ onTagsFiltered, onTracksFiltered }) {
	const [tracks, setTracks] = useState([])
	const [tags, setTags] = useState([])
	const [selectedTags, setSelectedTags] = useState([])

	useEffect(() => {
		axios
			.get('http://localhost:4000/sessions/venue')
			.then((response) => {
				let tracks = formatResponse(response.data, 'venue')
				setTracks(tracks)
			})
			.catch((err) => console.log(err))

		axios
			.get('http://localhost:4000/tags')
			.then((response) => {
				let tags = formatResponse(response.data, 'name')
				setTags(tags)
			})
			.catch((err) => console.log(err))
	}, [])

	function capitalizeFirstLetters(string) {
		string = string
			.split(' ')
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))

		return string.join(' ')
	}

	function formatResponse(res, target) {
		return res.map((track) => {
			return {
				value: track[target],
				label: capitalizeFirstLetters(track[target]),
			}
		})
	}

	return (
		<div className='container-fluid pt-4 pb-5 pl-5 pr-5'>
			<div className='row'>
				<div className='col-12'>
					<h1 className='float-left'>FILTER BY TAGS</h1>
				</div>
				<div className='col-12'>
					<div className='form-group'>
						<Select
							isMulti
							name='colors'
							options={tags}
							className='basic-multi-select'
							classNamePrefix='select'
							onChange={onTagsFiltered}
						/>
					</div>
				</div>
			</div>
			<div className='row'>
				<div className='col-12'>
					<h1 className='float-left'>Filter by track</h1>
				</div>
				<div className='col-12'>
					<Select
						isMulti
						name='colors'
						options={tracks}
						className='basic-multi-select'
						classNamePrefix='select'
						onChange={onTracksFiltered}
					/>
				</div>
			</div>
		</div>
	)
}

export default Filter
