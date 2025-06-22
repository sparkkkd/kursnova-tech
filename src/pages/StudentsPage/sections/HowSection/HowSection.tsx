import type { FC } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

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
					<motion.h3
						className={styles.title}
						initial={{ opacity: 0, x: -100 }}
						whileInView={{ opacity: 1, x: 0, transition: { duration: 0.3 } }}
						viewport={{ once: true, amount: 0.3 }}
					>
						Как все устроено
					</motion.h3>
					<div className={styles.cards}>
						{cardsContent.map((card, index) => {
							const baseDelay = 0.1

							return (
								<HowCard
									key={index}
									className={styles.card}
									img={card.img}
									text={card.text}
									soon={card.soon}
									delayCard={baseDelay + index * 0.1}
									delayImg={baseDelay + index * 0.1}
									delayText={baseDelay + index * 0.1}
								/>
							)
						})}
						<motion.img
							className={styles.img}
							src={weHelp}
							alt='Мы поможем!'
							initial={{ opacity: 0, x: -100 }}
							whileInView={{
								opacity: 1,
								x: 0,
								transition: {
									duration: 0.4,
									delay: 0.5,
								},
							}}
							viewport={{ once: true, amount: 0.3 }}
						/>
					</div>
					<motion.button
						className={styles.button}
						initial={{
							opacity: 0,
							y: 100,
						}}
						whileInView={{
							opacity: 1,
							y: 0,
							transition: {
								duration: 0.3,
								delay: 0.7,
							},
						}}
					>
						Попробовать за 0 ₽
					</motion.button>
				</div>
			</Container>
		</section>
	)
}
