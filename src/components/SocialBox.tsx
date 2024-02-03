import React from 'react';
import Image from 'next/image';

const socials = [
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/elrincondeldev/',
    image: '/Instagram.svg',
  },
  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/joseramonmontes/',
    image: '/Linkedin.svg',
  },
  {
    name: 'TikTok',
    link: 'https://www.tiktok.com/@elrincondeldev',
    image: '/TikTok.svg',
  },
  {
    name: 'YouTube',
    link: 'https://www.youtube.com/channel/UCWn_0MmgojB711LFX-jaCDQ',
    image: '/YouTube.svg',
  },
  {
    name: 'Github',
    link: 'https://github.com/jmontes33',
    image: '/Github.svg',
  },
];

function SocialBox() {
  return (
    <>
      <div className='md:flex hidden justify-center gap-5'>
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.link}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-center bg-[#131320] p-10 rounded-xl border-2 border-[#E2E1E4] hover:bg-[#1c1c2f] transition-all ease-in duration-100'
          >
            <Image
              src={social.image}
              alt={social.name}
              width={50}
              height={50}
              priority
            />
          </a>
        ))}
      </div>
      <div className='flex md:hidden justify-center gap-3'>
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.link}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-center bg-[#131320] p-4 rounded-xl border-2 border-[#E2E1E4] hover:bg-[#1c1c2f] transition-all ease-in duration-100'
          >
            <Image
              src={social.image}
              alt={social.name}
              width={40}
              height={40}
              priority
            />
          </a>
        ))}
      </div>
    </>
  );
}

export default SocialBox;
