import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import './Splider.css'

const Splider = () => {
  return (
    <section className="splide-container">
      <Splide
        options={{
          rewind: true,
          gap: '2rem',
          autoplay: true,
          arrows: true,
          hasTrack: true,
          hasAutoplayProgress: true,
          hasSliderWrapper: true,
          hasAutoplayProgress: true,
          hasAutoplayControls: true,
        }}
        aria-label="My Favorite Images"
      >
        <SplideSlide>
          <div className="splide__card ">
            <img
              className="splide__image"
              src={require('../../images/work1.jpg')}
              alt="my work"
            />
            <div>
              <h2>Иван Иванов</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <img
            className="splide__image"
            src={require('../../images/work2.jpg')}
            alt="my work"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            className="splide__image"
            src={require('../../images/work3.jpg')}
            alt="my work"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            className="splide__image"
            src={require('../../images/work1.jpg')}
            alt="my work"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            className="splide__image"
            src={require('../../images/work2.jpg')}
            alt="my work"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            className="splide__image"
            src={require('../../images/work3.jpg')}
            alt="my work"
          />
        </SplideSlide>
      </Splide>
    </section>
  )
}

export default Splider
