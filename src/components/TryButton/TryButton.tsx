import type { FC } from 'react'
import { motion } from 'framer-motion'

import styles from './TryButton.module.sass'
import clsx from 'clsx'

interface TryButtonProps {
	className?: string
	onClick?: () => void
}

export const TryButton: FC<TryButtonProps> = ({ className, onClick }) => {
	return (
		<motion.button className={clsx(styles.button, className)} onClick={onClick}>
			Попробовать за 0 ₽
		</motion.button>
	)
}
