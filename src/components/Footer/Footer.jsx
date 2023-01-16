import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <h2 className="footer__copyright">
        &copy; {new Date().getFullYear()} Patrick Live
      </h2>
    </div>
  )
}

export default Footer
