import clsx from 'clsx'
import type { FC } from 'react'

import styles from './PriceCard.module.sass'

interface PriceCardProps {
	className?: string
	type: string
	price: string
	description?: string
	isProfit?: boolean
}

export const PriceCard: FC<PriceCardProps> = ({
	className,
	price,
	type,
	isProfit,
	description,
}) => {
	return (
		<div className={clsx(styles.card, className)}>
			<div className={styles.type}>{type}</div>
			<div className={styles.price}>{price}</div>
			{description && <div className={styles.description}>{description}</div>}
			{isProfit && <div className={styles.profit}>Выгода до 12 500 ₽ </div>}
		</div>
	)
}
