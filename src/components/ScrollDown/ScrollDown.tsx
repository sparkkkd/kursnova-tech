import clsx from 'clsx'
import type { FC } from 'react'

import styles from './ScrollDown.module.sass'

interface ScrollDownProps {
	className?: string
}

export const ScrollDown: FC<ScrollDownProps> = ({ className }) => {
	return (
		<div className={clsx(styles.wrapper, className)}>
			<button className={styles.button}>
				<img src='./scroll.svg' alt='scroll-down' />
				Скролль вниз
			</button>
		</div>
	)
}
