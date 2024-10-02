import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Xarrow from "react-xarrows";


import logo from '../styles/TaskFlow.png'; 
import usersImg from "../styles/Users1.png";
import facebookImg from "../styles/icons8-facebook-48.png"
import instagramImg from "../styles/icons8-instagram-48.png"
import twitterImg from "../styles/icons8-twitter-48.png"
import linkedInImg from "../styles/icons8-linkedin-48.png"

const About = () => {
    const problemRef = useRef(null)
    const solutionRef = useRef(null)
    const topRef = useRef(null)
    const handleBackToTop = () => {
        topRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' })
    }
    return ( 
        <div className="about">
            <div ref={topRef} className="quote">
                <blockquote cite="https://graciousquotes.com/atomic-habits-quotes/">
                    <span class="line">“Time magnifies the margin between success and failure.</span><br />
                    <span class="line">It will multiply whatever you feed it.</span><br />
                    <span class="line">Good habits make time your ally.</span><br />
                    <span class="line">Bad habits make time your enemy.”</span><br />
                    <a target="_blank" href="https://graciousquotes.com/atomic-habits-quotes/" rel="noreferrer">
                        <i>- James Clear</i>, Atomic Habits -
                    </a>
                </blockquote>
            </div>
            <div className={`story`}>
                <p>
                TASKFLOW was born out of a need to help individuals manage their weekly tasks and time more effectively. <br />
                Many people struggle with organizing their responsibilities, leading to stress and decreased productivity.<br />
                TASKFLOW aims to provide a comprehensive solution to these challenges.
                </p>
                <img src={logo} alt="" />
            </div>
            <div className={`users`}>
                <img src={usersImg} alt="" />
                <p>
                Our users are individuals who seek to enhance their productivity and maintain a balanced lifestyle. <br />
                Whether you’re a student, a professional, or someone managing a busy household, <br /> 
                TASKFLOW is designed to cater to your needs.
                </p>
            </div>
            <div className={`purpose`}>
                <div className='problem' ref={problemRef}>
                    <p>
                        The primary issue many face is the lack of a structured approach to task management. <br />
                        Without proper tools, it becomes difficult to prioritize tasks, <br />
                        track progress, and maintain a healthy work-life balance. <br /> 
                        This often results in missed deadlines and increased stress.
                    </p>
                    {/* <img src={problemImg} alt="" /> */}
                </div>
                <br />
                <div className='solution' ref={solutionRef}>
                    {/* <img src={solutionImg} alt="" /> */}
                    <p>
                        TASKFLOW offers a robust platform where users can create, categorize, and manage their tasks efficiently. <br />
                        With features like task classification, performance tracking, and visual statistics, <br /> 
                        users can gain insights into their productivity patterns and make necessary adjustments.
                    </p>
                </div>
            </div>
            <Xarrow
                start={problemRef} 
                end={solutionRef} 
                color='#694F8E'
                startAnchor={'bottom'} 
                endAnchor={'top'}
                path='smooth'
                animateDrawing={true}
                zIndex={99}
            />
            <div className="future">
                <p>
                    As TASKFLOW continues to evolve, <br />
                    we plan to introduce more advanced features such as AI-driven task recommendations, <br />
                    integration with other productivity tools, and enhanced collaboration options for teams. <br />  
                    Our goal is to keep improving and providing the best task management experience.
                </p>
            </div>
            <footer>
                <p className='back-to-top' onClick={handleBackToTop}>Back to top  ↑ </p>
                <div className="wrapper">
                    <div className="social-media-links">
                        <img src={facebookImg} alt="facebook" /> 
                        <img src={instagramImg} alt="instagram" />
                        <img src={twitterImg} alt="X (twitter)" />
                        <img src={linkedInImg} alt="LinkedIn" />
                    </div>
                    <div className="contact-info">
                        <p>Email:</p>
                        <code>mohammed.barakat.mywork@gmail.com</code>
                        <p>Whatsapp Number:</p>
                        <code>+963 999 888 777</code>
                    </div>
                    <div className="login-signup">
                        <p>start your <span>Self Improvment</span> journey</p>
                        <Link to={'/login'}>Login</Link>
                        <Link to={"/signup"}>Signup</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default About;
