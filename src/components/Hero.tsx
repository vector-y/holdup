/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from 'next/image';

const Hero = () => {
    return(
        // <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        // </div>
        <section className="bg-white">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:mt-16 lg:py-16 lg:px-12">
                <a href="#" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
                    <span className="text-xs bg-green-500 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span className="text-sm font-medium">Beta is out! See what's new</span> 
                    <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                </a>
                
                <div className="inline-flex flex-col justify-between w-3/4">
                    {/* <div className="flex justify-center">
                        <Image  
                        src="/logo.png"
                        alt="Picture of the author"
                        width={64}
                        height={64}/>
                    </div> */}
                    <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:leading-[1.15] mb-4">The nexus for climbers to improve their skills</h1>
                </div>
                <p className="mb-2 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Build communities, share progress, and learn with social feedback.</p>
                <p className="mb-4 text-sm font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">(iOS only)</p>
                <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <a href="https://testflight.apple.com/join/eGW9W24H" className="inline-flex justify-center items-center py-3 px-10 text-base font-medium text-center text-white rounded-lg bg-green-500 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                        Join now
                        <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                    {/* <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                        Watch video
                    </a>   */}
                </div>
            </div>
        </section>
    );
}

export default Hero;