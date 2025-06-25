import { useState, type FC } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import styles from './FlipCard.module.sass'
import type { ICard } from '../../constants'

interface FlipCardProps extends ICard {
	className?: string
}

export const FlipCard: FC<FlipCardProps> = ({
	className,
	backTitle,
	emoji,
	frontTitle,
	backText,
	frontText,
	rotate,
	background,
	color,
}) => {
	const [flipped, setFlipped] = useState<boolean>(false)

	return (
		<div
			className={clsx(styles.card, className)}
			onClick={(e) => {
				setFlipped((prev) => !prev)
				e.currentTarget.blur()
				e.preventDefault()
			}}
			onPointerDown={(e) => {
				e.currentTarget.blur()
				e.preventDefault()
			}}
		>
			<div
				className={styles.inner}
				style={{
					transform: `rotateY(${flipped ? 180 : 0}deg) rotateZ(${rotate}deg)`,
				}}
			>
				<div className={clsx(styles.face, styles.front)} style={{ background }}>
					<div className={styles.frontTitle} style={{ color }}>
						{frontTitle}
					</div>
					<div className={styles.frontText} style={{ color }}>
						{frontText}
					</div>
				</div>
				<div className={clsx(styles.face, styles.back)}>
					{flipped && (
						<>
							<motion.img
								initial={{ opacity: 0, y: 50 }}
								animate={{
									opacity: flipped ? 1 : 0,
									y: flipped ? 0 : 50,
									transition: { duration: 0.5 },
								}}
								exit={{ opacity: 0, y: 50 }}
								className={styles.emoji}
								src={emoji}
								alt=''
							/>
							<motion.img
								initial={{ opacity: 0, y: 50 }}
								animate={{
									opacity: flipped ? 0.5 : 0,
									y: flipped ? 0 : 50,
									transition: { duration: 0.5 },
								}}
								exit={{ opacity: 0, y: 50 }}
								className={styles.emoji_sm}
								src={emoji}
								alt=''
							/>
						</>
					)}
					<div className={styles.backWrapper}>
						<div className={styles.backTitle}>{backTitle}</div>
						<div className={styles.text}>{backText}</div>
					</div>
				</div>
			</div>
		</div>
	)
}
