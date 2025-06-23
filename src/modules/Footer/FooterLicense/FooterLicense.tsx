import type { FC } from 'react'

import styles from './FooterLicense.module.sass'
import { LICENSE_ITEMS } from '../constants'
import clsx from 'clsx'

interface FooterLicenseProps {
	className?: string
}

export const FooterLicense: FC<FooterLicenseProps> = ({ className }) => {
	return (
		<ul className={clsx(styles.list, className)}>
			{LICENSE_ITEMS.map((item, index) => (
				<li key={index} className={styles.item}>
					<a href='#'>{item}</a>
				</li>
			))}
		</ul>
	)
}
