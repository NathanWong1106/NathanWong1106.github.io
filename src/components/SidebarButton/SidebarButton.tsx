import React, { useState } from 'react';
import './SidebarButton.css';
import { Tooltip } from '@material-tailwind/react';

interface SidebarButtonProps {
    isOpen: boolean;
    onClick?: Function;
    text: string;
    svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export const SidebarButton: React.FC<SidebarButtonProps> = (props: SidebarButtonProps) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <Tooltip className={(!props.isOpen && props.text ? 'visible' : 'invisible') + ' backdrop-blur-lg bg-blue-gray-300/25'} content={props.text} placement='right' animate={{
            mount: { scale: 1, x: 10 },
            unmount: { scale: 0, x: 0 },
          }}>
            <div className='w-full mb-4 h-10' onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}>
                <button className={(isActive ? 'bg-blue-gray-100/25 shadow-lg drop-shadow-lg translate-x-2 rounded-l-xl' : '') + ' h-10 w-10 min-w-full mb-4 flex justify-left justify-between items-center transition-all'}
                    onClick={
                        () => {
                            if (props.onClick) {
                                props.onClick()
                            }
                        }
                    }
                >
                    <div className="ml-1">
                        <props.svg className='h-8 w-8 stroke-white'/> 
                    </div>
                    <div className={(props.isOpen ? 'w-[70%] ml-3' : 'w-0') + ' text-left text-lg font-medium overflow-hidden'}>
                        {props.text}
                    </div>
                </button>
            </div>
        </Tooltip>
    )
}