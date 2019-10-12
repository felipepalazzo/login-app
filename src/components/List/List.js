import React from 'react'
import PropTypes from 'prop-types'

export default function List({ data, onClick }) {
	return (
		<ul>
			{data.map(item => (
				<li
					key={item.code}
					onClick={onClick.bind(this, item)}
				>{`${item.country} (+${item.code})`}</li>
			))}
		</ul>
	)
}

List.propTypes = {
	onClick: PropTypes.func,
	data: PropTypes.arrayOf(
		PropTypes.shape({
			country: PropTypes.string,
			code: PropTypes.number
		})
	)
}
