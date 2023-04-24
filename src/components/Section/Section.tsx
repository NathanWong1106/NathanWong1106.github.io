import React from 'react';
import './Section.css';
import { Typography } from '@material-tailwind/react';

interface SectionProps {
    name: string;
    content: React.FunctionComponent<any>;
}

export const Section: React.FC<SectionProps> = (props: SectionProps) => {
    return (
        <section id={props.name}>
            <div className="flex flex-col items-center justify-center min-h-[100vh] py-5 pl-5 pr-5 md:ml-20 xl:ml-10 xl:pl-40 xl:pr-40 lg:pl-24 lg:pr-24 md:pl-10 md:pr-10 md:mr-10">
                <props.content/>
            </div>
        </section>
    )
}