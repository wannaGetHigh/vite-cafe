import Background from './components/Background'
import Filter from './components/Filter'
import Heading from './components/Heading'
import Control from './components/Control'
import Modal from './components/Modal'
import YoutubePlay from './components/YoutubePlay'
import Alarm from './components/Alarm'
import TypingAnimation from './components/TypingAnimation'
import { useEffect, useState } from 'react'

function App() {
	const [firstAction, setFirstAction] = useState(false)

	useEffect(() => {
		const catchFirstAction = () => {
			setFirstAction(true)
			document.removeEventListener('keydown', catchFirstAction)
		}

		document.addEventListener('keydown', catchFirstAction)

		return () => document.removeEventListener('keydown', catchFirstAction)
	}, [])

	return (
		<div className="container-fluid vh-100 p-30 bg-b-07">
			<Background />

			<Filter />

			<div className="position-relative d-flex flex-column justify-content-between align-items-stretch h-100">
				{/* Heading */}
				<Heading />

				{/* Control */}
				{firstAction ? (
					<Control />
				) : (
					<TypingAnimation
						text="Press any key to start"
						speed={300}
						show={true}
					/>
				)}
			</div>

			{firstAction && <YoutubePlay />}

			<Modal />

			<Alarm />
		</div>
	)
}

export default App
