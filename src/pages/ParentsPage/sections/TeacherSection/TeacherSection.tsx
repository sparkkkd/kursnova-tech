import type { FC } from 'react'

import clsx from 'clsx'

import { TeachersSlider } from '../../../StudentsPage/sections/TeachersSection/components/TeachersSlider/TeachersSlider'
import { Container } from '../../../../components/Container/Container'

import styles from './TeacherSection.module.sass'

interface TeacherSectionProps {
	className?: string
}

export const TeacherSection: FC<TeacherSectionProps> = ({ className }) => {
	return (
		<section className={clsx(styles.section, className)}>
			<Container className={styles.titleWrapper}>
				<h3 className={styles.title}>Мы понимаем вас</h3>
				<span className={styles.subtitle}>
					Поэтому разработали kursnova вместе с опытными учителями и
					методологами
				</span>
			</Container>
			<TeachersSlider />
		</section>
	)
}
