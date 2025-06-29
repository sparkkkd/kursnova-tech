import type { FC } from 'react'
import clsx from 'clsx'
import { useWindowSize } from 'usehooks-ts'

import { Container } from '../../../../../../components/Container/Container'

import HeartImg from '../../../../../../assets/common/icons/heart.svg'
import PizzaImg from '../../../../../../assets/common/icons/pizza.svg'
import PhoneImg from '../../../../../../assets/common/icons/phone.svg'

import styles from './FeaturesText.module.sass'

interface FeaturesTextProps {
	className?: string
}

export const FeaturesText: FC<FeaturesTextProps> = ({ className }) => {
	const { width } = useWindowSize()

	if (width > 815) return null

	return (
		<section className={clsx(styles.section, className)}>
			<Container>
				<h3 className={styles.content}>
					<div className={styles.text}>
						<div>
							Учись
							<img
								src={HeartImg}
								className={clsx(styles.icon, styles.heart)}
								alt=''
							/>
						</div>
						<div>в любимом</div>
						<div>формате</div>
						<div>
							<img
								src={PizzaImg}
								className={clsx(styles.icon, styles.pizza)}
								alt=''
							/>
							нужен
						</div>
						<div>
							только
							<img
								src={PhoneImg}
								className={clsx(styles.icon, styles.phone)}
								alt=''
							/>
						</div>
						<div>смартфон</div>
					</div>
				</h3>
			</Container>
		</section>
	)
}
