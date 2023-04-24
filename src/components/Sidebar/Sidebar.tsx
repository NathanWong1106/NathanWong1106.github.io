import React, { useState } from 'react';
import './Sidebar.css';
import { ReactComponent as HomeIcon } from '../../resources/home.svg';
import { ReactComponent as MenuIcon } from '../../resources/menu.svg';
import { ReactComponent as AboutIcon } from '../../resources/about.svg';
import { ReactComponent as ExperienceIcon } from '../../resources/experience.svg';
import { ReactComponent as EducationIcon } from '../../resources/education.svg';
import { ReactComponent as ProjectsIcon } from '../../resources/projects.svg';
import { ReactComponent as TechIcon } from '../../resources/tech.svg';
import { SidebarButton } from '../SidebarButton/SidebarButton';

interface SidebarProps {
    // Component props here
}

interface MenuOption {
    name: string;
    svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const menuList: MenuOption[] = [
    {
        name: 'Home',
        svg: HomeIcon
    },
    {
        name: 'About',
        svg: AboutIcon
    },
    {
        name: 'Experience',
        svg: ExperienceIcon
    },
    {
        name: 'Education',
        svg: EducationIcon
    },
    {
        name: 'Projects',
        svg: ProjectsIcon
    },
    {
        name: 'Tech',
        svg: TechIcon
    }
]

export const Sidebar: React.FC<SidebarProps> = (props: SidebarProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={(isOpen ? 'w-40' : 'w-14') + ' h-screen ml-5 flex items-center justify-items-center fixed transition-all'}>
            <div className='backdrop-blur-lg bg-blue-gray-100/5 h-[90%] w-[100%] pt-4 pb-4 pl-2 pr-2 rounded-2xl shadow-2xl drop-shadow-xl'>
                <div className='mb-8'>
                    <SidebarButton isOpen={isOpen} text='' svg={MenuIcon} onClick={() => { setIsOpen(!isOpen) }} />
                </div>
                <div>
                    {
                        menuList.map((option) => {
                            return <SidebarButton isOpen={isOpen} text={option.name} svg={option.svg} onClick={() => {
                                window.location.replace(`/#${option.name}`)
                            }}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}