import React from 'react';
import './About.css';
import { Typography } from '@material-tailwind/react';
import { SectionCard } from '../../components/SectionCard/SectionCard';

interface AboutProps {
    // Component props here
}

export const About: React.FC<AboutProps> = (props: AboutProps) => {
    return (
        <SectionCard title='About' subtitle='What am I supposed to write about myself?'>
            <Typography variant="lead">
                I'm a second year Computer Science Co-op student specializing in Software Engineering at the University of Toronto.
                Currently, I have 12 months of experience in software development roles.
                <br/><br/>
                Most of the time I'll be busy with school - spitting out mathematical vomit into LaTeX until a proof works out.
                Whenever I get the inspiration and time, I like to code various projects for myself and my friends to use. 
                <i> Sometimes</i>, I might even learn a thing or two from said projects. 
                On the unproductive side of things, I also like to binge videos ranging from mundane topics like the inevitable heat death of the universe to an 8 hour video essay about a walking simulator...
                <br/><br/>
                If you're a friend that was bored enough to click on my website... hello there. 
                If you're a potential employer instead, I promise that I can be <i> much</i> more professional than this website will make you believe.
                <br/><br/>
                Currently, I'm searching for co-op opportunities for the Summer 2024 semester. If you think my experience and abilities fit your needs, please feel free to contact me on any of the platforms linked on this site.
            </Typography>
        </SectionCard>
    )
}