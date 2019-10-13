import React from 'react'
import PropTypes from 'prop-types'
import { stringToCssClass } from '../../utils/helpers'
import './List.scss'

export default function List({ data, onClick, isVisible }) {
	return (
		<div className="list-container">
			<section className={`list-box ${isVisible ? 'active' : 'hidden'}`}>
				<ul className="list">
					{data.map(item => (
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
