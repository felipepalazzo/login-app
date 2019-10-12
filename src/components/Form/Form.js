import React from 'react'
import countries from '../../data/countries.json'
import List from '../List'

export default function Form() {
	const onClick = item => {}
	return (
		<>
			<form>
				<input type="text" placeholder="Your phone number" />
			</form>
			<List data={countries} onClick={onClick} />
			<span>Use the one linked to your Monese account</span>
		</>
	)
}
