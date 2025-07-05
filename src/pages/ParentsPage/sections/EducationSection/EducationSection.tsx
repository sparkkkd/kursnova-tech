import { useEffect, useRef, useState, type FC } from 'react'
import clsx from 'clsx'
import { useScroll, useMotionValueEvent, useInView } from 'framer-motion'

import { DesktopScrollEducation } from './components/DesktopScrollEducation/DesktopScrollEducation'
import { MobileScrollEducation } from './components/MobileScrollEducation/MobileScrollEducation'

import styles from './EducationSection.module.sass'

interface EducationSectionProps {
	className?: string
}

export const EducationSection: FC<EducationSectionProps> = ({ className }) => {
	useEffect(() => {
		const videoUrls = [
			'https://storage.yandexcloud.net/test-backet-kursnova/TaskExtra.mp4',
			'https://storage.yandexcloud.net/test-backet-kursnova/TaskExtra.mp4',
			'https://storage.yandexcloud.net/test-backet-kursnova/TaskExtra.mp4',
		]

		videoUrls.forEach((url) => {
			const video = document.createElement('video')
			video.src = url
			video.preload = 'auto'
			video.muted = true
			video.playsInline = true
			video.style.display = 'none'
			document.body.appendChild(video)
		})
	}, [])

	const ref = useRef(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end end'],
	})

	const sectionRef = useRef(null)
	const isInView = useInView(sectionRef, { amount: 0.3, once: false })

	const [activeStage, setActiveStage] = useState(0)
	const activeStageRef = useRef(0)

	useMotionValueEvent(scrollYProgress, 'change', (latest) => {
		let newStage = 0
		if (latest < 0.33) newStage = 0
		else if (latest < 0.66) newStage = 1
		else newStage = 2

		if (activeStageRef.current !== newStage) {
			activeStageRef.current = newStage
			setActiveStage(newStage)
		}
	})

	return (
		<section ref={sectionRef} className={clsx(styles.section, className)}>
			<div className={styles.inner} ref={ref}>
				<div className={styles.sticky}>
					<DesktopScrollEducation
						className={styles.desktop}
						activeStage={activeStage}
						isInView={isInView}
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
