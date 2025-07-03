import { v4 } from 'uuid'

import EyesIcon from '../../../../assets/common/icons/eyes.svg'
import MeteoriteIcon from '../../../../assets/common/icons/meteorite.svg'

import FireIcon from '../../../../assets/parents/education/fire.png'
import CoinIcon from '../../../../assets/parents/education/coin.png'
import EnergyIcon from '../../../../assets/parents/education/energy.png'
import ElipseIcon from '../../../../assets/parents/education/elipse.png'

import BookImg from '../../../../assets/parents/education/book.svg'
import PercentageImg from '../../../../assets/parents/education/percentage.svg'
import WarningImg from '../../../../assets/parents/education/warning.svg'

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

export const PROGRESS_SIDE_MODAL = [
	{
		id: v4(),
		icon: BookImg,
		title: 'Отображение изучаемых предметов и прогресса по ним',
	},
	{
		id: v4(),
		icon: PercentageImg,
		title: 'Детальная статистика поможет оценить качество обучения',
	},
	{
		id: v4(),
		icon: WarningImg,
		title:
			'Подсказки по слабым местам ребёнка, рекомендации по улучшению знаний',
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
	'https://storage.yandexcloud.net/test-backet-kursnova/TaskExtra.mp4',
	'https://storage.yandexcloud.net/test-backet-kursnova/TaskExtra.mp4',
	'https://storage.yandexcloud.net/test-backet-kursnova/TaskExtra.mp4',
]

export const STAGES_LABEL_LENGTH = STAGES_LABEL.length
