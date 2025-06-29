import type { FC } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import { Container } from '../../../../components/Container/Container'

import IntroImg from '../../../../assets/parents/intro/intro-img.png'
import IntroVideo from '../../../../assets/parents/intro/parents-intro-video.webm'

import styles from './IntroSection.module.sass'

interface IntroSectionProps {
	className?: string
}

export const IntroSection: FC<IntroSectionProps> = ({ className }) => {
	return (
		<section className={clsx(styles.intro, className)}>
			<Container className={styles.wrapper}>
				<motion.h2
					className={styles.title}
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.1 }}
					transition={{ duration: 0.4, ease: 'easeInOut' }}
				>
					<div>Берём заботу</div>
					<div>о домашках</div>
					<div>на себя</div>
				</motion.h2>
				<button className={styles.button}>Попробовать за 0 ₽</button>
			</Container>

			<video className={styles.video} autoPlay muted preload='auto' playsInline>
				<source src={IntroVideo} />
			</video>

			<div className={styles.imageWrapper}>
				<img className={styles.mobileImg} src={IntroImg} alt='' />
			</div>
		</section>
	)
}
