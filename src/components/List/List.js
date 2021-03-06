import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { stringToCssClass } from '../../utils/helpers'
import './List.scss'

export default function List({ data, onClick, isVisible }) {
	const [items, setItems] = useState(data)
	const onValueChange = ({ target }) => {
		const value = target.value.toLowerCase()
		const filteredItems = data.filter(
			item => item.country.substr(0, value.length).toLowerCase() === value
		)
		setItems(filteredItems)
	}
	return (
		<div className="list-container">
			<section className={`list-box ${isVisible ? 'active' : 'hidden'}`}>
				<input
					type="text"
					name="country"
					className="list__input"
					autoComplete="false"
					onChange={onValueChange}
				/>
				<ul className="list mop">
					{items.map(item => (
						<li
							className="list__item"
							key={item.code}
							onClick={onClick.bind(this, item)}
						>
							<div className="list__item__content">
								<span
									className={`flag flag--sm flag--${stringToCssClass(
										item.country
									)}`}
								></span>
								{`${item.country} (+${item.code})`}
							</div>
						</li>
					))}
				</ul>
			</section>
		</div>
	)
}

List.defaultProps = {
	data: []
}

List.propTypes = {
	onClick: PropTypes.func,
	isVisible: PropTypes.bool,
	data: PropTypes.arrayOf(
		PropTypes.shape({
			country: PropTypes.string,
			code: PropTypes.number
		})
	)
}
