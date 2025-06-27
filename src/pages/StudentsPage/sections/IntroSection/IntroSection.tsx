import clsx from 'clsx'
import { type FC } from 'react'

import { DesktopIntro } from './components/DesktopIntro/DesktopIntro'

import styles from './IntroSection.module.sass'
import { TitleWithBombs } from './components/TitleWithBombs/TitleWithBombs'
import { useWindowSize } from 'usehooks-ts'

interface IntroSectionProps {
	className?: string
}

export const IntroSection: FC<IntroSectionProps> = ({ className }) => {
	const { width } = useWindowSize()

	return (
		<section className={clsx(styles.intro, className)}>
			{width > 815 && <DesktopIntro className={styles.desktop} />}
			{width <= 815 && (
				<div className={styles.mobile}>
					<TitleWithBombs />
				</div>
			)}
		</section>
	)
}
