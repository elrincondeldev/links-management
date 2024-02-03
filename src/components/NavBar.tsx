import React from 'react';
import Image from 'next/image';

function NavBar() {
  return (
    <>
      <section className='md:flex hidden items-center gap-5'>
        <Image
          src='/profile-image.jpeg'
          alt='logo'
          width='200'
          height='200'
          className='rounded-[200px]'
        />
        <div className='flex flex-col gap-3'>
          <h1 className='satoshi-black text-5xl'>Aquí Jose 👋🏻</h1>
          <p className='satoshi-regular text-xl'>
            Desarrollador Fullstack y creador de contenido.
          </p>
        </div>
      </section>
      <section className='flex md:hidden justify-center items-center gap-5'>
        <Image
          src='/profile-image.jpeg'
          alt='logo'
          width='100'
          height='100'
          className='rounded-[200px]'
        />
        <div className='flex flex-col items-center gap-3'>
          <h1 className='satoshi-black text-3xl'>Aquí Jose 👋🏻</h1>
          <p className='satoshi-regular text-center text-lg'>
            Desarrollador Fullstack y creador de contenido.
          </p>
        </div>
      </section>
    </>
  );
}

export default NavBar;
