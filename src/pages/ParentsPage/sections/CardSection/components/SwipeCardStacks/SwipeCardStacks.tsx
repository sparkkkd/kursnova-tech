import type { ICard } from '../../constants'
import { useState, type FC } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { CARDS_DATA } from '../../constants'

import styles from './SwipeCardStacks.module.sass'
import { FlipCard } from '../FlipCard/FlipCard'

interface SwipeCardStacksProps {
	className?: string
}

export const SwipeCardStacks: FC<SwipeCardStacksProps> = ({}) => {
	const [cards, setCards] = useState<ICard[]>(CARDS_DATA)
	const [swipeX, setSwipeX] = useState(0)

	const handleSwipe = () => {
		setCards((prev) => {
			const [first, ...rest] = prev
			return [...rest, first]
		})
	}

	const visibleCards = cards.slice(0, 3)

	return (
		<div className={styles.stackContainer}>
			<AnimatePresence>
				{visibleCards.map((card, index) => {
					const isTop = index === 0
					const zIndex = 3 - index
					const topOffset = index * 16

					return (
						<motion.div
							key={card.frontTitle}
							className={styles.cardWrapper}
							style={{ zIndex, top: `-${topOffset}px` }}
							drag={isTop ? 'x' : false}
							dragConstraints={{ left: 0, right: 0 }}
							onDragEnd={(_, info) => {
								if (Math.abs(info.offset.x) > 100 && isTop) {
									setSwipeX(info.offset.x)
									handleSwipe()
								}
							}}
							initial={{ scale: 1 }}
							animate={{ scale: 1 }}
							exit={
								isTop
									? { opacity: 0, scale: 0.5, x: swipeX > 0 ? 200 : -200 }
									: { opacity: 0 }
							}
							transition={{ duration: 0.3 }}
						>
							<FlipCard {...card} rotate={0} className={styles.card} />
						</motion.div>
					)
				})}
			</AnimatePresence>
		</div>
	)
}
