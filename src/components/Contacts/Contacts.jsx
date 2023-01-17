import './Contacts.css'
import telegram from '../../images/telegram.svg'

const Contacts = () => {
  ;<script src="https://yastatic.net/s3/frontend/forms/_/embed.js"></script>
  return (
    <section className="contacts">
      <div className="contacts__container">
        <ul>
          <h2 className="contacts__text">
            Оставить заявку можно, связавшись со мной:
            <li>по номеру: +7 (953) 166-07-89</li>
            <li>
              в телеграм
              <a href="https://t.me/PatrickPL777" target={'_blank'}>
                <img className="contacts__logo" src={telegram} />
              </a>
            </li>
            <li>заполнив заявку в форме:</li>
          </h2>
        </ul>
      </div>
      <iframe
        className="contacts__form"
        src="https://forms.yandex.ru/u/63c634c5c769f13211e41fa2/?iframe=1"
        frameborder="0"
        name="ya-form-63c634c5c769f13211e41fa2"
        width="650"
      ></iframe>
    </section>
  )
}

export default Contacts
