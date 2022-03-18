import React from 'react'
import CanvasArea from '../components/CanvasArea'
import HomeText from '../components/HomeText'

const Home = () => {
	return (
		<div className="flex">
			<div className="canvas">
				<CanvasArea />
			</div>
			<div className="info">
				<HomeText />
			</div>
		</div>
	)
}

export default Home
