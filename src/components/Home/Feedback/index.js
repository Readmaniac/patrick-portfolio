import '@splidejs/splide/css/core'
import Splide from '@splidejs/splide'

const index = () => {
  const splide = new Splide('.splide', {
    type: 'loop',
    drag: 'free',
    snap: true,
    perPage: 2,
    perMove: 1,
    wheel: true,
    focus: 0,
    omitEnd: true,
    autoWidth: true,
    autoplay: true,
    breakpoints: {
      970: {
        perPage: 1,
      },
    },
  })

  splide.mount()
}

export default index
