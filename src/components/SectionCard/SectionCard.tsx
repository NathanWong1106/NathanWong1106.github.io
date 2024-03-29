import React from 'react';
import './SectionCard.css';
import { Typography } from '@material-tailwind/react';

interface SectionCardProps {
    // Component props here
    title: string;
    subtitle: string;
    children: React.ReactNode;
}

export const SectionCard: React.FC<SectionCardProps> = (props: SectionCardProps) => {
    return (
        <div className="backdrop-blur-lg backdrop-saturate-150 bg-blue-gray-300 bg-opacity-30 rounded-xl shadow-2xl p-8 w-full">
            <Typography variant="h1">{props.title}</Typography>
            <Typography variant="lead">{props.subtitle}</Typography>
            <hr className='mt-5 mb-5'/>
            {
                props.children
            }
        </div>
    )
}