import { useEffect, useRef, useState, type FC } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import HeartSvg from '../../../../../../assets/icons/heart.svg?react'
import PizzaSvg from '../../../../../../assets/icons/pizza.svg?react'
import HandsSvg from '../../../../../../assets/icons/hands.svg?react'
import PhoneSvg from '../../../../../../assets/icons/phone.svg?react'

import ExplodeVideo from '../../../../../../assets/explode.mp4'

import styles from './ExplodeWithHeader.module.sass'

interface ExplodeWithHeaderProps {
	className?: string
}

export const ExplodeWithHeader: FC<ExplodeWithHeaderProps> = ({
	className,
}) => {
	const videoRef = useRef<HTMLVideoElement>(null)
	const containerRef = useRef<HTMLDivElement>(null)
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.isIntersecting)
			},
			{
				threshold: 0.1,
			}
		)

		if (containerRef.current) {
			observer.observe(containerRef.current)
		}

		return () => {
			if (containerRef.current) {
				observer.unobserve(containerRef.current)
			}
		}
	}, [])

	useEffect(() => {
		if (videoRef.current) {
			if (isVisible) {
				videoRef.current.play().catch(() => {})
			} else {
				videoRef.current.pause()
			}
		}
	}, [isVisible])

	return (
		<div className={clsx(styles.wrapper, className)} ref={containerRef}>
			<motion.video
				ref={videoRef}
				src={ExplodeVideo}
				className={styles.explode}
				muted
				preload='auto'
				playsInline
				autoPlay
				initial={{
					opacity: 1,
				}}
				whileInView={{
					opacity: 0,
					transition: {
						delay: 0.5,
						duration: 1,
					},
				}}
				viewport={{ once: true, amount: 0.5 }}
			></motion.video>
			<h3 className={styles.title}>
				<div>
					Учись в любимом
					<HeartSvg />
				</div>
				<div>
					<PizzaSvg />
					формате
					<HandsSvg />
					нужен
				</div>
				<div>
					только
					<PhoneSvg />
					смартфон
				</div>
			</h3>
		</div>
	)
}
