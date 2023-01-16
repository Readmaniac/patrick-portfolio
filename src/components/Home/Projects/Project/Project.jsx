import './Project.css'

const Project = ({ image }) => {
  return (
    <div className="project">
      <img
        className="project__img"
        alt={image}
        src={require(`../../../../images/project-images/${image}.jpg`)}
      />
    </div>
  )
}

export default Project
