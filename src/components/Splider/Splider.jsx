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
          <img
            className="splide-image"
            src={require('../../images/work1.jpg')}
            alt="my work"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            className="splide-image"
            src={require('../../images/work2.jpg')}
            alt="my work"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            className="splide-image"
            src={require('../../images/work3.jpg')}
            alt="my work"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            className="splide-image"
            src={require('../../images/work1.jpg')}
            alt="my work"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            className="splide-image"
            src={require('../../images/work2.jpg')}
            alt="my work"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            className="splide-image"
            src={require('../../images/work3.jpg')}
            alt="my work"
          />
        </SplideSlide>
      </Splide>
    </section>
  )
}

export default Splider
