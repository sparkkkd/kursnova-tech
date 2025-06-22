interface ICard {
	type: 'Год' | 'Месяц'
	price: string
	description?: string
	isProfit?: boolean
}

export const CARDS: ICard[] = [
	{
		type: 'Год',
		price: '24 000 ₽',
		isProfit: true,
		description: '+2,5 месяца в подарок в первый год',
	},
	{
		type: 'Месяц',
		price: '2 500 ₽',
		isProfit: false,
	},
]

export const PRICE_DESCRIPTIONS = [
	'300+ видеороликов',
	'3 000+ заданий',
	'Интерактивный личный кабинет с прогрессом и оценкой знаний',
	'Наставники, которые ответят на вопросы за 5 минут',
	'Выбор предметов',
	'Круглосуточный доступ к платформе ',
	'Челленджи и награды',
]
