import React from 'react'
import eth from '../utils/ethereum.png'
import Button from 'react-bootstrap/Button'

const ModelsInfo = ({ model }) => {
	return (
		<>
			<h2>Title: {model.title}</h2>
			<h4>Description: {model.desc}</h4>
			<h4>Made With: {model.prog}</h4>
			<h4>
				Price:
				<img src={eth} alt="Ethereum" className="logo-img" />
				{model.price}
			</h4>

			<Button variant="dark" className="info-btn">
				Buy NFT
			</Button>
		</>
	)
}

export default ModelsInfo
