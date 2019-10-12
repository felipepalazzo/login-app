import React from 'react'
import PropTypes from 'prop-types'
import './Headline.scss'

export default function Headline(props) {
	return (
		<section className="headline">
			<h3 className="headline__content">{props.children}</h3>
		</section>
	)
}

Headline.propTypes = {
	children: PropTypes.string
}
