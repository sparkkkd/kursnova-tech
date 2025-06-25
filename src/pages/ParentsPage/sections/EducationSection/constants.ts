import { v4 } from 'uuid'

import EyesIcon from '../../../../assets/icons/eyes.svg'
import MeteoriteIcon from '../../../../assets/icons/meteorite.svg'

import FireIcon from '../../../../assets/parents/education/fire.png'
import CoinIcon from '../../../../assets/parents/education/coin.png'
import EnergyIcon from '../../../../assets/parents/education/energy.png'
import ElipseIcon from '../../../../assets/parents/education/elipse.png'

export const VIDEO_SIDE = [
	{
		id: v4(),
		icon: EyesIcon,
		title: '25–40 минут',
		text: 'среднее время концентрации ребенка',
	},
	{
		id: v4(),
		icon: MeteoriteIcon,
		title: '5–10 минут',
		text: 'длится один ролик kursnova. Ещё и на задачки остаётся!',
	},
]

export const PROGRESS_SIDE = [
	{
		id: v4(),
		icon: FireIcon,
		title: 'Система «дни-в-ряд» мотивирует заниматься регулярно',
	},
	{
		id: v4(),
		icon: CoinIcon,
		title:
			'Коины — для обмена на дни заморозки, стикеры и другие мелкие радости',
	},
	{
		id: v4(),
		icon: EnergyIcon,
		title:
			'Каждое видео или задание — это квест. А за квест положены очки опыта',
	},
	{
		id: v4(),
		icon: ElipseIcon,
		title: 'Кольца опыта покажут, сколько и что пройдено',
	},
]

export const STAGES_LABEL = [
	{
		id: v4(),
		title: 'Обучающие видео',
		text: 'Наши ролики составлены так, чтобы за короткое время дать максимум пользы. Ориентируемся на школьную программу 5–11 классов: все уроки снимаем с учётом актуальных учебных материалов',
	},
	{
		id: v4(),
		title: 'Закрепляем знания на тренажёрах',
		text: 'После видео ребёнок может решить задания двух уровней сложности — базового и повышенного',
	},
	{
		id: v4(),
		title: 'Отслеживаем прогресс',
		text: 'Даже скучную тему можно превратить в приключение. Вовлекающие игровые механики проведут ребенка к знаниям легко и интересно',
	},
]

export const EDUCATION_VIDEOS = [
	'https://s3.timeweb.cloud/4151e8d2-4-6.digital/TaskExtra.mp4',
	'https://s3.timeweb.cloud/4151e8d2-4-6.digital/TaskExtra.mp4',
	'https://s3.timeweb.cloud/4151e8d2-4-6.digital/TaskExtra.mp4',
]

export const STAGES_LABEL_LENGTH = STAGES_LABEL.length
