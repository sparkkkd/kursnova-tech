import clsx from 'clsx'
import { useWindowSize } from 'usehooks-ts'
import { type FC } from 'react'
import { motion } from 'framer-motion'

import { ScrollDown } from '../../../../components/ScrollDown/ScrollDown'

import styles from './IntroSection.module.sass'

interface IntroSectionProps {
	className?: string
}

export const IntroSection: FC<IntroSectionProps> = ({ className }) => {
	const { width } = useWindowSize()

	return (
		<section className={clsx(styles.intro, className)}>
			<motion.h1
				initial={{ opacity: 0, y: 100 }}
				whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
				viewport={{ once: true, amount: 0.3 }}
				className={styles.title}
			>
				<div>{width > 530 ? 'Домашки' : 'Домашки и'}</div>
				<div>{width > 530 ? 'и контрольные' : 'контрольные'}</div>
				<div>больше</div>
				<div>не проблема</div>
				<div className={styles.tag}>С kursnova</div>
			</motion.h1>
			<video className={styles.video} autoPlay muted preload='auto'>
				<source src='./bombs.webm' />
			</video>
			<ScrollDown className={styles.scroll} />
		</section>
	)
}
