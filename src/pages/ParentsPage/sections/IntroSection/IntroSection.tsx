import type { FC } from 'react'
import clsx from 'clsx'

import IntroImg from '../../../../assets/parents/intro/intro-img.png'
import IntroVideo from '../../../../assets/parents/intro/parents-intro-video.webm'

import { Container } from '../../../../components/Container/Container'

import styles from './IntroSection.module.sass'

interface IntroSectionProps {
	className?: string
}

export const IntroSection: FC<IntroSectionProps> = ({ className }) => {
	return (
		<section className={clsx(styles.intro, className)}>
			<Container className={styles.wrapper}>
				<h1 className={styles.title}>
					<div>Берём заботу</div>
					<div>о домашках</div>
					<div>на себя</div>
				</h1>
				<button className={clsx(styles.button, styles.mobileButton)}>
					Попробовать за 0 ₽
				</button>
			</Container>

			<img className={styles.mobileImg} src={IntroImg} alt='' />

			<video className={styles.img} autoPlay muted preload='auto'>
				<source src={IntroVideo} />
			</video>
		</section>
	)
}
