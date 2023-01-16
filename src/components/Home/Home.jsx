import WorkProcess from '../WorkProcess/WorkProcess'
import Projects from './Projects/Projects'
import './Home.css'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <>
      <div className="home">
        <Projects />
      </div>
      <WorkProcess />
    </>
  )
}

export default Home
