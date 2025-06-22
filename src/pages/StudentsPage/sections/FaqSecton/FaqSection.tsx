import { useRef, useState, type FC } from 'react'
import clsx from 'clsx'
import { useScroll, useTransform, motion } from 'framer-motion'

import { Container } from '../../../../components/Container/Container'
import { FaqItem } from './components/FaqItem/FaqItem'

import { FAQ_DATA } from './constants'

import styles from './FaqSection.module.sass'
interface FaqSectionProps {
	className?: string
}

export const FaqSection: FC<FaqSectionProps> = ({ className }) => {
	const [openIndex, setOpenIndex] = useState<number | null>(null)

	const sectionRef = useRef<HTMLDivElement>(null)
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ['start end', 'end end'],
	})
	const y = useTransform(scrollYProgress, [0, 1.5], ['0%', '80%'])

	return (
		<section className={clsx(styles.section, className)}>
			<Container>
				<div className={styles.wrapper} ref={sectionRef}>
					<motion.h3 style={{ top: y }} className={styles.title}>
						Частые вопросы
					</motion.h3>

					<motion.h3
						className={styles.mobileTitle}
						initial={{
							opacity: 0,
							y: 100,
						}}
						whileInView={{
							opacity: 1,
							y: 0,
							transition: {
								duration: 0.3,
							},
						}}
						viewport={{ once: true, amount: 0.3 }}
					>
						Частые вопросы
					</motion.h3>

					<ul className={styles.list}>
						{FAQ_DATA.map((item, index) => {
							const delay = 0.1
							return (
								<FaqItem
									key={index}
									{...item}
									isOpen={openIndex === index}
									onToggle={() =>
										setOpenIndex(openIndex === index ? null : index)
									}
									delay={delay + index * 0.1 + 0.1}
								/>
							)
						})}
					</ul>
				</div>
			</Container>
		</section>
	)
}
