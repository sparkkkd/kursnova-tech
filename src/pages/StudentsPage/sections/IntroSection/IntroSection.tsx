import clsx from 'clsx'
import { useEffect, useState, type FC } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { TitleWithBombs } from './components/TitleWithBombs/TitleWithBombs'
import { ExplodeWithHeader } from './components/ExplodeWithHeader/ExplodeWithHeader'

import styles from './IntroSection.module.sass'

interface IntroSectionProps {
	className?: string
}

export const IntroSection: FC<IntroSectionProps> = ({ className }) => {
	const [isScrolled, setIsScrolled] = useState<boolean>(false)

	useEffect(() => {
		const handleScroll = () => {
			if (!isScrolled && window.scrollY > 50) {
				setIsScrolled(true)
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => window.removeEventListener('scroll', handleScroll)
	}, [isScrolled])

	return (
		<motion.section
			className={clsx(styles.intro, className)}
			id='intro-id'
			initial={{ background: '#14141A' }}
			animate={{ background: isScrolled ? '#5735ff' : '#14141A' }}
			transition={{ delay: 0.1, duration: 0.3 }}
		>
			<div className={styles.stickyWrapper}>
				<div className={styles.sticky}>
					<AnimatePresence>
						{!isScrolled && (
							<motion.div
								className={clsx(styles.screen, styles.screen_1)}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.2 }}
							>
								<TitleWithBombs />
							</motion.div>
						)}
					</AnimatePresence>

					<AnimatePresence>
						{isScrolled && (
							<div className={clsx(styles.screen, styles.screen_2)}>
								<ExplodeWithHeader />
							</div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</motion.section>
	)
}
