import React, { useState } from 'react';
import './Projects.css';
import { SectionCard } from '../../components/SectionCard/SectionCard';
import { Accordion, AccordionBody, AccordionHeader, Tab, TabPanel, Tabs, TabsBody, TabsHeader, Typography } from '@material-tailwind/react';

interface ProjectsProps {
    // Component props here
}

interface Project {
    name: string;
    content: string;
    tech: string;
    repository: string;
}

//TODO we can store more data here or switch this to an accordion like the old website
const projects: Project[] = [
    {
        name: "Gesture Detector",
        content: "By capturing and training on landmark data from my hand, I was able to make a ML model that could predict a hand gesture captured on a webcam. The model can also be extended to recognize custom hand gestures. Curently there are no further projects planned to incorporate this, but it certainly could be implemented somewhere in the future. More details on the specific implementation and training can be found in the Github link.",
        tech: "Python, Tensorflow, MediaPipe, OpenCV",
        repository: "https://github.com/NathanWong1106/HandDetectionProject"
    },
    {
        name: "NoodleBot",
        content: "This is an old project so the code is definitely suboptimal. This is a discord bot featuring a plethora of features such as a currency system, custom music playlists, persistent db, and consumption of various APIs. Unfortunately, the bot is no longer being hosted after Heroku removed their free product plan on November 28, 2022.",
        tech: "JavaScript, Node.js, MongoDB, Heroku, Various APIs and libraries",
        repository: "https://github.com/NathanWong1106/NoodleBot_V2"
    },
    {
        name: "GameTime",
        content: "A project made for CSCB07 - Software Design. This is an android application that allows customers to sign up for events hosted at different venues and allows admins to manage those events. This project was developed as a team of 4 using the Agile/Scrum methodology with predefined user stories.",
        tech: "Java, Android Studio, Firebase",
        repository: "https://github.com/NathanWong1106/GameTime"
    },
    {
        name: "Portfolio Website",
        content: "A relatively simple static page made using create-react-app and served through GitHub pages. This acts as my personal portfolio and an extension to my regular resume. The original design of this website contained fly-in animations and a moving background that detracted from the accessability/usability of the site. The current redesign seeks to rectify those problems by employing a simple slow-moving background, fewer animations, material-ui, and a modern glass-morphism design.",
        tech: "React, TailwindCSS, Plop, NodeJS",
        repository: "https://github.com/NathanWong1106/NathanWong1106.github.io"
    }
];

export const Projects: React.FC<ProjectsProps> = (props: ProjectsProps) => {
    const [open, setOpen] = useState(1);

    const handleOpen = (value: number) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <SectionCard title='Projects' subtitle='FreeCodeCamp and CS50X has my eternal gratitude'>
            <div className='bg-blue-gray-100/25 shadow-lg drop-shadow-lg pt-4 pb-8 px-4 text-inherit rounded-md'>
                {
                    projects.map((proj, i) => {
                        return (
                            <Accordion className='text-inherit' open={open === i + 1}>
                                <AccordionHeader className='p-4 text-inherit hover:text-inherit hover:bg-blue-gray-200/30 text-2xl' onClick={() => handleOpen(i + 1)}>
                                    <div className='text-left'>
                                        <div>
                                            {proj.name}
                                        </div>
                                        <Typography className="inline" variant="paragraph">{proj.tech}</Typography>
                                    </div>
                                </AccordionHeader>
                                <AccordionBody className='ps-4 text-inherit'>
                                <Typography variant="paragraph">
                                    {proj.content}
                                </Typography>
                                <Typography className="mt-3" variant="paragraph">
                                    <a className="underline" target='none' href={proj.repository}>Check out the repository</a>
                                </Typography>
                                </AccordionBody>
                            </Accordion>
                        )
                    })
                }
            </div>
        </SectionCard>
    )
}