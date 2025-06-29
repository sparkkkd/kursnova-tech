import type { FC } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import { PriceCard } from './components/PriceCard/PriceCard'
import { Container } from '../../../../components/Container/Container'
import { PriceDescriptionList } from './components/PriceDescriptionList/PriceDescriptionList'

import { CARDS, PRICE_DESCRIPTIONS } from './constants'

import PriceTag from '../../../../assets/price/price-tag.png'
import MobilePriceTag from '../../../../assets/price/mobile-price-tag.png'
import Arrow from '../../../../assets/price/arrow.svg?react'

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

					<motion.div
						initial={{ opacity: 0, y: 100 }}
						whileInView={{
							opacity: 1,
							y: 0,
							transition: { duration: 0.3, delay: 0.1 },
						}}
						viewport={{ once: true, amount: 0.3 }}
						className={styles.content}
					>
						<div className={styles.cards}>
							{CARDS.map((card, index) => (
								<PriceCard key={index} {...card} />
							))}
						</div>
						<PriceDescriptionList
							className={styles.list}
							descriptions={PRICE_DESCRIPTIONS}
						/>
					</motion.div>

					<img className={styles.mobileTag} src={MobilePriceTag} alt='' />

					<img className={styles.tag} src={PriceTag} alt='' />
					<Arrow className={styles.arrow} />

					<button className={styles.button}>Попробовать за 0 ₽</button>
				</div>
			</Container>
		</section>
	)
}
