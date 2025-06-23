import type { FC } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import { LICENSE_ITEMS } from '../constants'

import styles from './FooterLicense.module.sass'

interface FooterLicenseProps {
	className?: string
	isMobile: boolean
}

export const FooterLicense: FC<FooterLicenseProps> = ({
	className,
	isMobile,
}) => {
	return (
		<ul className={clsx(styles.list, className)}>
			{LICENSE_ITEMS.map((item, index) => {
				const delay = 0.1
				return (
					<motion.li
						key={index}
						className={styles.item}
						initial={isMobile && { opacity: 0, y: 100 }}
						whileInView={{
							opacity: 1,
							y: 0,
							transition: {
								duration: 0.3,
								delay: index * 0.1 + delay,
							},
						}}
						viewport={{ once: true, amount: 0.1 }}
					>
						<a href='#'>{item}</a>
					</motion.li>
				)
			})}
		</ul>
	)
}
