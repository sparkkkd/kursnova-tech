import type { FC } from 'react'
import clsx from 'clsx'

import { Container } from '../../../../components/Container/Container'
import { DesktopCards } from './components/DesktopCards/DesktopCards'

import styles from './CardSection.module.sass'
import { useWindowSize } from 'usehooks-ts'
import { SwipeCardStacks } from './components/SwipeCardStacks/SwipeCardStacks'

interface CardSectionProps {
	className?: string
}

export const CardSection: FC<CardSectionProps> = ({ className }) => {
	const { width } = useWindowSize()

	return (
		<section className={clsx(styles.section, className)}>
			<Container>
				<div className={styles.wrapper}>
					<div className={styles.title}>
						{width > 650 && <h3>Для начала — знакомо ли вам что-нибудь?</h3>}
						{width <= 650 && (
							<h3>
								Для начала —
								<br />
								знакомо ли вам
								<br />
								что-нибудь?
							</h3>
						)}

						<div>
							Кликайте на карточку, если было — уверены, вы точно не одиноки
							в своих проблемах
						</div>
					</div>

					<div className={styles.desktop}>
						<DesktopCards />
					</div>

					<div className={styles.stack}>
						<SwipeCardStacks />
					</div>
				</div>
			</Container>
		</section>
	)
}
