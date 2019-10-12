import React from 'react'
import './Navigation.scss'
import flag from '../../assets/img/flag-dark.svg'
import arrow from '../../assets/img/arrow-down-dark.svg'

export default function Navigation() {
	return (
		<header className="header">
			<nav className="navbar container">
				<div className="navbar__content col-xs-12">
					<a href="https://monese.com/">Monese</a>
					<div type="navbar__option">
						<img src={flag} alt="" />
						<span className="navbar__option__text">English</span>
						<img src={arrow} alt="" />
					</div>
				</div>
			</nav>
		</header>
	)
}
