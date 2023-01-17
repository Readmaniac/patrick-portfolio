import './Profile.css'

const Profile = () => {
  return (
    <div className={'header__profile'}>
      <div className={'header__profile'}>
        <img
          className={'header__avatar'}
          src={require(`../../../images/LogoColor.jpg`)}
          alt="designer"
        />
        <div className={'header__hello'}>
          <h2 className={'header__title'}>Дизайнер. Монтажёр. Художник.</h2>
          <p className={'header__text'}>Меня зовут Александр Ваулин</p>
          <p className={'header__text'}>
            Я воплощу ваши мечты в реальность, помогу с интерьером, смонтирую
            видео, что бы они запомнились и приносили радость, после каждого
            просмотра.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Profile
