import type { FC } from 'react'

import styles from './FaqSection.module.sass'
import clsx from 'clsx'
import { Container } from '../../../../components/Container/Container'

interface FaqSectionProps {
	className?: string
}

export const FaqSection: FC<FaqSectionProps> = ({ className }) => {
	return (
		<section className={clsx(styles.section, className)}>
			<Container>
				<div className={styles.wrapper}>FaqSection</div>
			</Container>
		</section>
	)
}
