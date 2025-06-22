import clsx from 'clsx'
import { type FC } from 'react'
import { motion } from 'framer-motion'

import { ExplodeWithHeader } from './components/ExplodeWithHeader/ExplodeWithHeader'
import { FeaturesVideo } from './components/FeaturesVideo/FeaturesVideo'
import { FeaturesTask } from './components/FeaturesTask/FeaturesTask'

import styles from './FeaturesSection.module.sass'

interface FeturesSectionProps {
	className?: string
}

export const FeaturesSection: FC<FeturesSectionProps> = ({ className }) => {
	return (
		<section className={clsx(styles.features, className)}>
			<div className={styles.wrapper}>
				<motion.div className={styles.block}>
					<ExplodeWithHeader />
				</motion.div>
				<motion.div className={styles.block}>
					<FeaturesVideo />
				</motion.div>
				<motion.div className={styles.block}>
					<FeaturesTask />
				</motion.div>
			</div>
		</section>
	)
}
