import React from 'react'
import PropTypes from 'prop-types'
import './Button.scss'
import arrowRight from '../../assets/img/arrow-right-white.svg'

export default function Button(props) {
	return (
		<button
			className="button mop"
			onClick={props.onClick}
			type="button"
			disabled={props.disabled}
		>
			<span>{props.children}</span>
			<img src={arrowRight} alt="" className="button__icon" />
		</button>
	)
}

Button.propTypes = {
	children: PropTypes.string,
	onClick: PropTypes.func,
	disabled: PropTypes.bool
}
