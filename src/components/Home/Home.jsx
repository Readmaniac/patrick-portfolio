import Splider from '../Splider/Splider'
import WorkProcess from '../WorkProcess/WorkProcess'
import './Home.css'

const Home = () => {
  return (
    <>
      <div className="home">
        <img
          className="home__photo"
          src={require('../../images/Pencilphoto.jpg')}
        />
        <div className="home__textcontainer">
          <p className="home__text">Здравствуйте друзья!</p>
          <p className="home__text">
            фысвйцйййй йца йааааааааааай йцк упрекрпвыаыы йацйе н5уекыафц
            фысвйцйййй йца йааааааааааай йцк упрекрпвыаыы йацйе н5уекыафц
            фысвйцйййй йца йааааааааааай йцк упрекрпвыаыы йацйе н5уекыафц
            фысвйцйййй йца йааааааааааай йцк упрекрпвыаыы йацйе н5уекыафц
          </p>
        </div>
        <Splider />
      </div>
      <WorkProcess />
    </>
  )
}

export default Home
