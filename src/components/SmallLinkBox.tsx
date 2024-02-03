import React from 'react';

function SmallLinkBox({ title, link }: { title: string; link: string }) {
  return (
    <>
      <div className='md:flex hidden justify-between items-center rounded-xl p-4 px-8 bg-[#131320] h-[75px] border-2 border-[#E2E1E4]'>
        <h3 className='text-[#c0bfd8] satoshi-bold text-xl'>{title}</h3>
        <a
          href={link}
          target='_blank'
          className='text-[#E2E1E4] flex items-center justify-center h-full w-[100px] rounded-lg text-xl satoshi-bold custom-button'
        >
          Visitar
        </a>
      </div>
      <div className='flex md:hidden justify-between items-center rounded-xl p-4 px-8 bg-[#131320] h-[75px] border-2 border-[#E2E1E4]'>
        <h3 className='text-[#c0bfd8] satoshi-bold text-lg'>{title}</h3>
        <a
          href={link}
          target='_blank'
          className='text-[#E2E1E4] flex items-center justify-center h-full w-[100px] rounded-lg text-lg p-2 satoshi-bold custom-button'
        >
          Visitar
        </a>
      </div>
    </>
  );
}

export default SmallLinkBox;
