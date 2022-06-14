import React from 'react';
import Roles from '../../components/Roles/index';
import Projects from '../../components/Projects/Projects';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

import { expThumbnails, projectThumbnails } from '../../assets/constants';
import './style.css';

class Experience extends React.Component {

    componentWillMount() {
        window.scrollTo({top: 0, behavior: 'instant'});
    }

    render() {
        const roles = {
            'Squarespace': {
                role: 'SWE Intern',
                date: 'Summer 2022',
                link: 'https://www.squarespace.com/',
                image: expThumbnails.sqsp,
                description: 'Frontend project engineering intern on the Activation team.'
            },
            'Codeology': {
                role: 'Web Director',
                date: 'Spring 2022',
                link: 'https://codeology.club',
                image: expThumbnails.cody,
                description: 'Web director for Codeology, a student organization at UC Berkeley. Designed and implemented features, code refactoring, website maintenance.'
            },
            'LMX Labs': {
                role: 'SWE Intern',
                date: 'Summer 2021',
                link: 'https:///www.lmxlabs.com/',
                image: expThumbnails.lmx,
                description: 'Developed several new features for trading platform. Configured server to support multiuser interactivity and auto-logon. Implemented streaming over WebSockets todisplay real-time market data updates.'
            },
            'CS Kickstart': {
                role: 'Curriculum Committee',
                date: 'Summer 2021',
                link: 'https://cs-kickstart.berkeley.edu/',
                image: expThumbnails.csk,
                description: "Curriculum developer for CS Kickstart, a week-long tech exposure program for freshmen women interested in computer science. Created and taught introductory UI/UX design workshop in Figma. Built demo games, app mockups, and websites to guide students in their learning."
            },
            'UC Berkeley FPF': {
                role: 'Student Ambassador, Media Team',
                date: 'Spring 2020',
                link: 'https://fpf.berkeley.edu/',
                image: expThumbnails.fpf,
                description: "Designed content for FPF Instagram and Facebook, and created training presentations on graphic design. Trained in social media techniques and best practices such as ADA compliance, user engagement, and content design."
            }
        }

        const projects = {
            'studywith.me': {
                image: projectThumbnails.study,
                tech: 'HCD case study',
                tools: 'Figma, Behance',
                description: "A human-centered design case study on increasing productivity while learning virtually.",
                link: 'https://www.behance.net/gallery/118174559/studywithme'
            },
            'Find Your Zen': {
                image: projectThumbnails.zen,
                tech: 'mobile dev + design',
                tools: 'Swift, Figma',
                description: "A meditation and wellness iOS app, with mood-tracking, goal-setting, journaling, and breathing exercises.",
            },
            'Thin Ice': {
                image: projectThumbnails.ice,
                tech: 'game development',
                tools: 'Java, JUnit, StdDraw',
                description: "A tile-based world exploration game based off of Club Penguin's 'Thin Ice.' Supports saving, loading, shopping, and teleportation.",
            },
            'Time Capsule': {
                image: projectThumbnails.wdd,
                tech: 'web dev + design',
                tools: 'HTML, CSS, JavaScript, Adobe XD',
                description: "A website reminiscing on life and popular trends during 2020's shelter-in-place.",
                link: 'https://ertsai01.github.io/final'
            }

        }
    
        const getData = () => {
            return (
                <div className='role-container'> 
                {
                    Object.keys(roles).map(orgName => {
                        const org = roles[orgName];
                       return (
                           <Roles orgName={orgName} role={org.role} image={org.image} date={org.date} link={org.link} description={org.description} />
                       )
                    }) 
                }
                </div>
            )    
        }

        const getProjects = () => {
            return (
                <div className='projects-wrapper'>
                    <div className='projects-container'>
                        {
                            Object.keys(projects).map(projectName => {
                                const proj = projects[projectName];
                            return (
                                <Projects projName={projectName} image={proj.image} link={proj.link} tech={proj.tech} description={proj.description} tools={proj.tools} />
                            )
                            }) 
                        }
                    </div>
                </div>
                
            )
        }

        return (
            <>
            <NavBar />
            <div id='experience-content'>
            
                <div className='experience-section'>
                    <h1>experience</h1>
                    {getData()}
                </div>

                <div className='experience-section'>
                    <h1>projects</h1>
                    {getProjects()}
                </div>
            
            </div>
            <Footer />
            </>
        )
    }
}

export default Experience;
