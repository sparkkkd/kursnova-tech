import { useRef, useState, type FC } from 'react'
import clsx from 'clsx'
import { useScroll, useMotionValueEvent } from 'framer-motion'

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
