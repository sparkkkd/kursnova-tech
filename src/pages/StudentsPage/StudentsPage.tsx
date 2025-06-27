import type { FC } from 'react'

import { IntroSection } from './sections/IntroSection/IntroSection'
import { FeaturesSection } from './sections/FeaturesSection/FeaturesSection'
import { HowSection } from './sections/HowSection/HowSection'
import { TeachersSection } from './sections/TeachersSection/TeachersSection'
import { SupportSection } from './sections/SupportSection/SupportSection'
import { PriceSections } from './sections/PriceSections/PriceSections'
import { FaqSection } from './sections/FaqSecton/FaqSection'

import styles from './StudentsPage.module.sass'

import { useAppSelector } from '../../store/hooks'
import { IntroAfterAnimation } from './sections/IntroAfterAnimation/IntroAfterAnimation'
import { useWindowSize } from 'usehooks-ts'

interface StudentsPageProps {
	className?: string
}

export const StudentsPage: FC<StudentsPageProps> = ({}) => {
	const { isCanAddSection } = useAppSelector((state) => state.uiReducer)
	const { width } = useWindowSize()

	return (
		<div className={styles.content}>
			{isCanAddSection && width > 815 && <IntroAfterAnimation />}

			<IntroSection />
			<FeaturesSection />
			<HowSection />
			<TeachersSection />
			<SupportSection />
			<PriceSections />
			<FaqSection />
		</div>
	)
}
