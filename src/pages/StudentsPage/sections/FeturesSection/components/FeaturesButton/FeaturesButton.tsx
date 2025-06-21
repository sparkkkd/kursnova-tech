import clsx from 'clsx'
import type { FC } from 'react'

import styles from './FeaturesButton.module.sass'

interface FeaturesButtonProps {
	className?: string
	text?: string
}

export const FeaturesButton: FC<FeaturesButtonProps> = ({
	className,
	text,
}) => {
	return (
		<button className={clsx(styles.button, className)}>
			{text ? text : 'Попробовать за 0 ₽'}
		</button>
	)
}
