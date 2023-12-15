import './About.css';
import { ThemeContext } from '../Data/ThemeContext';
import { aboutData } from '../Data/About';
import { useContext } from 'react';
import ParticleBg from '../ParticleBg/ParticleBg';
function About() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="about" id="about" style={{backgroundColor: theme.secondary}}>
            <div className="line-styling">
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-line" style={{backgroundColor: theme.primary}}></div>
            </div>
            <div className="about-body">
                <div className="about-description">
                    <h2 style={{color: theme.primary}}>{aboutData.title}</h2>
                    <p style={{color:theme.tertiary80}}>{aboutData.description1}<br/><br/>{aboutData.description2}</p>
                </div>
                <div className="about-img">
                    <img 
                        src={aboutData.image === 1 ? theme.aboutimg1 : theme.aboutimg2}  
                    />
                </div>
            </div>
            
            <h1 className='text-center fw-bold my-5' style={{ color: theme.primary }}>Skills</h1>
        </div>

    )
}

export default About