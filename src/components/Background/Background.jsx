import { useSelector, useDispatch } from 'react-redux'
import { backgroundSelector } from '../../app/selector'
import { splashScreen } from '../../assets/images'
import { setLoading } from '../Background/backgroundSlice'

function Background() {
	const dispatch = useDispatch()
	const background = useSelector(backgroundSelector)

	return (
		<div className="position-absolute inset-0 tiviOn">
			<div className="position-absolute inset-0">
				<img
					onLoad={() => dispatch(setLoading(false))}
					src={background.background}
					alt="background"
					className="img-fluid vw-100 vh-100 object-cover"
				/>
			</div>

			{background.isLoading && (
				<div className="position-absolute inset-0">
					<img
						src={splashScreen}
						alt="splash screen"
						className="img-fluid vw-100 vh-100 object-cover"
					/>
				</div>
			)}
		</div>
	)
}
export default Background
