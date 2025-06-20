import type { FC } from 'react'

import styles from './HowCard.module.sass'
import clsx from 'clsx'

interface HowCardProps {
	className?: string
	img: string
	text: string
	soon?: boolean
}

export const HowCard: FC<HowCardProps> = ({ className, img, text, soon }) => {
	return (
		<div className={clsx(styles.card, className)}>
			<img className={styles.img} src={img} alt={text} />
			<div className={styles.text}>{text}</div>
			{soon && <div className={styles.soon}>скоро</div>}
		</div>
	)
}
