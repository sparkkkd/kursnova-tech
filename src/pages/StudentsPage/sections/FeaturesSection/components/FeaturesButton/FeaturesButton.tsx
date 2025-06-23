import clsx from 'clsx'
import type { FC } from 'react'
import { motion } from 'framer-motion'
import { useAppDispatch } from '../../../../../../store/hooks'
import { openModal } from '../../../../../../store/slices/uiSlice'

import styles from './FeaturesButton.module.sass'

interface FeaturesButtonProps {
	className?: string
	text?: string
	delay?: number
}

export const FeaturesButton: FC<FeaturesButtonProps> = ({
	className,
	text,
	delay,
}) => {
	const dispatch = useAppDispatch()

	return (
		<motion.button
			onClick={() => dispatch(openModal())}
			initial={{ opacity: 0, y: 100 }}
			whileInView={{
				opacity: 1,
				y: 0,
				transition: {
					duration: 0.3,
					delay,
				},
			}}
			viewport={{ once: true, amount: 0.3 }}
			className={clsx(styles.button, className)}
		>
			{text ? text : 'Попробовать за 0 ₽'}
		</motion.button>
	)
}
