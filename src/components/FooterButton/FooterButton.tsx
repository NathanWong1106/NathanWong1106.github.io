import React from 'react';
import './FooterButton.css';
import { Tooltip } from '@material-tailwind/react';

interface FooterButtonProps {
    svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    name: string;
    link: string;
    fill: boolean;
}

export const FooterButton: React.FC<FooterButtonProps> = (props: FooterButtonProps) => {
    return (
        <Tooltip className='backdrop-blur-lg backdrop-saturate-150 bg-blue-gray-300 bg-opacity-30 shadow-lg' content={props.name} placement='right' animate={{
            mount: { scale: 1, x: 10 },
            unmount: { scale: 0, x: 0 },
        }}>
            <div className="transform duration-500 text-white text-center text-xl hover:text-lightGray hover:scale-105">
                <a target="none" href={props.link}>
                    <props.svg className={(props.fill ? "fill-white" : "fill-none") + ' h-10 w-10 stroke-white'} />
                </a>
            </div>
        </Tooltip>
    )
}