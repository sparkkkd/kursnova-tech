import { type FC } from 'react'
import { motion } from 'framer-motion'

import HeartSvg from '../../../../../../assets/features/heart.svg?react'
import PizzaSvg from '../../../../../../assets/features/pizza.svg?react'
import HandsSvg from '../../../../../../assets/features/hands.svg?react'
import PhoneSvg from '../../../../../../assets/features/phone.svg?react'

import styles from './ExplodeWithHeader.module.sass'
import clsx from 'clsx'

interface ExplodeWithHeaderProps {
	className?: string
}

export const ExplodeWithHeader: FC<ExplodeWithHeaderProps> = ({
	className,
}) => {
	return (
		<div className={clsx(styles.wrapper, className)}>
			<video
				className={styles.explode}
				src='/explode.mp4'
				autoPlay
				muted
				preload='auto'
				playsInline
			></video>
			<motion.h3
				className={styles.title}
				initial={{
					opacity: 0,
				}}
				animate={{
					opacity: 1,
					transition: {
						delay: 0.5,
						duration: 1,
					},
				}}
			>
				<div>
					Учись в любимом
					<HeartSvg />
				</div>
				<div>
					<PizzaSvg />
					формате
					<HandsSvg />
					нужен
				</div>
				<div>
					только
					<PhoneSvg />
					смартфон
				</div>
			</motion.h3>
			<button className={styles.button}>Попробовать за 0 ₽</button>
		</div>
	)
}
