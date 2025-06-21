import type { FC } from 'react'
import clsx from 'clsx'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'

import teacher1 from '../../../../../../assets/teachers/teacher-1.jpg'
import teacher2 from '../../../../../../assets/teachers/teacher-2.jpg'
import teacher3 from '../../../../../../assets/teachers/teacher-3.jpg'
import teacher4 from '../../../../../../assets/teachers/teacher-4.jpg'
import teacher5 from '../../../../../../assets/teachers/teacher-5.jpg'

import styles from './TeachersSlider.module.sass'
import './splideOverwrite.sass'

import { TeacherCard } from '../TeacherCard/TeacherCard'

interface TeachersSliderProps {
	className?: string
}

const TEACHERS = [
	{
		img: teacher1,
		name: (
			<>
				Арман <br /> Костанян
			</>
		),
		tags: ['Математика', '7 лет опыта'],
		description:
			'Директор ГАОУ «Лицей Иннополис». Победитель регионального этапа и призёр Всероссийского конкурса «Учитель года России» 2023',
		info: [
			{
				count: '83',
				text: 'средний балл ЕГЭ по математике',
			},
			{
				count: '4,9',
				text: 'средний балл ОГЭ по математике',
			},
		],
	},
	{
		img: teacher2,
		name: (
			<>
				Елизавета <br /> Романова
			</>
		),
		tags: ['Химия', '7 лет опыта'],
		description: 'Учитель, автор курсов по подготовке к ОГЭ и ЕГЭ по химии',
		info: [
			{
				count: '86,4',
				text: 'средний балл ЕГЭ у учеников',
			},
			{
				count: '1 000+',
				text: 'учеников подготовлено к ЕГЭ',
			},
		],
	},
	{
		img: teacher3,
		name: (
			<>
				Даниил <br /> Гурнович
			</>
		),
		tags: ['Биология', '11 лет опыта'],
		description: 'Репетитор по биологии. Преподаватель довуза Казанского ГМУ',
		info: [
			{
				count: '98',
				text: 'максимальный балл ЕГЭ по биологии',
			},
			{
				count: '250',
				text: 'учеников подготовлено к ЕГЭ и ОГЭ',
			},
		],
	},
	{
		img: teacher4,
		name: (
			<>
				Динар <br /> Габидуллин
			</>
		),
		subject: 'Управление',
		exp: '11 лет опыта',
		tags: ['Управление', '11 лет опыта'],
		description:
			'Руководитель продакшн в kursnova. Основатель частного детского сада, соавтор школьных концепций. Создатель одной из ведущих инженерно-технических школ РоссииСУНЦ КНИТУ-КАИ',
		info: [
			{
				count: '13',
				text: 'лет в образовании — от учителя до директора',
			},
		],
	},
	{
		img: teacher5,
		name: <>Максим Булатов</>,
		description:
			'Основатель kursnova и офлайн-школы Skillbox в Казани. Сооснователь популярных YouTube-каналов («Секреты», «Космос Просто»)',
		tags: ['Управление', '15+ лет опыта'],
		info: [],
	},
]

export const TeachersSlider: FC<TeachersSliderProps> = ({ className }) => {
	const options = {
		// type: 'loop',
		perPage: 4,
		gap: 0,
		arrows: true,
		pagination: true,
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
			<Splide options={options} hasTrack={false}>
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
		</div>
	)
}
