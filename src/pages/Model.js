import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CanvasArea from '../components/CanvasArea'
import ModelsInfo from '../components/ModelsInfo'
import { models } from '../data'

const Model = () => {
	const { name } = useParams()
	const [model, setModel] = useState([])

	useEffect(() => {
		const findData = () => {
			const currentModel = models.filter((model) => model.name === name)
			setModel(currentModel[0])
		}

		findData()
	}, [name])

	return (
		<div className="flex">
			<div className="canvas">
				<CanvasArea name={name} scale={model.scale} lights={model.lights} />
			</div>
			<div className="info">
				<ModelsInfo model={model} />
			</div>
		</div>
	)
}

export default Model
