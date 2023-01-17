import './Video.css'

const Video = ({ link, text }) => {
  return (
    <div className="videocontainer">
      <iframe
        className="videocontainer__element"
        width="400"
        height="205"
        src={link}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      />
      <p className="videocontainer__element">{text}</p>
    </div>
  )
}

export default Video
