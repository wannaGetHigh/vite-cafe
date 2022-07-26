import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
	addFiveMin,
	resetPomodoroTime,
	pomodoroPlay,
	pomodoroEnd,
} from './PomodoroTimerSlice'
import { pomodoroTimerSelector } from '../../app/selector'
import Button from '../Button'
import { convertTime } from '../../utils'

function PomodoroTimer() {
	const dispatch = useDispatch()
	const { pomodoroTime } = useSelector(pomodoroTimerSelector)
	const [isPlay, setIsPlay] = useState(false)
	const [isPause, setIsPause] = useState(false)

	let pomodoroInterval

	const handlePlay = () => {
		setIsPlay(true)
	}

	const handlePause = () => {
		setIsPlay(false)
		setIsPause(true)
		clearInterval(pomodoroInterval)
	}

	const handleContinue = () => {
		setIsPlay(true)
		setIsPause(false)
	}

	const handleReset = () => {
		setIsPause(false)
		dispatch(resetPomodoroTime())
	}

	useEffect(() => {
		if (isPlay) {
			if (pomodoroTime === 0) {
				console.log('time out')
				clearInterval(pomodoroInterval)
				setIsPlay(false)
				dispatch(pomodoroEnd())
			} else {
				pomodoroInterval = setInterval(() => dispatch(pomodoroPlay()), 1000)
			}
		}
		return () => clearInterval(pomodoroInterval)
	}, [isPlay, pomodoroTime])

	return (
		<div className="d-flex flex-column align-items-center text-white fs-5 green p-2 w-120">
			<div>{convertTime(pomodoroTime)}</div>
			<div>
				{!isPlay && !isPause && (
					<Button className="text-white fs-5 green" onClick={handlePlay}>
						Start
					</Button>
				)}
				{isPlay && !isPause && (
					<Button className="text-white fs-5 green" onClick={handlePause}>
						Pause
					</Button>
				)}
				{isPause && (
					<div className="d-flex gap-2">
						<Button className="text-white fs-5 green" onClick={handleContinue}>
							Continue
						</Button>
						<Button className="text-white fs-5 green" onClick={handleReset}>
							Stop
						</Button>
					</div>
				)}
			</div>
			<Button
				className="text-white fs-5 green"
				onClick={() => dispatch(addFiveMin())}
			>
				+5:00
			</Button>
		</div>
	)
}
export default PomodoroTimer
