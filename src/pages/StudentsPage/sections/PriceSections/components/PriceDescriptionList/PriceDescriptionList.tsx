import type { FC } from 'react'

import styles from './PriceDescriptionList.module.sass'

interface PriceDescriptionListProps {
	className?: string
	descriptions: string[]
}

export const PriceDescriptionList: FC<PriceDescriptionListProps> = ({
	className,
	descriptions,
}) => {
	return (
		<div className={(styles.wrapper, className)}>
			<ul className={styles.list}>
				{descriptions.map((description, index) => (
					<li className={styles.item} key={index}>
						<div className={styles.marker}></div>
						<div>{description}</div>
					</li>
				))}
			</ul>
		</div>
	)
}
