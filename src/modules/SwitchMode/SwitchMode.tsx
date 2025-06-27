import { useEffect, useRef, useState, type FC } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import styles from './SwitchMode.module.sass'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { switchMode as switchModeAction } from '../../store/slices/uiSlice'

interface SwitchModeProps {
	className?: string
}

export const SwitchMode: FC<SwitchModeProps> = ({ className }) => {
	const { mode } = useAppSelector((state) => state.uiReducer)
	const dispatch = useAppDispatch()

	const parentRef = useRef<HTMLButtonElement>(null)
	const studentRef = useRef<HTMLButtonElement>(null)
	const containerRef = useRef<HTMLDivElement>(null)

	const [position, setPosition] = useState({ x: 0, width: 0 })

	useEffect(() => {
		const ref = mode === 'parents' ? parentRef : studentRef
		const containerRect = containerRef.current?.getBoundingClientRect()
		const rect = ref.current?.getBoundingClientRect()

		if (rect && containerRect) {
			const offsetX = rect.left - containerRect.left

			setPosition({
				x: offsetX,
				width: rect.width,
			})
		}
	}, [mode])

	const handleChangeMode = (mode: 'parents' | 'students') => {
		dispatch(switchModeAction(mode))

		const ref = mode === 'parents' ? parentRef : studentRef
		const containerRect = containerRef.current?.getBoundingClientRect()
		const rect = ref.current?.getBoundingClientRect()

		if (rect && containerRect) {
			const offsetX = rect.left - containerRect.left

			setPosition({
				x: offsetX,
				width: rect.width,
			})
		}
	}

	useEffect(() => {
		window.scrollTo({ top: 0 })
	}, [mode])

	return (
		<div className={clsx(styles.wrapper, className)} ref={containerRef}>
			<button
				ref={parentRef}
				className={clsx(styles.button, mode === 'parents' && styles.acive)}
				onClick={() => handleChangeMode('parents')}
			>
				Родителям
			</button>
			<button
				ref={studentRef}
				className={clsx(styles.button, mode === 'students' && styles.acive)}
				onClick={() => handleChangeMode('students')}
			>
				Ученикам
			</button>
			<motion.div
				className={styles.indicator}
				initial={{
					x: 0,
					width: parentRef.current?.getBoundingClientRect().width || 'auto',
				}}
				animate={{
					x: position.x,
					width: position.width,
				}}
				transition={{ type: 'spring', stiffness: 300, damping: 30 }}
			></motion.div>
		</div>
	)
}
