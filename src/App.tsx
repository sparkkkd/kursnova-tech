import { Footer } from './modules/Footer/Footer'
import { ReactLenis } from 'lenis/react'

import { Header } from './modules/Header/Header'
import { Sidebar } from './modules/Sidebar/Sidebar'
import { StudentsPage } from './pages/StudentsPage/StudentsPage'
import { useAppSelector } from './store/hooks'
import { ParentsPage } from './pages/ParentsPage/ParentsPage'
// import styles from './App.module.sass'

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
