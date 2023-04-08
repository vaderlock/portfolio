import { memo, useState, useMemo } from 'react';
import Image from 'next/image';
import Link from "next/link";

function Header() {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };
    
    return(
        <nav className='flex items-center flex-wrap border-b border-red-500 p-5'>

            <div className='relative flex items-center justify-between'>
                <Link
                    className="flex items-center gap-4 lg:px-0"
                    href="/"
                >
                    <div className='font-large font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-blue-300'>
                        <h1>Shajid Muntaser&apos;s Portfolio</h1>
                    </div>
                    
                </Link>
            </div>
            <button
            className='inline-flex p-3 bg-red-500 hover:bg-red-400 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
            onClick={handleClick}
            >
                <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                    />
                </svg>
            </button>
            {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
            <div
            className={`${
                active ? '' : 'hidden'
            }   w-full lg:inline-flex lg:flex-grow lg:w-auto md:pt-0 mt-4 p-4 rounded-xl`}
            >
                <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto pt-2'>
                    <Link href="/projects">
                    <h1 className="font-medium text-white hover:text-red-500 transition-in duration-500 ease-out 
                      border-b-2 border-transparent hover:border-red-500 px-3 mr-6 mb-3 md:mb-0">
                            Projects
                        </h1>
                    </Link>
                    <Link href="/resume">
                        <h1 className="font-medium text-white hover:text-red-500 transition-in duration-500 ease-out 
                      border-b-2 border-transparent hover:border-red-500 px-3 mr-6 mb-3 md:mb-0">
                            Resume
                        </h1>
                    </Link>
                    <Link href="/profiles">
                        <h1 className="font-medium text-white hover:text-red-500 transition-in duration-500 ease-out 
                      border-b-2 border-transparent hover:border-red-500 px-3 mr-6 mb-3 md:mb-0">
                            Profiles
                        </h1>
                    </Link>
                    <Link href="/contact">
                        <h1 className="font-medium text-white hover:text-red-500 transition-in duration-500 ease-out 
                      border-b-2 border-transparent hover:border-red-500 px-3 mr-6 mb-3 md:mb-0">
                            Contact
                        </h1>
                    </Link>

                </div>
            </div>

        </nav>
    );
}


export default memo(Header);