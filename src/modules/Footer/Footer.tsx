import { type FC } from 'react'
import clsx from 'clsx'

import { DesktopFooter } from './DesktopFooter/DesktopFooter'

import styles from './Footer.module.sass'
import { MobileFooter } from './MobileFooter/MobileFooter'

export const Footer: FC = () => {
	return (
		<>
			<DesktopFooter className={styles.desktop} />
			<MobileFooter className={styles.mobile} />
		</>
	)
}
