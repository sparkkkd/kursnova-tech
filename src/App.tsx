import { Footer } from './modules/Footer/Footer'
import { Header } from './modules/Header/Header'
import { Sidebar } from './modules/Sidebar/Sidebar'
import { StudentsPage } from './pages/StudentsPage/StudentsPage'
// import styles from './App.module.sass'

function App() {
	return (
		<>
			<Sidebar />

			<main>
				<Header />
				<StudentsPage />
				<Footer />
			</main>
		</>
	)
}

export default App
