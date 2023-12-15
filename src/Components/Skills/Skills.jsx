import { useContext } from 'react';
import Marquee from "react-fast-marquee";

import './Skills.css'
import ThemeContextProvider, { ThemeContext } from '../Data/ThemeContext';
import { skillsData } from '../Data/Skills';
import { skillsImage } from '../Data/SkillsImg';
import ParticleBg from '../ParticleBg/ParticleBg';

const Skills = () => {

    const { theme } = useContext(ThemeContext);
    console.log(theme);

    const skillBoxStyle = {
        backgroundColor: theme.type,
        boxShadow: `0px 0px 30px ${theme.primary600}`
    }

    return (
        <div className="skills" >
            <div className="skillsContainer">
                
                <div className="skill--scroll">
                
                    <Marquee
                        gradient={false}
                        speed={80}
                        pauseOnHover={true}
                        pauseOnClick={true}
                        delay={0}
                        play={true}
                        direction="left"
                    >
                        {skillsData.map((skill, id) => (
                            <div
                                className="skill--box" key={id} style={skillBoxStyle}>
                                <img src={skillsImage(skill)} alt={skill} />

                                <h3 style={{ color: theme.tertiary }}>
                                    {skill}
                                </h3>

                            </div>

                        ))}
                    </Marquee>
                </div>
            </div>
        </div>

    )
}

export default Skills