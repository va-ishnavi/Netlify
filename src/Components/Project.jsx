import React from 'react';
import './project.css';
import Html from '../asset/html5.jpg';
import Css from '../asset/css.jpg';
import Js from '../asset/Js.png';
import react from '../asset/react.png';
import tailwind from '../asset/tailwindcss.png';


const Project = () => {
    return (
        <section id='projects'>
            <span className='projectTitle'>Projects</span>
            <div className='projectContainer'>
                <div className='projectCard' id='project1'>
                    <div className='projectContent'>
                        <div className='projectskills'>
                            <img src={Html} alt='' className='projectImg1' />
                            <img src={Css} alt='' className='projectImg1' />
                        </div>
                        <h2 className='projectHeading'> Food Hub - HTML/CSS</h2>
                        <div className='projectSubheading'>
                            A responsive website showcasing a variety of food items for delivery. Built using basic HTML and CSS, with images and styles available.
                            This is a responsive website for food delivery service.
                        </div>
                        <div className='projectBtnWrap'>
                            <a className='btn-red' href='https://foodhub-by-vaishnavi.netlify.app'>
                                <span >View Project</span>
                            </a>
                            <a href="https://github.com/va-ishnavi/Project-2-fully">
                                <i title="Visit GitHub Link" class="fa-brands fa-github icon"></i>
                            </a>
                            <a href='https://foodhub-by-vaishnavi.netlify.app'>
                                <i title="Visit Live Link" class="fa-solid fa-link icon"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='projectCard2' id='project2'>
                    <div className='projectContent2'>
                        <div className='projectskills2'>
                            <img src={Html} alt='' className='projectImg2' />
                            <img src={Css} alt='' className='projectImg2' />
                            <img src={Js} alt='' className='projectImg2' />
                        </div>
                        <h2 className='projectHeading2'>
                            SignUp form - HTML/CSS/JS</h2>
                        <div className='projectSubheading2'>
                            A simple signup page validation instructions, built using basic HTML/CSS,JS and also using
                            Regex for the correct information into the fields and an alert message if any missing from the form.
                            It includes validation of email and password fields, as well as a button that displays an alert when clicked.

                        </div>
                        <div className='projectBtnWrap'>
                            <a className='btn-red' href='https://validation-project.netlify.app'>
                                <span >View Project</span>
                            </a>
                            <a href="https://github.com/va-ishnavi/signup-validation">
                                <i title="Visit GitHub Link" class="fa-brands fa-github icon"></i>
                            </a>
                            <a href='https://validation-project.netlify.app'>
                                <i title="Visit Live Link" class="fa-solid fa-link icon"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='projectCard3' id='project3'>
                    <div className='projectContent3'>
                        <div className='projectskills3'>
                            <img src={Html} alt='' className='projectImg3' />
                            <img src={Css} alt='' className='projectImg3' />
                            <img src={Js} alt='' className='projectImg3' />
                            <img src={react} alt='' className='projectImg3' />
                        </div>
                        <h2 className='projectHeading3'> TodoList - React.js</h2>
                        <div className='projectSubheading3'>
                            A simple to-do list application built using React.js. the user can add new tasks to the list, delete tasks from the list,
                            and mark tasks as complete using the following components and their respective functionalities.

                        </div>
                        <div className='projectBtnWrap'>
                            <a className='btn-red' href='https://vaishnavi-todo.netlify.app'>
                                <span >View Project</span>
                            </a>
                            <a href="https://github.com/va-ishnavi/TodoApp">
                                <i title="Visit GitHub Link" class="fa-brands fa-github icon"></i>
                            </a>
                            <a href='https://vaishnavi-todo.netlify.app'>
                                <i title=" Visit Live Link" class="fa-solid fa-link icon"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='projectCard4' id='project4'>
                    <div className='projectContent4'>
                        <div className='projectskills4'>
                            <img src={Html} alt='' className='projectImg4' />
                            <img src={Css} alt='' className='projectImg4' />
                            {/* <img src={Js} alt='' className='projectImg3' /> */}
                            <img src={tailwind} alt='' className='projectImg4' />
                        </div>
                        <h2 className='projectHeading4'> E-comm - TailwindCss</h2>
                        <div className='projectSubheading4'>
                        Creating an e-commerce website using Tailwind CSS involves a few steps to ensure 
                        that site is attractive and interesting, also fully Responsive.
                        </div>
                        <div className='projectBtnWrap'>
                            <a className='btn-red' href=' https://e-comm-tailwind.netlify.app/'>
                                <span >View Project</span>
                            </a>
                            <a href=" https://github.com/va-ishnavi/e-comm">
                                <i title="Visit GitHub Link" class="fa-brands fa-github icon"></i>
                            </a>
                            <a href=' https://e-comm-tailwind.netlify.app/'>
                                <i title="Visit Live Link" class="fa-solid fa-link icon"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Project;
