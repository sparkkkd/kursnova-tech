import type { FC } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import { Container } from '../../../../components/Container/Container'
import { TeachersSlider } from './components/TeachersSlider/TeachersSlider'

import styles from './TeachersSection.module.sass'

interface TeachersSectionProps {
	className?: string
}

export const TeachersSection: FC<TeachersSectionProps> = ({ className }) => {
	return (
		<section className={clsx(styles.teachers, className)}>
			<Container>
				<motion.h3
					className={styles.title}
					initial={{
						opacity: 0,
						y: 100,
					}}
					whileInView={{
						opacity: 1,
						y: 0,
						transition: {
							duration: 0.3,
						},
					}}
					viewport={{ once: true, amount: 0.3 }}
				>
					«Вот бы так в школе объясняли...»
				</motion.h3>
				<motion.span
					className={styles.subtitle}
					initial={{
						opacity: 0,
						y: 100,
					}}
					whileInView={{
						opacity: 1,
						y: 0,
						transition: {
							duration: 0.3,
							delay: 0.2,
						},
					}}
					viewport={{ once: true, amount: 0.3 }}
				>
					Наши учителя так сильно любят свои предметы, что заражают этим
					учеников
				</motion.span>
			</Container>
			<TeachersSlider />
		</section>
	)
}
