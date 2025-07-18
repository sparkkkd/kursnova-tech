import { useState, type FC } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import { Container } from '../../../../components/Container/Container'

import IntroImg from '../../../../assets/parents/intro/intro-img.png'

import styles from './IntroSection.module.sass'

interface IntroSectionProps {
	className?: string
}

export const IntroSection: FC<IntroSectionProps> = ({ className }) => {
	const [isVideoReady, setIsVideoReady] = useState<boolean>(false)

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

			<motion.video
				className={styles.video}
				autoPlay
				muted
				preload='auto'
				playsInline
				initial={{ opacity: 0, y: 100 }}
				animate={isVideoReady ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.6 }}
				onCanPlay={() => setIsVideoReady(true)}
			>
				<source
					className={styles.chrome}
					src='https://storage.yandexcloud.net/test-backet-kursnova/parents-intro-video.webm'
				/>
				<source
					className={styles.safari}
					src='https://storage.yandexcloud.net/test-backet-kursnova/parents-intro-video.webm'
				/>
			</motion.video>

			<div className={styles.imageWrapper}>
				<img className={styles.mobileImg} src={IntroImg} alt='' />
			</div>
		</section>
	)
}
