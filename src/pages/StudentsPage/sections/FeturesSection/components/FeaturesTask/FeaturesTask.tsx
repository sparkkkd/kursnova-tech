import type { FC } from 'react'
import clsx from 'clsx'

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
	return (
		<Container className={styles.container}>
			<div className={clsx(styles.wrapper, className)}>
				<div className={styles.left}>
					<div className={styles.title}>Решай</div>
					<div className={styles.text}>
						<div>зада</div>
						<div>
							ния
							<Star className={styles.star} />
						</div>
						<TaskTag className={styles.taskTag} />
					</div>
				</div>
				<div className={styles.center}>
					<img className={styles.img} src={TaskImg} alt='' />
				</div>
				<div className={styles.right}>
					{TASK_DESCRIPTIONS.map((props, index) => (
						<FeaturesDescription key={index} {...props} />
					))}
					<FeaturesButton />
				</div>
			</div>
			<FeaturesButton className={styles.tryButton} />
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
