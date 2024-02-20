import React from 'react';

function LinkBox({
  title,
  buttonText,
  link,
}: {
  title: string;
  buttonText: string;
  link: string;
}) {
  return (
    <>
      <div
        className={`md:flex hidden flex-col items-center gap-5 h-[150px] rounded-xl p-5 bg-[#131320] border-2 border-[#E2E1E4]`}
      >
        <p className='text-xl satoshi-regular'>{title}</p>
        <a
          href={link}
          target='_blank'
          className='p-2 rounded-lg min-w-[240px] max-w-[240px] flex justify-center px-10 bg-gradient-to-r from-purple-700 to-blue-500 hover:from-purple-900 hover:to-blue-700 transition-all ease-in-out duration-100 cursor-pointer'
        >
          <button className='text-[#E2E1E4] text-center satoshi-bold text-lg'>
            {buttonText}
          </button>
        </a>
      </div>
      <div
        className={`flex md:hidden flex-col items-center py-3 gap-5 h-[150px] rounded-xl p-5 bg-[#131320] border-2 border-[#E2E1E4]`}
      >
        <p className='text-lg text-center satoshi-regular'>{title}</p>
        <a
          href={link}
          target='_blank'
          className='p-2 rounded-lg min-w-[200px] flex items-center justify-center px-10 bg-gradient-to-r from-purple-700 to-blue-500 hover:from-purple-900 hover:to-blue-700 transition-all ease-in-out duration-100 cursor-pointer'
        >
          <button className='text-[#E2E1E4] text-center satoshi-bold text-md cursor-pointer'>
            {buttonText}
          </button>
        </a>
      </div>
    </>
  );
}

export default LinkBox;
