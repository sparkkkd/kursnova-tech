import { useEffect, useRef, useState, type FC } from 'react'
import clsx from 'clsx'
import { useScroll } from 'framer-motion'

import { StackedButtonList } from './components/StackedButtonList/StackedButtonList'
import { SupportIconsGroup } from './components/SupportIconsGroup/SupportIconsGroup'

import { SUPPORT_IMAGES } from './contants'

import styles from './SupportSection.module.sass'

interface SupportSectionProps {
	className?: string
}

export const SupportSection: FC<SupportSectionProps> = ({ className }) => {
	const containerRef = useRef<HTMLDivElement>(null)

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start start', 'end end'],
	})

	const [activeStage, setActiveStage] = useState(0)

	useEffect(() => {
		const unsubscribe = scrollYProgress.on('change', (latest) => {
			let stage = 0

			if (latest >= 0.66) stage = 2
			else if (latest >= 0.33) stage = 1
			else stage = 0

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
