import { useRef, useState, type FC } from 'react'
import clsx from 'clsx'
import {
	useScroll,
	motion,
	useTransform,
	useSpring,
	useMotionValueEvent,
} from 'framer-motion'

import { Container } from '../../../../components/Container/Container'
import { DesktopScrollEducation } from './components/DesktopScrollEducation/DesktopScrollEducation'
import { MobileScrollEducation } from './components/MobileScrollEducation/MobileScrollEducation'

import { STAGES_LABEL_LENGTH } from './constants'

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

	const stageProgress = useTransform(
		scrollYProgress,
		[0, 1],
		[0, STAGES_LABEL_LENGTH]
	)

	const smoothStageProgress = useSpring(stageProgress, {
		stiffness: 100,
		damping: 30,
	})

	const [activeStage, setActiveStage] = useState(0)

	useMotionValueEvent(smoothStageProgress, 'change', (latest) => {
		const rounded = Math.min(STAGES_LABEL_LENGTH - 1, Math.floor(latest))
		if (rounded !== activeStage) setActiveStage(rounded)
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
