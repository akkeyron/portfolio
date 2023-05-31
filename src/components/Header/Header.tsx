import React from 'react'
import './Header.css'
import IMG from '../../assets/logo512.png'
import { GrMail, GrLinkedin, GrGithub } from 'react-icons/gr'


const Header = () => {
    return (
        <header className='main__header'>
            <div className='main__header-profile'></div>
            <div className='main__header-desc'>
                <h1>Loqman Aripin</h1>
                <p>Software Engineer & Full Stack Developer</p>
            </div>
            <div className='main__header-socials'>
                <a href="mailto:loqmanhakim74@gmail.com"><GrMail /></a>
                <a href="https://www.linkedin.com/in/loqman-al-hakim-aripin/"><GrLinkedin /></a>
                <a href="https://github.com/akkeyron"><GrGithub /></a>
            </div>
        </header>
    )
}

export default Header