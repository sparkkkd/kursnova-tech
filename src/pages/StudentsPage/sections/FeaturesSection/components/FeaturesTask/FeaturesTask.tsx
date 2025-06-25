import { type FC } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import { Container } from '../../../../../../components/Container/Container'
import { FeaturesDescription } from '../FeaturesDescription/FeaturesDescription'

import TaskTag from '../../../../../../assets/features/task-tag.svg?react'
import Star from '../../../../../../assets/icons/star.svg?react'
import BackPackIcon from '../../../../../../assets/icons/backpack.svg?react'
import DumbbelIcon from '../../../../../../assets/icons/dumbbel.svg?react'

import styles from './FeaturesTask.module.sass'

interface FeaturesTaskProps {
	className?: string
}

export const FeaturesTask: FC<FeaturesTaskProps> = ({ className }) => {
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
					<video
						src='https://s3.timeweb.cloud/4151e8d2-4-6.digital/TaskExtra.mp4'
						className={styles.img}
						autoPlay
						muted
						preload='auto'
					></video>
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
