import { useRef, useState, type FC } from 'react'
import clsx from 'clsx'
import {
	useScroll,
	useTransform,
	useSpring,
	useMotionValueEvent,
} from 'framer-motion'

import { STAGES_LABEL_LENGTH } from './constants'

import { DesktopScrollEducation } from './components/DesktopScrollEducation/DesktopScrollEducation'

import styles from './EducationSection.module.sass'
import { MobileScrollEducation } from './components/MobileScrollEducation/MobileScrollEducation'
import { Container } from '../../../../components/Container/Container'

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
				<h3 className={styles.title}>Как проходит обучение?</h3>
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
