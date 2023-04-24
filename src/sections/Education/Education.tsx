import React from 'react';
import './Education.css';
import { SectionCard } from '../../components/SectionCard/SectionCard';
import { Typography } from '@material-tailwind/react';

interface EducationProps {
    // Component props here
}

export const Education: React.FC<EducationProps> = (props: EducationProps) => {
    return (
        <SectionCard title='Education' subtitle='"There seems to be no sign of intelligent life anywhere" - Buzz Lightyear'>
            <Typography variant="h3">
                University of Toronto
            </Typography>
            <Typography variant="paragraph">
                HBSc. Computer Science Co-op - Specialist in Software Engineering | Fall 2021 - Fall 2025 (expected)
            </Typography>
            <Typography className='my-2' variant="h4">
                Awards
            </Typography>
            <div className='pl-10 list-disc'>
                <ul className='list-disc'>
                    <li>
                        <Typography variant="lead">
                            Scholarship - University of Toronto Scholar ($7500)
                        </Typography>
                    </li>
                    <li>
                        <Typography variant="lead">
                            Dean's List 2021-2022
                        </Typography>
                    </li>
                </ul>
            </div>
        </SectionCard>
    )
}