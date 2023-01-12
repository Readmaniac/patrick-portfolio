import Video from './Video/Video'
import './Blog.css'

//тут будет раздел с видео Сани, как он работает
const Blog = () => {
  return (
    <>
      <div className="container">
        <Video
          link="https://www.youtube.com/embed/-Fqkck3_BLk"
          text="КАК ПОМЕСТИТЬ 3D ТЕКСТ НА ФОТОГРАФИЮ В CINEMA 4D И ADOBE PHOTOSHOP!
Сегодня мы научимся добавлять 3D текст на фотографию в Cinema 4D и редактировать его в Adobe Photoshop"
        />
        <Video
          link="https://www.youtube.com/embed/owFDROKN6G8"
          text="Иногда меня спрашивают те, кто не знает меня, откуда я беру свои превью.
          Ответ прост, я их делаю сам! И вот как это происходит)))"
        />
        <Video
          link="https://www.youtube.com/embed/GSRSJQ-PV0g"
          text="Будем создавать самую простую анимацию текста в cinema 4d (R20), 
        не бойтесь играть со значениями, цветом, светом, меняйте их, 
        добавляйте, смотрите что получится, это только средство для исполнения, 
        самое главное ваша фантазия!"
        />
        <Video
          link="https://www.youtube.com/embed/Ekyh1u55rYU"
          text="Cinema 4d - работы, переделки"
        />
      </div>
    </>
  )
}

export default Blog
