import type { FC } from 'react'
import clsx from 'clsx'

import { TeachersSlider } from './components/TeachersSlider/TeachersSlider'

import styles from './TeachersSection.module.sass'

interface TeachersSectionProps {
	className?: string
}

export const TeachersSection: FC<TeachersSectionProps> = ({ className }) => {
	return (
		<section className={clsx(styles.teachers, className)}>
			<h3 className={styles.title}>«Вот бы так в школе объясняли...»</h3>
			<span className={styles.subtitle}>
				Наши учителя так сильно любят свои предметы, что заражают этим учеников
			</span>
			<TeachersSlider />
		</section>
	)
}
