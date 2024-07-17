// import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './layout/Footer/Footer'
import Header from './layout/Header/Header'
import Hero from './layout/Hero/Hero'
import Profile from './layout/Profile/Profile'
import Projects from './layout/Projects/Projects'
import Skils from './layout/Skils/Skils'
import TopHeader from './layout/TopHeader/TopHeader'



function App() {
	return (
		<>
			<div>
				<div className="container mx-auto px-4 lg:max-w-5xl xl:max-w-6xl mt-8	">
					<TopHeader></TopHeader>
					<Header></Header>
					<Hero></Hero>
					<Skils></Skils>
					<Profile></Profile>
					<Projects></Projects>

					{/* <Outlet></Outlet> */}
				</div>
				<Footer></Footer>
			</div>
		</>
	)
}

export default App
