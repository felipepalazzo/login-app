import React from 'react'
import './Navigation.scss'
import flag from '../../assets/img/flag-dark.svg'
import arrow from '../../assets/img/arrow-down-dark.svg'

export default function Navigation() {
	return (
		<header className="header">
			<nav className="navbar">
				<a href="https://monese.com/">Monese</a>
				<div type="navbar__option">
					<img src={flag} alt="" />
					<span>English</span>
					<img src={arrow} alt="" />
				</div>
			</nav>
		</header>
	)
}
