import { Home } from "../Components/Home/Home";
import NavBar from "../Components/Navbar/NavBar";
import ParticleBg from "../Components/ParticleBg/ParticleBg";
import About from "../Components/About/About";
import ThemeContextProvider, { ThemeContext } from "../Components/Data/ThemeContext";
import Skills from "../Components/Skills/Skills";
import Projects from "../Components/Projects/Projects";
import Footer from "../Components/Footer/Footer";
import { useState } from "react";
import Contact from "../Components/Contact/Contact";

const Main = () => {
    const [renderParticles, setRenderParticles] = useState(true);
    return (
            <ThemeContextProvider>
                {renderParticles && <ParticleBg />}
                <NavBar />
                <Home />
                <About />
                <Skills />
                <Projects />
                <Contact></Contact>
                <Footer/>
            </ThemeContextProvider>
    );
};

export default Main;
