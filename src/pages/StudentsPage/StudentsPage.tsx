import type { FC } from 'react'

import { IntroSection } from './sections/IntroSection/IntroSection'
import { FeaturesSection } from './sections/FeaturesSection/FeaturesSection'
import { HowSection } from './sections/HowSection/HowSection'
import { TeachersSection } from './sections/TeachersSection/TeachersSection'
import { SupportSection } from './sections/SupportSection/SupportSection'
import { PriceSections } from './sections/PriceSections/PriceSections'
import { FaqSection } from './sections/FaqSecton/FaqSection'

import styles from './StudentsPage.module.sass'

interface StudentsPageProps {
	className?: string
}

export const StudentsPage: FC<StudentsPageProps> = ({}) => {
	return (
		<main className={styles.main}>
			<IntroSection />
			<FeaturesSection />
			<HowSection />
			<TeachersSection />
			<SupportSection />
			<PriceSections />
			<FaqSection />
		</main>
	)
}
