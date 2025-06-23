import { useEffect, type FC } from 'react'
import ReactDOM from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { closeModal } from '../../store/slices/uiSlice'

import styles from './Modal.module.sass'

interface ModalProps extends React.PropsWithChildren {
	className?: string
}

export const Modal: FC<ModalProps> = ({ className, children }) => {
	const dispatch = useAppDispatch()
	const { isModalOpen } = useAppSelector((state) => state.uiReducer)

	useEffect(() => {
		if (isModalOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = ''
		}

		return () => {
			document.body.style.overflow = ''
		}
	}, [isModalOpen])

	if (!isModalOpen) return null

	return ReactDOM.createPortal(
		<AnimatePresence>
			{isModalOpen && (
				<motion.div
					className={clsx(styles.overlay)}
					onClick={() => dispatch(closeModal())}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.3 }}
				>
					<motion.div
						className={clsx(styles.content, className)}
						onClick={(e) => e.stopPropagation()}
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -50 }}
					>
						{children}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>,
		document.getElementById('modal-root')!
	)
}
