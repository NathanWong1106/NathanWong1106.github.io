import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Section } from './components/Section/Section';
import { Background } from './components/Background/Background';
import { Home } from './sections/Home/Home';
import { About } from './sections/About/About';
import { Experience } from './sections/Experience/Experience';
import { Education } from './sections/Education/Education';
import { Projects } from './sections/Projects/Projects';
import { Tech } from './sections/Tech/Tech';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <body className='text-white'>
      <Background/>
      <Sidebar/>
      <Section name='Home' content={Home}/>
      <Section name='About' content={About}/>
      <Section name='Experience' content={Experience}/>
      <Section name='Education' content={Education}/>
      <Section name='Projects' content={Projects}/>
      <Section name='Tech' content={Tech}/>
      <Footer/>
    </body>
  );
}

export default App;