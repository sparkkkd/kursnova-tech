import type { FC } from 'react'
import { motion } from 'framer-motion'

import styles from './ButtonList.module.sass'
import clsx from 'clsx'

interface ButtonListProps {
	className?: string
	buttons: { label: string }[]
	transforms: { opacity: any; translateY: any }[]
}

export const ButtonList: FC<ButtonListProps> = ({
	buttons,
	transforms,
	className,
}) => {
	return (
		<div className={clsx(styles.wrapper, className)}>
			{buttons.map((btn, i) => (
				<motion.button
					key={i}
					className={styles.button}
					style={{
						left: '50%',
						x: '-50%',
						opacity: transforms[i].opacity,
						y: transforms[i].translateY,
					}}
				>
					{btn.label}
				</motion.button>
			))}
		</div>
	)
}
