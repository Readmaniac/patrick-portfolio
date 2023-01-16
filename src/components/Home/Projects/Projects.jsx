import './Projects.css'
import Project from './Project/Project'
import { images } from '../../../utils/constants/constants'

const Projects = () => {
  return (
    <section className="projects">
      {images.map((image) => (
        <Project key={image} image={image} />
      ))}
    </section>
  )
}

export default Projects
