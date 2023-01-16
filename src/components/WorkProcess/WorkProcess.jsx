import './Workprocess.css'
import { workStepImages } from '../../utils/constants/constants'

const WorkProcess = () => {
  return (
    <section className="workprocess">
      <h1>Работа и сроки</h1>
      <div className="workprocess__container">
        <div>
          <p className="workprocess__text">
            Первый созвон. Знакомство с заказчиком и проектом.{' '}
          </p>
          <p className="workprocess__text">1-2 часа</p>
        </div>
        <img
          className="workprocess__picture"
          alt="1"
          src={require(`../../images/workprocess/start.jpg`)}
        />
        <p className="workprocess__text">
          Работа над проектом (2-3 дня). Второй созвон: Оценка результата со
          стороны заказчика. Внесение правок.(1-2 дня)
        </p>
        <img
          className="workprocess__picture"
          alt="1"
          src={require(`../../images/workprocess/work.jpg`)}
        />
        <p className="workprocess__text">Третий созвон. Сдача проекта.</p>
        <img
          className="workprocess__picture"
          alt="1"
          src={require(`../../images/workprocess/finish.jpg`)}
        />
      </div>
    </section>
  )
}

export default WorkProcess
