import React from 'react'
import PropTypes from 'prop-types'
import { stringToCssClass } from '../../helpers'
import './List.scss'

export default function List({ data, onClick, isVisible }) {
	return (
		<ul className={`list list--${isVisible ? 'active' : 'hidden'}`}>
			{data.map(item => (
				<li key={item.code} onClick={onClick.bind(this, item)}>
					<span
						className={`flag flag--sm flag--${stringToCssClass(
							item.country
						)}`}
					></span>
					{`${item.country} (+${item.code})`}
				</li>
			))}
		</ul>
	)
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
