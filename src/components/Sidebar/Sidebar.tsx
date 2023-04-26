import React, { useState } from 'react';
import './Sidebar.css';
import { ReactComponent as HomeIcon } from '../../resources/home.svg';
import { ReactComponent as MenuIcon } from '../../resources/menu.svg';
import { ReactComponent as AboutIcon } from '../../resources/about.svg';
import { ReactComponent as ExperienceIcon } from '../../resources/experience.svg';
import { ReactComponent as EducationIcon } from '../../resources/education.svg';
import { ReactComponent as ProjectsIcon } from '../../resources/projects.svg';
import { ReactComponent as TechIcon } from '../../resources/tech.svg';
import { ReactComponent as ContactIcon } from '../../resources/contact.svg';
import { SidebarButton } from '../SidebarButton/SidebarButton';
import { Button, IconButton, MobileNav, Navbar, Typography } from '@material-tailwind/react';

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
    },
    {
        name: 'Contact',
        svg: ContactIcon
    }
]

export const Sidebar: React.FC<SidebarProps> = (props: SidebarProps) => {
    const [isSidebar, setIsSidebar] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    React.useEffect(() => {
        window.addEventListener("resize",
            () => setIsSidebar(window.innerWidth >= 960)
        );
    })

    return (
        <>
            {
                isSidebar
                    ?
                    <div className={(isOpen ? 'w-40' : 'w-14') + ' h-screen ml-5 flex justify-items-center items-center fixed transition-all z-50'}>
                        <div className='backdrop-blur-lg backdrop-saturate-150 bg-blue-gray-300 bg-opacity-30 h-fit w-[100%] pt-4 pb-4 pl-2 pr-2 rounded-2xl shadow-2xl drop-shadow-xl'>
                            <div className='mb-8'>
                                <SidebarButton isOpen={isOpen} text='' svg={MenuIcon} onClick={() => { setIsOpen(!isOpen) }} />
                            </div>
                            <div>
                                {
                                    menuList.map((option) => {
                                        return <SidebarButton isOpen={isOpen} text={option.name} svg={option.svg} onClick={() => {
                                            window.location.replace(`/#${option.name}`)
                                        }} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    :
                    // Replace with sticky top navbar on mobile devices
                    <div className={(isOpen ? 'h-screen' : 'h-16') + ' w-full fixed transition-all z-50'}>
                        <div className='backdrop-blur-lg backdrop-saturate-150 bg-blue-gray-300 bg-opacity-30 h-full w-full shadow-2xl drop-shadow-xl overflow-hidden'>
                            <IconButton variant="text"
                                className="mt-3 ml-3 h-12 w-12 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent"
                                ripple={false}
                                onClick={() => {
                                    const open = !isOpen;
                                    setIsOpen(open);

                                    let body = document.getElementsByTagName("BODY")[0];
                                    if (open) {
                                        body.setAttribute("style", "overflow:hidden")
                                    } else {
                                        body.setAttribute("style", "overflow:visible")
                                    }
                                }}>
                                <MenuIcon stroke="white" className='stroke-white h-8 w-8'></MenuIcon>
                            </IconButton>
                            <div className='flex flex-col items-center content-center w-full h-full md:pt-20'>
                                {
                                    menuList.map((option) => {
                                        return (
                                            <button onClick={() => {
                                                window.location.replace(`/#${option.name}`);
                                                setIsOpen(false);
                                            }}>
                                                <Typography className="py-5" variant="h3">
                                                    {option.name}
                                                </Typography>
                                            </button>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}