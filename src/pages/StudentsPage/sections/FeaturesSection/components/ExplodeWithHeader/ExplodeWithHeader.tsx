import { type FC } from 'react'
import clsx from 'clsx'

import { motion } from 'framer-motion'

import { FeaturesButton } from '../FeaturesButton/FeaturesButton'

import HeartSvg from '../../../../../../assets/features/heart.svg?react'
import PizzaSvg from '../../../../../../assets/features/pizza.svg?react'
import HandsSvg from '../../../../../../assets/features/hands.svg?react'
import PhoneSvg from '../../../../../../assets/features/phone.svg?react'

import styles from './ExplodeWithHeader.module.sass'

interface ExplodeWithHeaderProps {
	className?: string
}

export const ExplodeWithHeader: FC<ExplodeWithHeaderProps> = ({
	className,
}) => {
	return (
		<div className={clsx(styles.wrapper, className)}>
			<motion.video
				className={styles.explode}
				src='./explode.mp4'
				autoPlay
				muted
				preload='auto'
				playsInline
				initial={{
					opacity: 1,
				}}
				animate={{
					opacity: 0,
					transition: {
						delay: 0.5,
						duration: 1,
					},
				}}
			></motion.video>
			<h3 className={styles.title}>
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
			</h3>
			<FeaturesButton className={styles.tryButton} />
		</div>
	)
}
