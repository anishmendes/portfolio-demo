import AboutImage from '../../assets/about.jpg'
import CV from '../../assets/cv.pdf'
import {AiOutlineDownload} from 'react-icons/ai'
import './about.css'
const About = () => {
  return (
  
  <section id="about">
    <div className="container about__container">
      <div className="about__left">
        <div className="about__portrait">
          <img src={AboutImage} alt="About Image" />
        </div>
      </div>
      <div className="about__right">
        <h2>About Me</h2>
        <div className="about__cards"></div>
        <p>
          Building projects my clients love have always been my passion.
          Being in the web devlopment industry for over 3 years and serving
          more than 70 happy clients worldwide, I'm motivated to do more!
        </p>
        <p>
          Hi, my name is Anish Mainali from Chitwan,Nepal. I'm a MERN stack developer with a Bachelors in Computer Science. My top priority is to get your business online the right way, giving you industry-strandard design and all the functionality you need to oprate smoothly online.Get in touch todat with the details of your projects let's get started Check out my resume below!
        </p>
       
       <a href={CV} download className='btn primary'>Download CV
       <AiOutlineDownload/></a>
      </div>
    </div>
  </section>
  )
}

export default About
