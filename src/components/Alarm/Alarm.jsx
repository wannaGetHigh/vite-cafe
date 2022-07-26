import { useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { pomodoroTimerSelector } from '../../app/selector'

function Alarm() {
	const alarmRef = useRef()
	const { pomodoroTime } = useSelector(pomodoroTimerSelector)

	useEffect(() => {
		if (pomodoroTime === 0) {
			console.log('alarm reng')
			alarmRef.current.play()
		}
	}, [pomodoroTime])

	return (
		<audio
			className="d-none"
			ref={alarmRef}
			src="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/alarms/Digital.mp3"
		/>
	)
}
export default Alarm
