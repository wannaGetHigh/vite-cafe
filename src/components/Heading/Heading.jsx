import TippyHeadless from '@tippyjs/react/headless'
import { fullscreenIcon, timerIcon } from '../../assets/icons'
import Button from '../Button'
import PomodoroTimer from './PomodoroTimer'
import { getDate } from '../../utils'
import TypingAnimation from '../TypingAnimation'

function Heading() {
	const toggleFullscreen = () => {
		if (document.fullscreenElement) {
			document.exitFullscreen()
		} else if (!document.fullscreenElement) {
			document.documentElement.requestFullscreen()
		}
	}

	// const today = getDate()
	const text = `listening ${getDate()}`

	return (
		<div className="position-relative d-flex justify-content-between align-items-center">
			<div className="fs-5 text-white red user-select-none">
				<TypingAnimation text={text} />
				<span className="blink mb-2 ml-1"> ...</span>
			</div>

			<div className="d-flex align-items-center gap-3">
				<Button>
					<TippyHeadless
						render={(attrs) => (
							<div
								className="text-white fs-5 green shadow-black bg-b-07"
								tabIndex="-1"
								{...attrs}
							>
								Pomodoro Timer
							</div>
						)}
					>
						<TippyHeadless
							trigger="click"
							offset={[0, 8]}
							render={() => <PomodoroTimer />}
							interactive
							zIndex={10000}
						>
							<img src={timerIcon} alt="timer" className="w-20 h-20 shadow" />
						</TippyHeadless>
					</TippyHeadless>
				</Button>

				<Button onClick={toggleFullscreen}>
					<TippyHeadless
						render={(attrs) => (
							<div
								className="text-white fs-5 green shadow-black bg-b-07"
								tabIndex="-1"
								{...attrs}
							>
								fullscreen
							</div>
						)}
					>
						<img
							src={fullscreenIcon}
							alt="fullscreen"
							className="w-20 h-20 shadow"
						/>
					</TippyHeadless>
				</Button>
			</div>
		</div>
	)
}
export default Heading
