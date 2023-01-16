import './Step.css'

const Step = ({ image }) => {
  return (
    <div
      className="step"
      style={{
        backgroundImage: `url(../../../images/workprocess/${image}.jpg)`,
      }}
    >
      {/* <img
        className="workprocess"
        alt="1"
        src={require(`../../../images/workprocess/${image}.jpg`)}
      /> */}
    </div>
  )
}
{
  /* <img
        className="workprocess"
        alt="1"
        src={require(`../../images/Patrick-live.jpg`)}
      /> */
}
export default Step
