import React from 'react';
import './Footer.css';
import { Typography } from '@material-tailwind/react';
import { FooterButton } from '../FooterButton/FooterButton';
import { ReactComponent as GitHub } from '../../resources/github.svg';
import { ReactComponent as Email } from '../../resources/email.svg';
import { ReactComponent as LinkedIn} from '../../resources/linkedin.svg';

interface FooterProps {
    // Component props here
}

interface ContactInfo {
    name: string;
    link: string;
    svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    fill: boolean;
}

const contactList: ContactInfo[] = [
    {
        name: "GitHub",
        link: "https://github.com/NathanWong1106",
        svg: GitHub,
        fill: true
    },
    {
        name: "Email",
        link: "mailto:wongnathan1106@gmail.com",
        svg: Email,
        fill: false
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/nathanwong1106/",
        svg: LinkedIn,
        fill: true
    }
]

export const Footer: React.FC<FooterProps> = (props: FooterProps) => {
    return (
        <section id="Contact" className="Footer">
            <footer>
                <div className='backdrop-blur-lg backdrop-saturate-150 bg-blue-gray-300 bg-opacity-30 pb-10 p-5 text-center'>
                    <Typography variant="h2">Contact</Typography>
                    <div className='flex justify-evenly mt-7'>
                        {
                            contactList.map(contact => {
                                return (
                                    <FooterButton link={contact.link} name={contact.name} svg={contact.svg} fill={contact.fill}/>
                                )
                            })
                        }
                    </div>
                </div>
            </footer>
        </section>
    )
}