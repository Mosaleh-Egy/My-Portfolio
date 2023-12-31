import React from 'react';
import '../footer.css';

function Footer() {
    return (
        <div className="footer" id="footer">
            <div className='img-link'>
                <a href="https://github.com/Mosaleh-Egy" target="_blank"><img src="https://img.icons8.com/color/48/000000/github-2.png" alt="Github" className="icon"/></a>
                <a href="http://linkedin.com/in/mohamed-saleh-a23b6317b" target="_blank"><img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" className="icon"/></a>
                <a href="https://twitter.com" target="_blank"><img src="https://img.icons8.com/color/48/000000/twitter.png" alt="Twitter" className="icon"/></a>
            </div>
            <p className='footer-info'>
                &copy; Mohammad Ahmed  |  <a href="add Mohammad CV Here" className="link">download resume</a>  |  <a href="https://coolors.co/f06543-e8e9eb-e0dfd5-313638-f09d51">color palette</a>  |  made with <img id="react-icon" src="https://img.icons8.com/color/48/000000/react-native.png" alt="React"/>
            </p>

        </div>
    )
}

export default Footer;