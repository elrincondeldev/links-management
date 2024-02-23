function Footer() {
  return (
    <>
      <div className='md:flex hidden justify-center w-[700px] text-center mb-5 py-2 text-white'>
        <p>
          Designed by{' '}
          <a
            className='font-bold'
            href='https://www.instagram.com/afor_digital/'
            target='_blank'
          >
            Aforcita{' '}
          </a>
          and developed by{' '}
          <a
            className='font-bold'
            href='https://www.instagram.com/elrincondeldev/'
            target='_blank'
          >
            El Rincón Del Dev
          </a>
        </p>
      </div>
      <div className='flex md:hidden footer text-center mt-auto mb-5 py-2 text-white'>
        <p>
          Designed by{' '}
          <a
            className='font-bold'
            href='https://www.instagram.com/afor_digital/'
            target='_blank'
          >
            Aforcita{' '}
          </a>
          and developed by{' '}
          <a
            className='font-bold'
            href='https://www.instagram.com/elrincondeldev/'
            target='_blank'
          >
            El Rincón Del Dev
          </a>
        </p>
      </div>
    </>
  );
}

export default Footer;
