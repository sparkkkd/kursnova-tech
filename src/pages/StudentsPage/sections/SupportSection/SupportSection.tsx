import { useEffect, useRef, type FC } from 'react'
import clsx from 'clsx'
import { useScroll } from 'framer-motion'

import { SupportContent } from './components/SupportContent/SupportContent'
import { Container } from '../../../../components/Container/Container'

import styles from './SupportSection.module.sass'

interface SupportSectionProps {
	className?: string
}

export const SupportSection: FC<SupportSectionProps> = ({ className }) => {
	const sectionRef = useRef<HTMLDivElement>(null)

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ['start start', 'end end'],
	})

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				document.body.style.overflow =
					entry.intersectionRatio === 1 ? 'hidden' : ''
			},
			{ threshold: 1 }
		)

		if (sectionRef.current) observer.observe(sectionRef.current)
		return () => {
			document.body.style.overflow = ''
			observer.disconnect()
		}
	}, [])

	return (
		<Container>
			<section ref={sectionRef} className={clsx(styles.section, className)}>
				<div className={styles.sticky}>
					<SupportContent scrollYProgress={scrollYProgress} />
				</div>
			</section>
		</Container>
	)
}
