import React from "react"
import styles from './Footer.css'
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
        <div className="footer" style={styles}>
            <div className="footer-icons">
                <SocialIcon url="mailto:kuhbandersam@gmail.com" bgColor="white"> </SocialIcon>
                <SocialIcon url="https://github.com/samkuhbander" bgColor="white"></SocialIcon>
                <SocialIcon url="https://www.linkedin.com/in/samuel-kuhbander/" bgColor="white"></SocialIcon>
                <SocialIcon url="https://twitter.com/KuhbanderSam" bgColor="white"></SocialIcon>
            </div>
        </div>
    )
}

export default Footer
