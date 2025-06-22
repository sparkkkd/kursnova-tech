import type { FC } from 'react'
import { useTransform, type MotionValue } from 'framer-motion'
import { easeInOut, motion } from 'framer-motion'

import AppHelp1 from '../../../../../../assets/support/app-help-1.svg?react'
import AppHelp2 from '../../../../../../assets/support/app-help-2.svg?react'
import AppHelp3 from '../../../../../../assets/support/app-help-3.svg?react'
import AppHelp4 from '../../../../../../assets/support/app-help-4.svg?react'

import PsyHelp1 from '../../../../../../assets/support/psy-help-1.svg?react'
import PsyHelp2 from '../../../../../../assets/support/psy-help-2.svg?react'
import PsyHelp3 from '../../../../../../assets/support/psy-help-3.svg?react'
import PsyHelp4 from '../../../../../../assets/support/psy-help-4.svg?react'

import LessonsHelp1 from '../../../../../../assets/support/lessons-help-1.svg?react'
import LessonsHelp2 from '../../../../../../assets/support/lessons-help-2.svg?react'
import LessonsHelp3 from '../../../../../../assets/support/lessons-help-3.svg?react'
import LessonsHelp4 from '../../../../../../assets/support/lessons-help-4.svg?react'

import styles from './SupportContent.module.sass'
import clsx from 'clsx'
import { ButtonList } from '../ButtonList/ButtonList'
import { IconsGroup } from '../IconsGroup/IconsGroup'

const ICONS = [
	[AppHelp1, AppHelp2, AppHelp3, AppHelp4],
	[PsyHelp1, PsyHelp2, PsyHelp3, PsyHelp4],
	[LessonsHelp1, LessonsHelp2, LessonsHelp3, LessonsHelp4],
]

const BUTTONS = [
	{ label: 'Работа приложения', icons: ICONS[0] },
	{ label: 'Психологическая помощь', icons: ICONS[1] },
	{ label: 'Помощь с уроками', icons: ICONS[2] },
]

interface SupportContentProps {
	className?: string
	scrollYProgress: MotionValue<number>
}

export const SupportContent: FC<SupportContentProps> = ({
	className,
	scrollYProgress,
}) => {
	const step = 1 / BUTTONS.length

	const buttonTransforms = BUTTONS.map((_, i) => {
		const baseYOffset = i * 8

		return {
			opacity: useTransform(
				scrollYProgress,
				[i * step, (i + 0.3) * step],
				[0, 1],
				{ ease: easeInOut }
			),
			translateY: useTransform(
				scrollYProgress,
				[i * step, (i + 0.3) * step],
				[300, baseYOffset],
				{ ease: easeInOut }
			),
		}
	})

	const iconTransforms = BUTTONS.map((_, i) =>
		Array.from({ length: 4 }).map(() => {
			if (i === BUTTONS.length - 1) {
				// Последняя кнопка: иконки появляются с i*step и исчезают при скролле вверх
				return {
					opacity: useTransform(
						scrollYProgress,
						[(i - 0.1) * step, i * step],
						[0, 1],
						{ clamp: false }
					),
					translateY: useTransform(
						scrollYProgress,
						[i * step, (i + 0.15) * step],
						[30, 0]
					),
				}
			}

			const endStep = (i + 1) * step

			return {
				opacity: useTransform(
					scrollYProgress,
					[i * step, (i + 0.15) * step, endStep],
					[0, 1, 0],
					{ ease: easeInOut }
				),
				translateY: useTransform(
					scrollYProgress,
					[i * step, (i + 0.15) * step, endStep],
					[30, 0, -30],
					{ ease: easeInOut }
				),
			}
		})
	)

	return (
		<div className={clsx(styles.content, className)}>
			<motion.p
				className={styles.caption}
				initial={{ opacity: 0, y: -100 }}
				whileInView={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
				viewport={{ once: true, amount: 0.3 }}
			>
				Кроме того
			</motion.p>
			<motion.h3
				className={styles.title}
				initial={{ opacity: 0, y: 100 }}
				whileInView={{
					opacity: 1,
					y: 0,
					transition: { duration: 0.3, delay: 0.2 },
				}}
				viewport={{ once: true, amount: 0.3 }}
			>
				В нашу поддержку можно
				<br /> обратиться с любым вопросом
			</motion.h3>

			<ButtonList buttons={BUTTONS} transforms={buttonTransforms} />
			<IconsGroup groups={ICONS} transforms={iconTransforms} />
		</div>
	)
}
