export const PARENT_SIDEBAR_LINKS: ISidebarLink[] = [
	{ title: 'Как всё устроено', path: '#how' },
	{ title: 'Учителя', path: '#teachers' },
	{ title: 'Цены', path: '#price' },
	{ title: 'Частые вопросы', path: '#faq' },
]

interface ISidebarLink {
	title: string
	path: string
}
