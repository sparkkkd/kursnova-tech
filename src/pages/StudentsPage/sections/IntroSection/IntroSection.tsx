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
			<h1 className={styles.title}>
				<motion.div
					initial={{
						opacity: 0,
						rotateZ: 20,
					}}
					animate={{
						opacity: 1,
						rotateZ: 0,
						transition: {
							duration: 0.3,
						},
					}}
				>
					{width > 530 ? 'Домашки' : 'Домашки и'}
				</motion.div>
				<motion.div
					initial={{
						opacity: 0,
						rotateZ: 20,
					}}
					animate={{
						opacity: 1,
						rotateZ: 0,
						transition: {
							duration: 0.3,
							delay: 0.1,
						},
					}}
				>
					{width > 530 ? 'и контрольные' : 'контрольные'}
				</motion.div>
				<motion.div
					initial={{
						opacity: 0,
						rotateZ: -20,
					}}
					animate={{
						opacity: 1,
						rotateZ: 0,
						transition: {
							duration: 0.3,
							delay: 0.2,
						},
					}}
				>
					больше
				</motion.div>
				<motion.div
					initial={{
						opacity: 0,
						rotateZ: 20,
					}}
					animate={{
						opacity: 1,
						rotateZ: 0,
						transition: {
							duration: 0.3,
							delay: 0.3,
						},
					}}
				>
					не проблема
				</motion.div>
				<motion.div
					initial={{
						opacity: 0,
						scale: 0,
						rotateZ: 6,
					}}
					animate={{
						opacity: 1,
						scale: 1,
						transition: {
							duration: 0.3,
							delay: 0.4,
						},
					}}
					className={styles.tag}
				>
					С kursnova
				</motion.div>
			</h1>
			<video className={styles.video} autoPlay muted preload='auto'>
				<source src='./bombs.webm' />
			</video>
			<ScrollDown className={styles.scroll} />
		</section>
	)
}
