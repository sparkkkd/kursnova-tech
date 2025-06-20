import type { FC } from 'react'
import clsx from 'clsx'

import how1 from '../../../../assets/how/how-1.svg'
import how2 from '../../../../assets/how/how-2.svg'
import how3 from '../../../../assets/how/how-3.svg'
import how4 from '../../../../assets/how/how-4.svg'
import weHelp from '../../../../assets/how/we-help.svg'

import { HowCard } from './components/HowCard/HowCard'
import { Container } from '../../../../components/Container/Container'

import styles from './HowSection.module.sass'

interface HowSectionsProps {
	className?: string
}

const cardsContent = [
	{
		img: how1,
		text: 'Трекай прогресс по предметам',
		soon: false,
	},
	{
		img: how2,
		text: 'Получай награду в виде опыта и игровой валюты',
		soon: false,
	},
	{
		img: how3,
		text: 'Меняй коины на дни заморозки, стикеры, мерч и другие приятные мелочи',
		soon: true,
	},
	{
		img: how4,
		text: 'Занимайся ежедневно, дни заморозки сохранят прогресс',
		soon: false,
	},
]

export const HowSection: FC<HowSectionsProps> = ({ className }) => {
	return (
		<section className={clsx(className, styles.how)}>
			<Container>
				<div className={styles.wrapper}>
					<h3 className={styles.title}>Как все устроено</h3>
					<div className={styles.cards}>
						{cardsContent.map((card, index) => (
							<HowCard
								key={index}
								className={styles.card}
								img={card.img}
								text={card.text}
								soon={card.soon}
							/>
						))}
						<img className={styles.img} src={weHelp} alt='Мы поможем!' />
					</div>
					<button className={styles.button}>Попробовать за 0 ₽</button>
				</div>
			</Container>
		</section>
	)
}
