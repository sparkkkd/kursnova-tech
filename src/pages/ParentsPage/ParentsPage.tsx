import type { FC } from 'react'

import { IntroSection } from './sections/IntroSection/IntroSection'
import { IntroTextSection } from './sections/IntroTextSection/IntroTextSection'
import { CardSection } from './sections/CardSection/CardSection'
import { WeUnderstand } from './sections/WeUnderstand/WeUnderstand'
import { TeacherSection } from './sections/TeacherSection/TeacherSection'
import { EducationSection } from './sections/EducationSection/EducationSection'

import styles from './ParentsPage.module.sass'
import { SupportSection } from '../StudentsPage/sections/SupportSection/SupportSection'
import { PriceSections } from '../StudentsPage/sections/PriceSections/PriceSections'
import { FaqSection } from '../StudentsPage/sections/FaqSecton/FaqSection'
import { PresentSidebar } from '../../modules/PresentSidebar/PresentSidebar'

interface ParentsPageProps {}

export const ParentsPage: FC<ParentsPageProps> = ({}) => {
	return (
		<div className={styles.content}>
			<PresentSidebar />
			<IntroSection />
			<IntroTextSection />
			<CardSection />
			<WeUnderstand className={styles.weUnderstand} />
			<TeacherSection />
			<EducationSection />
			<SupportSection />
			<PriceSections />
			<FaqSection />
		</div>
	)
}
