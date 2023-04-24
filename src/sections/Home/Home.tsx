import React from 'react';
import './Home.css';
import { Typography } from '@material-tailwind/react';

interface HomeProps {
    // Component props here
}

export const Home: React.FC<HomeProps> = (props: HomeProps) => {
    return (
        <div className="h-[100vh]">
            <div className='flex flex-col items-center justify-center h-[100%]'>
                <Typography variant="h1">Hey, I'm Nathan</Typography>
                <Typography variant="lead">Fried Noodle Enjoyer, CS Student, Multicellular Organism</Typography>
            </div>
        </div>
    )
}