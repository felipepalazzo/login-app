import React, { useState } from 'react'
import countries from '../../data/countries.json'
import List from '../List'
import Button from '../Button'
import { stringToCssClass } from '../../utils/helpers'
import arrow from '../../assets/img/arrow-down-dark-17.svg'
import './Form.scss'

const regex = RegExp('^[0-9 -]{7,}$')

export default function Form() {
	const [item, setItem] = useState(countries[0])
	const [visible, setVisible] = useState(false)
	const [disabled, setDisabled] = useState(true)
	const onListClick = item => {
		setItem(item)
		toggleList()
	}
	const toggleList = () => {
		setVisible(!visible)
	}
	const onChange = ({ target }) => {
		const isDisabled = !regex.test(target.value)
		setDisabled(isDisabled)
	}
	return (
		<>
			<section className="form-container">
				<section className="form-content">
					<div>
						<form className="form">
							<div
								className="form__code-container"
								onClick={toggleList}
							>
								<span
									className={`flag flag--md flag--${stringToCssClass(
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
							<input
								type="text"
								name="phone"
								className="form__input"
								placeholder="Your phone number"
								maxLength="100"
								onChange={onChange}
							/>
						</form>
						<span className="form-content__text">
							Use the one linked to your Monese account
						</span>
					</div>
				</section>
				<List
					data={countries}
					onClick={onListClick}
					isVisible={visible}
				/>
			</section>
			<section className="button-container">
				<Button disabled={disabled}>Next</Button>
				<span className="button-container__text">
					Don’t have an account?
				</span>
			</section>
		</>
	)
}
