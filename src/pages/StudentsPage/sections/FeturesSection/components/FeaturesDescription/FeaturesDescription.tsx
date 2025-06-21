import type { FC, JSX } from 'react'

import styles from './FeaturesDescription.module.sass'
import clsx from 'clsx'

export interface FeaturesDescriptionProps {
	className?: string
	icon: JSX.Element
	title: string
	description: string | JSX.Element
}

export const FeaturesDescription: FC<FeaturesDescriptionProps> = ({
	className,
	icon,
	title,
	description,
}) => {
	return (
		<div className={clsx(styles.wrapper, className)}>
			<div className={styles.icon}>{icon}</div>
			<div className={styles.title}>{title}</div>
			<div className={styles.description}>{description}</div>
		</div>
	)
}
