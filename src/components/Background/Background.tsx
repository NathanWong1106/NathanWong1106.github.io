import React from 'react';
import './Background.css';

interface BackgroundProps {
    // Component props here
}

export const Background: React.FC<BackgroundProps> = (props: BackgroundProps) => {
    return (
        <div className='bg-container bg-gradient-to-b from-indigo-800 to-deep-purple-800 fixed h-screen w-screen'>
            <div className="shape-blob"></div>
            <div className="shape-blob one"></div>
            <div className="shape-blob two"></div>
        </div>
    )
}