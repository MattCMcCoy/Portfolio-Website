import React, { Component } from 'react';
import { ReactComponent as Apple } from '../images/apple.svg';
import { ReactComponent as Windows } from '../images/windows.svg';
import { ReactComponent as VSCode } from '../images/visual-studio-code-icon.svg';
import { ReactComponent as Linux } from '../images/linux-icon.svg';
import { ReactComponent as Python } from '../images/python.svg';
import { ReactComponent as Java } from '../images/java.svg';
import { ReactComponent as Eclipse } from '../images/eclipse.svg';
import { ReactComponent as IntelliJ } from '../images/intellij.svg';
import { SvgIcon } from '@mui/material';

function AboutMe() {
  const activities = [
    'Aerial photography and videography',
    'Hiking',
    'Board Games',
    'Kayaking',
  ];

  const languages = [Python, Java];
  const tools = [Apple, VSCode, IntelliJ, Eclipse, Windows, Linux];

  return (
    <div className='ml-10 p-10'>
      <div className='grid md:grid-cols-2 grid-cols-1'>
        <div id='AboutMe' className='mt-[10vh] mb-10 space-y-7'>
          <div>
            <p>
              <span className='text-xl'>Hey my name is </span>
              <span className='text-teal-400 text-xl'>Matt McCoy! </span>
            </p>
            <p className='text-lg'>
              I am a fourth year
              <span className='text-teal-400'> Computer Science </span>
              student with a concentration in
              <span className='text-teal-400'> Human Centered Computing </span>
              at
              <span className='text-teal-400'> Northeastern University. </span>I
              love learning new things and pushing myself to strive for the very
              best with everything I do.
            </p>
          </div>
          <div>
            <p className='text-xl'>
              Apart from coding here are some other things I enjoy:
            </p>
            {activities.map((activity) => (
              <p className='text-lg first-letter:text-sm first-letter:text-white text-teal-400'>
                {`> ${activity}`}
              </p>
            ))}
          </div>
        </div>
        <div className='md:m-10 md:translate-y-[25%]'>
          <img
            src='https://media.giphy.com/media/CuuSHzuc0O166MRfjt/giphy.gif'
            alt=''
          />
        </div>
      </div>
      <div>
        <header id='Languages' className='text-3xl'>
          Languages I Know:
        </header>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 space-y-5 mt-5 grid-cols-2'>
          {languages.map((language) => (
            <SvgIcon
              component={language}
              inheritViewBox
              sx={{ fontSize: 150 }}
            />
          ))}
        </div>
        <header id='Tools' className='text-3xl'>
          Tools I Use:
        </header>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 space-y-5 mt-5 grid-cols-2'>
          {tools.map((tool) => (
            <SvgIcon component={tool} inheritViewBox sx={{ fontSize: 150 }} />
          ))}
        </div>
      </div>
    </div>
  );
}

export class About extends Component {
  static displayName = About.name;

  render() {
    return <AboutMe />;
  }
}
