import type { FC } from 'react'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'

import { EDUCATION_VIDEOS, STAGES_LABEL } from '../../constants'

import SharkImg from '../../../../../../assets/parents/education/education-shark-mobile.png'

import styles from './MobileScrollEducation.module.sass'

interface MobileScrollEducationProps {
	activeStage: number
	classname?: string
}

export const MobileScrollEducation: FC<MobileScrollEducationProps> = ({
	activeStage,
	classname,
}) => {
	return (
		<div className={clsx(styles.content, classname)}>
			<div className={styles.top}>
				{/* Shark */}
				<AnimatePresence mode='wait'>
					{activeStage === 1 && (
						<motion.img
							initial={{
								opacity: 0,
								x: '100%',
								y: '50%',
							}}
							animate={{
								opacity: 1,
								x: '0%',
								y: '50%',
							}}
							exit={{
								opacity: 0,
								x: '100%',
								y: '50%',
							}}
							transition={{ duration: 0.3, delay: 0.3 }}
							className={styles.shark}
							src={SharkImg}
							alt=''
						/>
					)}
				</AnimatePresence>

				<motion.div className={styles.videoWrapper}>
					<AnimatePresence mode='wait'>
						{activeStage === 0 && (
							<motion.video
								src={EDUCATION_VIDEOS[activeStage]}
								autoPlay
								muted
								preload='auto'
								key={activeStage}
								initial={{ opacity: 0, x: '100%' }}
								animate={{ opacity: 1, x: '0%' }}
								exit={{ opacity: 0, x: '-100%' }}
								transition={{ duration: 0.3 }}
							/>
						)}

						{activeStage === 1 && (
							<>
								<motion.video
									src={EDUCATION_VIDEOS[activeStage]}
									autoPlay
									muted
									preload='auto'
									key={activeStage}
									initial={{ opacity: 0, x: '100%' }}
									animate={{ opacity: 1, x: '0%' }}
									exit={{ opacity: 0, x: '-100%' }}
									transition={{ duration: 0.3 }}
								/>
							</>
						)}

						{activeStage === 2 && (
							<motion.video
								src={EDUCATION_VIDEOS[activeStage]}
								autoPlay
								muted
								preload='auto'
								key={activeStage}
								initial={{ opacity: 0, x: '100%' }}
								animate={{ opacity: 1, x: '0%' }}
								exit={{ opacity: 0, x: '-100%' }}
								transition={{ duration: 0.3 }}
							/>
						)}
					</AnimatePresence>
				</motion.div>
			</div>
			<div className={styles.bottom}>
				<div className={styles.progressbarWrapper}>
					<motion.div
						className={styles.progressbar}
						initial={{ width: '33%' }}
						animate={{
							width:
								activeStage === 0 ? '33%' : activeStage === 1 ? '66%' : '100%',
						}}
					/>
					<motion.div className={styles.progressbar_shadow} />
				</div>

				<AnimatePresence mode='wait'>
					{activeStage === 0 && (
						<motion.div
							key={STAGES_LABEL[activeStage].title}
							className={styles.textContent}
							initial={{ opacity: 0, x: '100%' }}
							animate={{ opacity: 1, x: '0%' }}
							exit={{ opacity: 0, x: '-100%' }}
							transition={{ duration: 0.3 }}
						>
							<div className={styles.title}>Обучающие видео</div>
							<div className={styles.text}>
								{STAGES_LABEL[activeStage].text}
							</div>
							<button className={styles.button}>Подробнее</button>
						</motion.div>
					)}
					{activeStage === 1 && (
						<motion.div
							key={STAGES_LABEL[activeStage].title}
							className={styles.textContent}
							initial={{ opacity: 0, x: '100%' }}
							animate={{ opacity: 1, x: '0%' }}
							exit={{ opacity: 0, x: '-100%' }}
							transition={{ duration: 0.3 }}
						>
							<div className={styles.title}>
								Закрепляем знания <br /> на тренажёрах
							</div>
							<div className={styles.text}>
								{STAGES_LABEL[activeStage].text}
							</div>
							<button className={styles.button}>Подробнее</button>
						</motion.div>
					)}
					{activeStage === 2 && (
						<motion.div
							key={STAGES_LABEL[activeStage].title}
							className={styles.textContent}
							initial={{ opacity: 0, x: '100%' }}
							animate={{ opacity: 1, x: '0%' }}
							exit={{ opacity: 0, x: '-100%' }}
							transition={{ duration: 0.3 }}
						>
							<div className={styles.title}>Отслеживаем прогресс</div>
							<div className={styles.text}>
								{STAGES_LABEL[activeStage].text}
							</div>
							<button className={styles.button}>Подробнее</button>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	)
}
