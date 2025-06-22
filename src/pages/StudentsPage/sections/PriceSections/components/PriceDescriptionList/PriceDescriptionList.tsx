import type { FC } from 'react'
import { motion } from 'framer-motion'

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
					<motion.li
						className={styles.item}
						key={index}
						initial={{ opacity: 0, y: 100 }}
						whileInView={{
							opacity: 1,
							y: 0,
							transition: {
								duration: 0.3,
								delay: index * 0.1 + 0.1,
							},
						}}
						viewport={{ once: true, amount: 0.3 }}
					>
						<div className={styles.marker}></div>
						<div>{description}</div>
					</motion.li>
				))}
			</ul>
		</div>
	)
}
