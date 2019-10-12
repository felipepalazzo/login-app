import React, { useState } from 'react'
import countries from '../../data/countries.json'
import List from '../List'
import { stringToCssClass } from '../../helpers'
import arrow from '../../assets/img/arrow-down-dark-17.svg'
import './Form.scss'

export default function Form() {
	const [item, setItem] = useState(countries[0])
	const [visible, setVisible] = useState(false)
	const onClick = item => {
		setItem(item)
	}
	const toggleList = () => {
		setVisible(!visible)
	}
	return (
		<>
			<form className="form">
				<div className="form__code-container" onClick={toggleList}>
					<span
						className={`flag flag--${stringToCssClass(
							item.country
						)}`}
					></span>
					<span className="form__code">{`+${item.code}`}</span>
					<img
						src={arrow}
						className={`form__arrow form__arrow--${
							visible ? 'up' : 'down'
						}`}
						alt=""
					/>
				</div>
				<input type="text" placeholder="Your phone number" />
			</form>
			<List data={countries} onClick={onClick} isVisible={visible} />
			<span>Use the one linked to your Monese account</span>
		</>
	)
}