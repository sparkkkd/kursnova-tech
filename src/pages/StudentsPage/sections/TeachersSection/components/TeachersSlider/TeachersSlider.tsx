import { useRef, type FC } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'

import { TeacherCard } from '../TeacherCard/TeacherCard'

import { TEACHERS } from './constant'

import styles from './TeachersSlider.module.sass'
import './splideOverwrite.sass'
import { useWindowSize } from 'usehooks-ts'

interface TeachersSliderProps {
	className?: string
}

export const TeachersSlider: FC<TeachersSliderProps> = ({ className }) => {
	const splideRef = useRef<any>(null)

	const { width } = useWindowSize()

	const options = {
		// type: 'loop',
		perPage: 4,
		gap: 0,
		arrows: false,
		pagination: width < 815 ? true : false,
		breakpoints: {
			1068: {
				perPage: 3,
			},
			815: {
				perPage: 1,
				isNavigation: false,
			},
		},
	}

	return (
		<div className={clsx(styles.wrapper, className)}>
			<Splide options={options} hasTrack={false} ref={splideRef}>
				<div className='splide__track'>
					<ul className='splide__list'>
						{TEACHERS.map((props, index) => (
							<SplideSlide key={index} className={styles.slide}>
								<TeacherCard {...props} className={styles.card} />
							</SplideSlide>
						))}
					</ul>
				</div>
			</Splide>
			{width > 815 && (
				<div className={styles.controls}>
					<motion.button
						className={styles.prev}
						onClick={() => splideRef.current.go('<')}
					>
						Назад
					</motion.button>
					<motion.button
						className={styles.next}
						onClick={() => splideRef.current.go('>')}
					>
						Вперед
					</motion.button>
				</div>
			)}
		</div>
	)
}
