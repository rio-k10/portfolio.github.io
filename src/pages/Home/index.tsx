import { type JSX } from 'react';
//@ts-expect-error
import RkGraphic from '../../assets/svg/rk_graphic.svg?react';
export default function Home(): JSX.Element {
  return (
    <div className='home'>
      <div className='home-certs'>
        <div>
          aws <span className='home-certs-aws'>certified</span>
          {' ' + ' '}
          <span className='home-certs-tick'>✓</span>
        </div>
      </div>
      <div className='home-title'>
        <div>
          <p>
            Hi, my name is <span className='home-title-highlight'>R</span>io,
          </p>
          <p>software developer.</p>
        </div>
      </div>
      <div className='home-hero'>
        <div className='home-hero-graphic'>
          <RkGraphic />
        </div>
      </div>
    </div>
  );
}
