import { useRef, useState, type FC } from 'react'
import clsx from 'clsx'
import { useScroll, motion, useMotionValueEvent } from 'framer-motion'

import { Container } from '../../../../components/Container/Container'
import { DesktopScrollEducation } from './components/DesktopScrollEducation/DesktopScrollEducation'
import { MobileScrollEducation } from './components/MobileScrollEducation/MobileScrollEducation'

import styles from './EducationSection.module.sass'

interface EducationSectionProps {
	className?: string
}

export const EducationSection: FC<EducationSectionProps> = ({ className }) => {
	const ref = useRef(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end end'],
	})

	const [activeStage, setActiveStage] = useState(0)

	useMotionValueEvent(scrollYProgress, 'change', (latest) => {
		if (latest < 0.33) {
			if (activeStage !== 0) setActiveStage(0)
		} else if (latest < 0.66) {
			if (activeStage !== 1) setActiveStage(1)
		} else {
			if (activeStage !== 2) setActiveStage(2)
		}
	})

	return (
		<section className={clsx(styles.section, className)}>
			<Container>
				<motion.h3
					className={styles.title}
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3 }}
					viewport={{ once: true, amount: 0.3 }}
				>
					Как проходит обучение?
				</motion.h3>
			</Container>
			<div className={styles.inner} ref={ref}>
				<div className={styles.sticky}>
					<DesktopScrollEducation
						className={styles.desktop}
						activeStage={activeStage}
					/>
					<MobileScrollEducation
						classname={styles.mobile}
						activeStage={activeStage}
					/>
				</div>
			</div>
		</section>
	)
}
