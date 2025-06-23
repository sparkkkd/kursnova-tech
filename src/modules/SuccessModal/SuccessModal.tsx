import type { FC } from 'react'
import clsx from 'clsx'

import SuccessImage from '../../assets/success.png'

import styles from './SuccessModal.module.sass'
import { useAppDispatch } from '../../store/hooks'
import { closeModal } from '../../store/slices/uiSlice'

interface SuccessModalProps {
	className?: string
}

export const SuccessModal: FC<SuccessModalProps> = ({ className }) => {
	const dispatch = useAppDispatch()

	return (
		<div className={clsx(styles.wrapper, className)}>
			<img className={styles.img} src={SuccessImage} alt='Готово' />
			<div className={styles.title}>
				Спасибо! Ссылка на бесплатный доступ уже на почте
			</div>
			<div className={styles.text}>
				Если ничего не пришло, проверьте папку «Спам»
			</div>
			<button
				className={styles.button}
				onClick={() => {
					dispatch(closeModal())
				}}
			>
				Отлично, спасибо
			</button>
		</div>
	)
}
