import { useEffect, useState, type FC } from 'react'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { setIsSiderbarOpen, setIsModalOpen } from '../../store/slices/uiSlice'

import { SwitchModeSide } from './SwitchModeSide/SwitchModeSide'

import { PARENT_SIDEBAR_LINKS, STUDENTS_SIDEBAR_LINKS } from './constants'

import ProfitImg from '../../assets/sidebar/bagel.svg'
import CloseIcon from '../../assets/close.svg?react'

import styles from './Sidebar.module.sass'

interface SidebarProps {
	className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
	const dispatch = useAppDispatch()
	const { isSidebarOpen, mode } = useAppSelector((state) => state.uiReducer)

	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		if (isSidebarOpen) setIsMounted(true)
	}, [isSidebarOpen])

	const handleAnimationComplete = () => {
		if (!isSidebarOpen) {
			setIsMounted(false)
		}
	}

	if (!isMounted && !isSidebarOpen) return null

	return (
		isMounted && (
			<AnimatePresence>
				{isSidebarOpen && (
					<>
						<motion.div
							className={styles.overlay}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3, ease: 'easeInOut' }}
							onClick={() => dispatch(setIsSiderbarOpen(false))}
						/>
						<motion.aside
							className={clsx(styles.sidebar, className)}
							initial={{ x: '100%' }}
							animate={{ x: 0 }}
							exit={{ x: '100%' }}
							transition={{ duration: 0.3, ease: 'easeInOut' }}
							onAnimationComplete={handleAnimationComplete}
						>
							<motion.div
								className={styles.close}
								onClick={() => dispatch(setIsSiderbarOpen(false))}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
							>
								<CloseIcon />
							</motion.div>

							<button className={styles.logo}>
								<img src='./logo.svg' alt='logo' />
							</button>

							<div className={styles.actions}>
								<SwitchModeSide className={styles.switch} />
								<button className={styles.enter}>Войти</button>
							</div>

							<ul className={styles.list}>
								{mode === 'parents' &&
									PARENT_SIDEBAR_LINKS.map((link, index) => (
										<li key={index} className={styles.item}>
											<a href={link.path}>{link.title}</a>
										</li>
									))}

								{mode === 'students' &&
									STUDENTS_SIDEBAR_LINKS.map((link, index) => (
										<li key={index} className={styles.item}>
											<a href={link.path}>{link.title}</a>
										</li>
									))}
							</ul>

							<div className={styles.profit}>
								<img className={styles.img} src={ProfitImg} alt='Выгодно' />

								<button
									className={styles.button}
									onClick={() => {
										dispatch(setIsModalOpen(true))
										dispatch(setIsSiderbarOpen(false))
									}}
								>
									Попробовать kursnova за 0 ₽
								</button>

								<button className={clsx(styles.enter, styles.mobileEnter)}>
									Войти
								</button>
							</div>
						</motion.aside>
					</>
				)}
			</AnimatePresence>
		)
	)
}
