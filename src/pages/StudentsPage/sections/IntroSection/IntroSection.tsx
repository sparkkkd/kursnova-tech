import clsx from 'clsx'
import { useWindowSize } from 'usehooks-ts'
import { type FC } from 'react'

import { ScrollDown } from '../../../../components/ScrollDown/ScrollDown'

import styles from './IntroSection.module.sass'

interface IntroSectionProps {
	className?: string
}

export const IntroSection: FC<IntroSectionProps> = ({ className }) => {
	const { width } = useWindowSize()

	return (
		<section className={clsx(styles.intro, className)}>
			<h1 className={styles.title}>
				<div>{width > 530 ? 'Домашки' : 'Домашки и'}</div>
				<div>{width > 530 ? 'и контрольные' : 'контрольные'}</div>
				<div>больше</div>
				<div>не проблема</div>
				<div className={styles.tag}>С kursnova</div>
			</h1>
			<video className={styles.video} autoPlay muted preload='auto'>
				<source src='/bombs.webm' />
			</video>
			<ScrollDown className={styles.scroll} />
		</section>
	)
}
