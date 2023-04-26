import React from 'react';
import './Tech.css';
import { SectionCard } from '../../components/SectionCard/SectionCard';
import { Typography } from '@material-tailwind/react';

interface TechProps {
    // Component props here
}

export const Tech: React.FC<TechProps> = (props: TechProps) => {
    return (
        <SectionCard title='Tech' subtitle='The obligatory section where I list all the different ways I can type'>
            <Typography className='inline my-2 mr-2' variant="h5">
                Languages:
            </Typography>
            <Typography  className='inline' variant="paragraph">
                JavaScript, TypeScript, Java, C#, Python, SQL, HTML/CSS
            </Typography>
            <br/>
            <Typography className='inline my-2 mr-2' variant="h5">
                Frameworks:
            </Typography>
            <Typography  className='inline' variant="paragraph">
                React, Angular, Unity
            </Typography>
            <br/>
            <Typography className='inline my-2 mr-2' variant="h5">
                IDE:
            </Typography>
            <Typography  className='inline' variant="paragraph">
                Visual Studio, VSCode, IntelliJ, Eclipse
            </Typography>
            <br/>
            <Typography className='inline my-2 mr-2' variant="h5">
                Other:
            </Typography>
            <Typography  className='inline' variant="paragraph">
                Git/GitHub, Bitbucket/Stash, Jira
            </Typography>
        </SectionCard>
    )
}