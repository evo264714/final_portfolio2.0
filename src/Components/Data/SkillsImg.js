import html from '../../../src/assets/html.svg'
import css from '../../../src/assets/css.svg'
import javascript from '../../../src/assets/javascript.svg'
import react from '../../../src/assets/react.svg'
import bootstrap from '../../../src/assets/bootstrap.svg'
import mongoDB from '../../../src/assets/mongoDB.svg'
import tailwind from '../../../src/assets/tailwind.svg'
import firebase from '../../../src/assets/firebase.svg'
import git from '../../../src/assets/git.svg'
import figma from '../../../src/assets/figma.svg'


export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'html':
            return html;
        case 'css':
            return css;
        case 'javascript':
            return javascript;
        case 'react':
            return react;
        case 'bootstrap':
            return bootstrap;
        case 'mongodb':
            return mongoDB;
        case 'tailwind':
            return tailwind;
        case 'firebase':
            return firebase;
        case 'git':
            return git;
        case 'figma':
            return figma;
        default:
            break;
    }
}