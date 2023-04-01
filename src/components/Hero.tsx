/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from 'next/image';

const Hero = () => {
    return(
        // <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        // </div>
        <section className="bg-white">
            <div className="px-4 mx-auto max-w-screen-xl text-center lg:mt-16 lg:py-16 lg:px-12">
                <a href="#" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
                    <span className="text-xs bg-green-500 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span className="text-sm font-medium">Beta is out! See what's new</span> 
                    <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                </a>
                
                <div className="inline-flex flex-col justify-between w-3/4">
                    <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:leading-[1.15] mb-4">The nexus for climbers to improve their skills</h1>
                </div>
                <p className="mb-2 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Build communities, share progress, and learn with social feedback.</p>
                <p className="mb-4 text-sm font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">(iOS only)</p>
                <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <a href="https://testflight.apple.com/join/eGW9W24H" className="inline-flex justify-center items-center py-3 px-10 text-base font-medium text-center text-white rounded-lg bg-green-500 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                        Join now
                        <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Hero;