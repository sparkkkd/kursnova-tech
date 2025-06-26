import { useEffect, useRef, useState, type FC } from 'react'
import clsx from 'clsx'
import { useScroll } from 'framer-motion'

import { StackedButtonList } from './components/StackedButtonList/StackedButtonList'
import { SupportIconsGroup } from './components/SupportIconsGroup/SupportIconsGroup'

import { SUPPORT_IMAGES, SUPPORT_STAGES_COUNT } from './contants'

import styles from './SupportSection.module.sass'

interface SupportSectionProps {
	className?: string
}

export const SupportSection: FC<SupportSectionProps> = ({ className }) => {
	const containerRef = useRef<HTMLDivElement>(null)

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start end', 'end start'],
	})

	const [activeStage, setActiveStage] = useState(0)

	useEffect(() => {
		const unsubscribe = scrollYProgress.on('change', (latest) => {
			let stage = Math.floor(latest * SUPPORT_STAGES_COUNT)
			if (stage >= SUPPORT_STAGES_COUNT) stage = SUPPORT_STAGES_COUNT - 1
			setActiveStage(stage)
		})
		return () => unsubscribe()
	}, [scrollYProgress])

	return (
		<section className={clsx(styles.section, className)}>
			<div className={styles.inner} ref={containerRef}>
				<div className={styles.sticky}>
					<div className={styles.content}>
						<span className={styles.caption}>Кроме того</span>
						<h3 className={styles.title}>
							В нашу поддержку можно обратиться с любым вопросом
						</h3>
						<StackedButtonList activeStage={activeStage} />
						<div className={styles.imagesWrapper}>
							<SupportIconsGroup
								activeStage={activeStage}
								images={SUPPORT_IMAGES[activeStage]}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
