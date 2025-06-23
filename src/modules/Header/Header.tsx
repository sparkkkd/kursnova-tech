import clsx from 'clsx'
import type { FC } from 'react'
import { useAppDispatch } from '../../store/hooks'
import { openSidebar } from '../../store/slices/uiSlice'

import { SwitchMode } from '../SwitchMode/SwitchMode'
import { Container } from '../../components/Container/Container'
import { BurgerButton } from '../../components/BurgerButton/BurgerButton'

import styles from './Header.module.sass'

interface HeaderProps {
	className?: string
}

export const Header: FC<HeaderProps> = ({ className }) => {
	const dispatch = useAppDispatch()

	return (
		<Container className={styles.wrapper}>
			<header className={clsx(styles.header, className)}>
				<button className={styles.logo}>
					<img src='./logo.svg' alt='logo' />
				</button>
				<SwitchMode className={styles.desktopMode} />
				<div className={styles.actions}>
					<button className={styles.signin}>Войти</button>
					<BurgerButton onClick={() => dispatch(openSidebar())} />
				</div>
			</header>
			<SwitchMode className={styles.mobileMode} />
		</Container>
	)
}
