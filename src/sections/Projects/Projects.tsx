import React from 'react';
import './Projects.css';
import { SectionCard } from '../../components/SectionCard/SectionCard';
import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from '@material-tailwind/react';

interface ProjectsProps {
    // Component props here
}

//TODO we can store more data here or switch this to an accordion like the old website
const data = [
    {
        label: "HTML",
        value: "html",
        desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },
    {
        label: "React",
        value: "react",
        desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
        label: "Vue",
        value: "vue",
        desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
        label: "Angular",
        value: "angular",
        desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
        label: "Svelte",
        value: "svelte",
        desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
];

export const Projects: React.FC<ProjectsProps> = (props: ProjectsProps) => {
    return (
        <SectionCard title='Projects' subtitle='FreeCodeCamp has my eternal gratitude'>
            <Tabs value="html">
                <TabsHeader className="bg-transparent text-white"
                    indicatorProps={{
                        className: "bg-pink-400/80 shadow-none text-white",
                    }}>
                    {data.map(({ label, value }) => (
                        <Tab className='text-inherit' key={value} value={value}>
                            {label}
                        </Tab>
                    ))}
                </TabsHeader>
                <TabsBody>
                    {data.map(({ value, desc }) => (
                        <TabPanel className='text-inherit' key={value} value={value}>
                            {desc}
                        </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>
        </SectionCard>
    )
}