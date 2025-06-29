import { useAppDispatch, useAppSelector } from './store/hooks'
import { setIsModalOpen, setIsCanAddSection } from './store/slices/uiSlice'
import { ReactLenis, useLenis } from 'lenis/react'

import { Header } from './modules/Header/Header'
import { Footer } from './modules/Footer/Footer'
import { Sidebar } from './modules/Sidebar/Sidebar'
import { StudentsPage } from './pages/StudentsPage/StudentsPage'
import { ParentsPage } from './pages/ParentsPage/ParentsPage'

import { TryButton } from './modules/TryButton/TryButton'
import { Modal } from './modules/Modal/Modal'
import { TryForm } from './modules/TryForm/TryForm'
import { SuccessModal } from './modules/SuccessModal/SuccessModal'
import { useEffect } from 'react'

function App() {
	const { mode, isModalSuccess } = useAppSelector((state) => state.uiReducer)
	const dispatch = useAppDispatch()

	const lenis = useLenis()

	useEffect(() => {
		if (lenis) lenis?.scrollTo(0, { duration: 0, immediate: true })
		dispatch(setIsCanAddSection(false))
	}, [mode])

	return (
		<>
			<ReactLenis root />
			<Sidebar />

			<TryButton onClick={() => dispatch(setIsModalOpen(true))} />
			<Modal>
				{!isModalSuccess && <TryForm />}
				{isModalSuccess && <SuccessModal />}
			</Modal>

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
