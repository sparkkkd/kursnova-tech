import type { FC } from 'react'
import { useAppSelector } from '../../store/hooks'

import { IntroSection } from './sections/IntroSection/IntroSection'
import { FeaturesSection } from './sections/FeaturesSection/FeaturesSection'
import { HowSection } from './sections/HowSection/HowSection'
import { TeachersSection } from './sections/TeachersSection/TeachersSection'
import { SupportSection } from './sections/SupportSection/SupportSection'
import { PriceSections } from './sections/PriceSections/PriceSections'
import { FaqSection } from './sections/FaqSecton/FaqSection'

import { Modal } from '../../modules/Modal/Modal'
import { TryForm } from '../../modules/TryForm/TryForm'
import { SuccessModal } from '../../modules/SuccessModal/SuccessModal'

import styles from './StudentsPage.module.sass'

interface StudentsPageProps {
	className?: string
}

export const StudentsPage: FC<StudentsPageProps> = ({}) => {
	const { isModalSuccess } = useAppSelector((state) => state.uiReducer)

	return (
		<div className={styles.content}>
			<Modal>
				{!isModalSuccess && <TryForm />}
				{isModalSuccess && <SuccessModal />}
			</Modal>

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
