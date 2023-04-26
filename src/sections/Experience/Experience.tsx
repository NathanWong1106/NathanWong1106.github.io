import React, { useState } from 'react';
import './Experience.css';
import { SectionCard } from '../../components/SectionCard/SectionCard';
import { Accordion, AccordionBody, AccordionHeader, Typography } from '@material-tailwind/react';

interface ExperienceProps {
    // Component props here
}

export const Experience: React.FC<ExperienceProps> = (props: ExperienceProps) => {
    const [open, setOpen] = useState(0);

    const handleOpen = (val: number) => {
        setOpen(open === val ? 0 : val)
    }

    return (
        <SectionCard title='Experience' subtitle="Has job if and only if has experience">
            <Typography variant="h3">
                Caseware International Inc.
            </Typography>
            <Typography variant="paragraph">
                Software Developer (Cloud Platform) | Sept 2022 - Apr 2023 | Java, C#, SQL, TypeScript, Angular, GWT
            </Typography>
            <div className='pl-10 my-4 list-disc'>
                <ul className='list-disc'>
                    <li>
                        <Typography variant="paragraph">
                            Implemented new features, bug fixes, and unit tests on server (C#, MSSQL Server), client (Angular, Jest, TypeScript, Java, GWT), and client API facade (Java, Spring)
                        </Typography>
                    </li>
                    <li>
                        <Typography variant="paragraph">
                            Utilized feature branching with VCS such as Git, GitHub, and Stash (Bitbucket) and performed code reviews
                        </Typography>
                    </li>
                    <li>
                        <Typography variant="paragraph">
                            Assisted with application deployments, application monitoring using New Relic, and fielded questions from international clients during on-call rotation
                        </Typography>
                    </li>

                    <li>
                        <Typography variant="paragraph">
                            Collaborated with UX, Product, and developers to design technical solutions for new product requirements
                        </Typography>
                    </li>
                    <li>
                        <Typography variant="paragraph">
                            Used Jira to create/track tickets and participated in Agile events such as daily standup, planning, refinement, and retrospectives
                        </Typography>
                    </li>
                    <li>
                        <Typography variant="paragraph">
                            Concisely presented my work and fielded questions from internal and external teams during bi-weekly demos
                        </Typography>
                    </li>
                </ul>
            </div>
            <Typography variant="h3">
                Genexis Design Inc.
            </Typography>
            <Typography variant="paragraph">
                Software Developer | Oct 2020 - Jan 2021 | C#, Unity Engine
            </Typography>
            <div className='pl-10 mt-4 list-disc'>
                <ul className='list-disc'>
                    <li>
                        <Typography variant="paragraph">
                            Worked closely with others to design an Android CAD model viewing application
                        </Typography>
                    </li>
                    <li>
                        <Typography variant="paragraph">
                            Implemented various features such as (de)serialization, UI updates, markup, and deep-linking support
                        </Typography>
                    </li>
                </ul>
            </div>
        </SectionCard>
    )
}