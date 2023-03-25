import Link from "next/link";
import Image from "next/image"; 

function footer() {
   
    return(
        <footer className="footer pb-8 pt-10 text-center lg:text-left border-t border-red-500">
            <div className='flex items-center justify-center  lg:justify-between'>
                <div className="mr-12 lg:block">
                    
                    <p>Built by Vaderlock</p>
                    {/* <p>v0.0.0</p> */}

                </div> 

                <div className="flex justify-center">
                    <a href='https://github.com/vaderlock'
                    target="_blank"
                    rel="noopener noreferrer"
                    className='mr-6'>
                    
                    <Image className="hover:scale-125 duration-500" src='/github.png' alt='github icon' width='50' height='50'/>

                    </a>
                    <a href='https://www.linkedin.com/in/shajid-muntaser-663473220/'
                    target="_blank"
                    rel="noopener noreferrer">

                    <Image className="hover:scale-125 duration-500" src='/linkedin.png' alt='linkedin icon' width='50' height='50'/>

                    </a>
                </div>
            </div>
            
      </footer>
    );
}


export default footer;