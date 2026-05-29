import { useEffect, useState, type JSX } from 'react';
import TagCloud, { type TagCloudOptions } from 'TagCloud';

export default function Work(): JSX.Element {
  useEffect(() => {
    const container = document.querySelector('.tagcontainer');
    const texts = [
      '3D',
      'TagCloud',
      'JavaScript',
      'CSS3',
      'Animation',
      'Interactive',
      'Mouse',
      'Rolling',
      'Sphere',
      '6KB',
      'v2.x'
    ];
    const options: TagCloudOptions = {
      radius: 220,
      maxSpeed: 'fast',
      initSpeed: 'fast',
      keep: true
      // deceleration: 10
    };

    if (container) {
      TagCloud([container], texts, options);
    }
    const idx = document.querySelector('.tagcontainer .tagcloud');
    console.log(idx);
    // document.querySelectorAll('.tagcloud a')[idx].remove();
  }, []);
  return (
    <div>
      <div className='tagwrapper'>
        <div className='tagcontainer'></div>
      </div>
    </div>
  );
}
