import React from 'react';
import Avatar from '../assets/images/avatar.png';
import '../App.css';

const About = () => {
    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>

                            <div className='card-body'>
                                <div className="row abstract-back ">
                                    <img className='avatar' src={Avatar} />
                                </div>
                            </div>

                            <div className='card-body'>
                                <div className="row">
                                    <p className='p-about'>
                                        As a Software Engineer, I have an impressive professional background marked by my extensive experience in developing and implementing production-ready web and mobile applications. My skill set encompasses a comprehensive understanding of Computer Science fundamentals, alongside deep technical expertise in various technologies, such as JavaScript, ReactJS, Redux, VueJS, Vuex, NodeJS, MongoDB, CSS, HTML, and more.

                                        Throughout my career, I have consistently delivered exceptional results by leveraging my strong foundation in software development principles. My adaptability to emerging technologies, coupled with my problem-solving abilities, has allowed me to overcome complex challenges and contribute effectively to development teams.

                                        With a passion for creating robust and user-centric applications, I thrive in dynamic and collaborative environments where I can apply my knowledge and expertise to drive innovation and deliver high-quality solutions. I continuously seek opportunities to expand my skill set and stay updated with the latest industry trends.

                                        I take great pride in my ability to translate client requirements into scalable and efficient applications, ensuring that they meet both functional and aesthetic standards. From conceptualization to deployment, I am dedicated to delivering top-notch projects that exceed expectations.

                                        Moreover, my strong communication skills enable me to effectively collaborate with cross-functional teams, ensuring seamless coordination and successful project outcomes. I am committed to maintaining clear and proactive communication channels, enabling efficient project management and timely delivery.

                                    
                                    </p>
                                </div>
                            </div>

                            <div className="modal-footer" />

                            <div className='card-body'>
                                <h2 className='edu'>Education</h2>
                                <br />

                                <div className='grid-container-profile'>
                                    <div className='grid-item'>
                                        <div className='title-uni'>Bootcamp From Edx</div>
                                        <div className='title-concentration'>Full Stack Web Development</div>
                                    </div>

                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default About;
