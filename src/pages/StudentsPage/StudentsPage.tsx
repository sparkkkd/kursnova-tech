import type { FC } from 'react'

import { IntroSection } from './sections/IntroSection/IntroSection'
import { FeturesSection } from './sections/FeturesSection/FeturesSection'
import { HowSection } from './sections/HowSection/HowSection'

import styles from './StudentsPage.module.sass'

interface StudentsPageProps {
	className?: string
}

export const StudentsPage: FC<StudentsPageProps> = ({}) => {
	return (
		<main className={styles.main}>
			<IntroSection />
			<FeturesSection />
			<HowSection />
		</main>
	)
}
