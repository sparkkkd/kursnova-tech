import type { ICard } from '../../constants'
import { useState, type FC } from 'react'
import { AnimatePresence, motion, type PanInfo } from 'framer-motion'

import { CARDS_DATA } from '../../constants'

import styles from './SwipeCardStacks.module.sass'
import { FlipCard } from '../FlipCard/FlipCard'

interface SwipeCardStacksProps {
	className?: string
}

export const SwipeCardStacks: FC<SwipeCardStacksProps> = ({}) => {
	const [cards, setCards] = useState<ICard[]>(CARDS_DATA)
	const [swipeX, setSwipeX] = useState(0)
	const [dragRotate, setDragRotate] = useState(0)

	const handleSwipe = () => {
		setCards((prev) => {
			const [first, ...rest] = prev
			return [...rest, first]
		})
		setDragRotate(0)
		setSwipeX(0)
	}

	const visibleCards = cards.slice(0, 3)

	return (
		<div className={styles.stackContainer}>
			<AnimatePresence>
				{visibleCards.map((card, index) => {
					const isTop = index === 0
					const zIndex = 3 - index
					const topOffset = index * 25

					return (
						<motion.div
							key={card.frontTitle}
							className={styles.cardWrapper}
							style={{
								zIndex,
								top: `${topOffset}px`,
								rotateZ: isTop ? dragRotate : 0,
							}}
							drag={isTop ? 'x' : false}
							dragConstraints={{ left: 0, right: 0 }}
							onDrag={(_, info) => {
								if (!isTop) return
								setDragRotate(info.offset.x > 0 ? 15 : -15)
							}}
							onDragEnd={(_, info: PanInfo) => {
								if (!isTop) return
								if (Math.abs(info.offset.x) > 100) {
									setSwipeX(info.offset.x)
									handleSwipe()
								} else {
									setDragRotate(0)
								}
							}}
							initial={{ scale: 1 }}
							animate={{ scale: 1 }}
							exit={
								isTop
									? {
											opacity: 0.5,
											scale: 0.5,
											x: swipeX > 0 ? 200 : -200,
											rotate: swipeX > 0 ? 15 : -15,
									  }
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
