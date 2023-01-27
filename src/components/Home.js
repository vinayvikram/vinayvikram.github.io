import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    return (
        <div className='Home'>
            <div className='profile-photo'>
                <img src="/profile.png" alt="vinay vikram" />
            </div>
            <div className='introduction'>
                <h1 className='name'> it's me, <br/> Vinay Vikram</h1>
                <h2 className='profession'>a frontend developer</h2>
            </div>
            <div className='icons'>
                <a href='https://www.linkedin.com/in/vinayvikram/'>
                <FontAwesomeIcon icon={faLinkedin} fontSize={'40px'} />
                </a>
                <a href='https://github.com/vinayvikram'>
                <FontAwesomeIcon icon={faGithub} fontSize={'40px'} />
                </a>
                <a href='https://twitter.com/vinayandvikram'>
                <FontAwesomeIcon icon={faTwitter} fontSize={'40px'} />
                </a>
            </div>
        </div>
    )
}

export default Home;