import React from 'react'
import './styles/main.scss'
import Navigation from './components/Navigation'
import Headline from './components/Headline'

function App() {
	return (
		<>
			<Navigation />
			<div className="container wrapper">
				<div className="col-xs-12">
					<Headline>
						Log in to your current account, wherever you are
					</Headline>
				</div>
			</div>
		</>
	)
}

export default App
