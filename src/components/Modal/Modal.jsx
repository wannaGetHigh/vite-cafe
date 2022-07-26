import { useSelector, useDispatch } from 'react-redux'
import ImageButton from './ImageButton'
import { audio } from '../../constants'
import { showModalSelector } from '../../app/selector'
import { hideModal } from '../Control/showModalSlice'

function Modal() {
	const isModalShow = useSelector(showModalSelector)
	const dispatch = useDispatch()

	return (
		isModalShow && (
			<div className="position-absolute inset-0 bg-b-07 p-3 overflow-auto slideUp">
				<div
					className="row row-cols-4 text-white"
					onClick={() => dispatch(hideModal())}
				>
					{audio.map((item, i) => (
						<ImageButton key={i} {...item} />
					))}
				</div>
			</div>
		)
	)
}
export default Modal
