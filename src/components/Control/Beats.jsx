import { useState, useEffect } from 'react'
import {
	beat1Icon,
	beat2Icon,
	beat3Icon,
	beat4Icon,
	beat5Icon,
	beat6Icon,
} from '../../assets/icons'

function Beats() {
	const beats = [
		beat1Icon,
		beat2Icon,
		beat3Icon,
		beat4Icon,
		beat5Icon,
		beat6Icon,
	]
	const [beat, setBeat] = useState(beat1Icon)

	useEffect(() => {
		let index = 0
		const beatInterval = setInterval(() => {
			if (index >= beats.length - 1) {
				index = 0
			} else {
				index += 1
			}
			setBeat(beats[index])
		}, 200)

		return () => clearInterval(beatInterval)
	}, [])

	return <img src={beat} alt="beats" className="w-20 h-20 shadow" />
}
export default Beats
