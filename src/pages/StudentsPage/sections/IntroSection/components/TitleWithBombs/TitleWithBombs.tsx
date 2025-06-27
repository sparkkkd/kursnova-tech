import { type FC } from 'react'
import { motion } from 'framer-motion'

import styles from './TitleWithBombs.module.sass'
import { useWindowSize } from 'usehooks-ts'
import { ScrollDown } from '../../../../../../components/ScrollDown/ScrollDown'
import clsx from 'clsx'

interface TitleWithBombsProps {
	className?: string
}

export const TitleWithBombs: FC<TitleWithBombsProps> = ({ className }) => {
	const { width } = useWindowSize()

	return (
		<div className={clsx(styles.wrapper, className)}>
			<div className={styles.titleWrapper}>
				<motion.h1
					className={styles.title}
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
					viewport={{ once: true, amount: 0.3 }}
				>
					<div>{width > 530 ? 'Домашки' : 'Домашки и'}</div>
					<div>{width > 530 ? 'и контрольные' : 'контрольные'}</div>
					<div>больше</div>
					<div>не проблема</div>
					<div className={styles.tag}>С kursnova</div>
				</motion.h1>
			</div>

			<video className={styles.video} autoPlay muted preload='auto'>
				<source src='./bombs.webm' />
			</video>
			<ScrollDown className={styles.scroll} />
		</div>
	)
}
