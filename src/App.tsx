import { useAppSelector } from './store/hooks'
import { ReactLenis } from 'lenis/react'

import { Header } from './modules/Header/Header'
import { Footer } from './modules/Footer/Footer'
import { Sidebar } from './modules/Sidebar/Sidebar'
import { StudentsPage } from './pages/StudentsPage/StudentsPage'
import { ParentsPage } from './pages/ParentsPage/ParentsPage'

function App() {
	const { mode } = useAppSelector((state) => state.uiReducer)

	return (
		<>
			<ReactLenis root />
			<Sidebar />

			<main>
				<Header />
				{mode === 'students' && <StudentsPage />}
				{mode === 'parents' && <ParentsPage />}

				<Footer />
			</main>
		</>
	)
}

export default App
