import clsx from 'clsx'
import type { FC } from 'react'

import styles from './Header.module.sass'
import { SwitchMode } from '../SwitchMode/SwitchMode'
import { Container } from '../../components/Container/Container'
import { BurgerButton } from '../../components/BurgerButton/BurgerButton'

interface HeaderProps {
	className?: string
}

export const Header: FC<HeaderProps> = ({ className }) => {
	return (
		<Container className={styles.wrapper}>
			<header className={clsx(styles.header, className)}>
				<button className={styles.logo}>
					<img src='/logo.svg' alt='logo' />
				</button>
				<SwitchMode className={styles.desktopMode} />
				<div className={styles.actions}>
					<button className={styles.signin}>Войти</button>
					<BurgerButton />
				</div>
			</header>
			<SwitchMode className={styles.mobileMode} />
		</Container>
	)
}
