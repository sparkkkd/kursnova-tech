import type { FC } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import { PriceCard } from './components/PriceCard/PriceCard'
import { Container } from '../../../../components/Container/Container'
import { PriceDescriptionList } from './components/PriceDescriptionList/PriceDescriptionList'
import { FeaturesButton } from '../FeaturesSection/components/FeaturesButton/FeaturesButton'

import { CARDS, PRICE_DESCRIPTIONS } from './constants'

import PriceTag from '../../../../assets/price/price-tag.svg?react'
import Arrow from '../../../../assets/price/arrow.svg?react'
import MobilePriceTag from '../../../../assets/price/mobile-price-tag.svg?react'

import styles from './PriceSections.module.sass'

interface PriceSectionsProps {
	className?: string
}

export const PriceSections: FC<PriceSectionsProps> = ({ className }) => {
	return (
		<section className={clsx(styles.section, className)}>
			<Container>
				<div className={styles.wrapper}>
					<motion.h3
						initial={{ opacity: 0, y: 100 }}
						whileInView={{
							opacity: 1,
							y: 0,
							transition: {
								duration: 0.3,
							},
						}}
						viewport={{ once: true, amount: 0.3 }}
						className={styles.title}
					>
						Что по ценам?
					</motion.h3>

					<div className={styles.content}>
						<div className={styles.cards}>
							{CARDS.map((card, index) => {
								const delay = 0.1
								return (
									<PriceCard
										key={index}
										{...card}
										delayCard={delay + index * 0.1}
										delayType={delay + index * 0.1 + 0.1}
										delayPrice={delay + index * 0.1 + 0.2}
										delayDescription={delay + index * 0.1 + 0.3}
										delayProfit={delay + index * 0.1 + 0.4}
									/>
								)
							})}
						</div>
						<PriceDescriptionList descriptions={PRICE_DESCRIPTIONS} />
					</div>

					<MobilePriceTag className={styles.mobileTag} />

					<FeaturesButton className={styles.button} />

					<PriceTag className={styles.tag} />
					<Arrow className={styles.arrow} />
				</div>
			</Container>
		</section>
	)
}
