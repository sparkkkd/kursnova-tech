import { useEffect, useRef, useState, type FC } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import { Container } from '../../../../../../components/Container/Container'
import { FeaturesDescription } from '../FeaturesDescription/FeaturesDescription'
import { FeaturesButton } from '../FeaturesButton/FeaturesButton'

import Star from '../../../../../../assets/features/star.svg?react'
import TaskTag from '../../../../../../assets/features/task-tag.svg?react'
import TaskImg from '../../../../../../assets/features/task-img.png'
import BackPackIcon from '../../../../../../assets/features/backpack.svg?react'
import DumbbelIcon from '../../../../../../assets/features/dumbbel.svg?react'

import styles from './FeaturesTask.module.sass'

interface FeaturesTaskProps {
	className?: string
}

export const FeaturesTask: FC<FeaturesTaskProps> = ({ className }) => {
	const targetRef = useRef<HTMLDivElement>(null)
	const [targetWidth, setTargetWidth] = useState<number | null>(null)

	useEffect(() => {
		const updateWidth = () => {
			if (targetRef.current) {
				setTargetWidth(targetRef.current.offsetWidth)
			}
		}

		const resizeObserver = new ResizeObserver(updateWidth)
		if (targetRef.current) {
			resizeObserver.observe(targetRef.current)
			updateWidth()
		}

		return () => resizeObserver.disconnect()
	}, [])

	return (
		<Container className={styles.container}>
			<div className={clsx(styles.wrapper, className)}>
				<div className={styles.left}>
					<motion.div
						className={styles.title}
						initial={{ opacity: 0, y: -100 }}
						whileInView={{
							opacity: 1,
							y: 0,
							transition: {
								duration: 0.3,
							},
						}}
						viewport={{ once: true, amount: 0.3 }}
					>
						Решай
					</motion.div>
					<motion.div className={styles.text}>
						<motion.div
							initial={{ opacity: 0, x: -100 }}
							whileInView={{
								opacity: 1,
								x: 0,
								transition: {
									duration: 0.3,
									delay: 0.2,
								},
							}}
							viewport={{ once: true, amount: 0.3 }}
						>
							зада
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 100 }}
							whileInView={{
								opacity: 1,
								y: 0,
								transition: {
									duration: 0.3,
									delay: 0.3,
								},
							}}
							viewport={{ once: true, amount: 0.3 }}
						>
							ния
							<Star className={styles.star} />
						</motion.div>
						<TaskTag className={styles.taskTag} />
					</motion.div>
				</div>
				<motion.div
					ref={targetRef}
					className={styles.center}
					initial={{ opacity: 0, scale: 0 }}
					whileInView={{
						opacity: 1,
						scale: 1,
						transition: {
							duration: 0.5,
							delay: 0.4,
							type: 'spring',
						},
					}}
					viewport={{ once: true, amount: 0.3 }}
				>
					<img className={styles.img} src={TaskImg} alt='' />
				</motion.div>
				<div className={styles.right}>
					{TASK_DESCRIPTIONS.map((props, index) => {
						const baseDelay = 0.1
						return (
							<FeaturesDescription
								key={index}
								{...props}
								delayIcon={baseDelay + index * 0.1}
								delayTitle={baseDelay + index * 0.2}
								delayText={baseDelay + index * 0.3}
							/>
						)
					})}
				</div>
			</div>
			<FeaturesButton
				width={targetWidth}
				delay={0.4}
				className={styles.tryButton}
			/>
		</Container>
	)
}

const TASK_DESCRIPTIONS = [
	{
		icon: <DumbbelIcon />,
		title: '1 000+ заданий',
		description: (
			<>
				уже есть на платформе. <br /> Регулярно пополняем базу
			</>
		),
	},
	{
		icon: <BackPackIcon />,
		title: '3 предмета',
		description: (
			<>
				уже в доступе математика, <br /> химия и биология. Вся школьная
				программа будет в сентябре
			</>
		),
	},
]
