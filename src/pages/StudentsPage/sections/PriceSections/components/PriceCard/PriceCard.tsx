import clsx from 'clsx'
import type { FC } from 'react'
import { motion } from 'framer-motion'

import styles from './PriceCard.module.sass'

interface PriceCardProps {
	className?: string
	type: string
	price: string
	description?: string
	isProfit?: boolean
	delayCard?: number
	delayType?: number
	delayPrice?: number
	delayDescription?: number
	delayProfit?: number
}

export const PriceCard: FC<PriceCardProps> = ({
	className,
	price,
	type,
	isProfit,
	description,
	delayCard,
	delayDescription,
	delayPrice,
	delayProfit,
	delayType,
}) => {
	return (
		<motion.div
			className={clsx(styles.card, className)}
			initial={{
				opacity: 0,
				y: 100,
			}}
			whileInView={{
				opacity: 1,
				y: 0,
				transition: {
					duration: 0.3,
					delay: delayCard,
				},
			}}
			viewport={{ once: true, amount: 0.3 }}
		>
			<motion.div
				className={styles.type}
				initial={{ opacity: 0, scale: 0 }}
				whileInView={{
					opacity: 1,
					scale: 1,
					transition: { duration: 0.3, delay: delayType },
				}}
				viewport={{ once: true, amount: 0.3 }}
			>
				{type}
			</motion.div>
			<motion.div
				className={styles.price}
				initial={{ opacity: 0, scale: 0 }}
				whileInView={{
					opacity: 1,
					scale: 1,
					transition: { duration: 0.3, delay: delayPrice },
				}}
				viewport={{ once: true, amount: 0.3 }}
			>
				{price}
			</motion.div>
			{description && (
				<motion.div
					className={styles.description}
					initial={{
						opacity: 0,
						scale: 0,
					}}
					whileInView={{
						opacity: 1,
						scale: 1,
						transition: {
							duration: 0.3,
							delay: delayDescription,
						},
					}}
					viewport={{ once: true, amount: 0.3 }}
				>
					{description}
				</motion.div>
			)}
			{isProfit && (
				<motion.div
					className={styles.profit}
					initial={{ opacity: 0, scale: 0, rotateZ: 12 }}
					whileInView={{
						opacity: 1,
						scale: 1,
						rotateZ: 12,
						transition: { duration: 0.3, delay: delayProfit },
					}}
					viewport={{ once: true, amount: 0.3 }}
				>
					Выгода до 12 500 ₽
				</motion.div>
			)}
		</motion.div>
	)
}
