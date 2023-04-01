import React from 'react';
import Link from 'next/link'
import { motion } from "framer-motion";
import {
  FaMoon,
  FaSun,
} from 'react-icons/fa';
import cn from 'classnames';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import useDelayedRender from 'use-delayed-render';
import toast, { Toaster, useToasterStore } from 'react-hot-toast';
import Modal from "./Modal";

function NavItem({ href, text }: {href: string; text: string}) {
  const router = useRouter();
  const isActive = router.asPath === href;
  return (
    <NextLink
      href={href}
      className={cn(
        isActive
          ? 'font-semibold text-gray-800 dark:text-gray-200'
          : 'font-normal text-gray-600 dark:text-gray-400',
        'hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all'
      )}
    >
      <span className="capsize">{text}</span>
    </NextLink>
  );
}

const ExternalLink = ({ href, children } : {href:any, children:any}) => (
  <a
    className="text-gray-500 hover:text-black dark:hover:text-white transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const {theme, setTheme} = useTheme();
    const { toasts } = useToasterStore();
    const TOAST_LIMIT = 1;
    const contactMe = () => toast((t) => (
      <span className='text-center dark:bg-gray-900 dark:text-white bg-white'>
        👋 Say hi at <b>vt.victortran@gmail.com</b><br/> or DM me on <a href="https://twitter.com/vectori"><u>Twitter</u></a>
      </span>
    ));

    useEffect(() => {
      toasts
        .filter((t) => t.visible) // Only consider visible toasts
        .filter((_, i) => i >= TOAST_LIMIT) // Is toast index over limit
        .forEach((t) => toast.dismiss(t.id)); // Dismiss – Use toast.remove(t.id) removal without animation
    }, [toasts]);
    return (
      <>
        {/* This example requires Tailwind CSS v2.0+ */}
          {/* <Toaster position="bottom-center" toastOptions={{className:'dark:bg-gray-900 bg-white'}}/> */}
          <div className="object-top dark:bg-dark-mode bg-white w-full mb-6 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="flex justify-between items-center border-b-2 dark:border-gray-900 border-gray-100 py-6 md:justify-start md:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                  <Link href="/">
                    <span className="sr-only">Workflow</span>
                    <img
                      className="h-8 w-auto sm:h-10"
                      src="../logo.png"
                      alt="victor"
                    />
                  </Link>
                </div>
                <div className="-mr-2 -my-2 md:hidden">
                  <button
                    type="button"
                    className="dark:bg-dark-mode bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => setOpen(!open)}
                  >
                    <span className="sr-only">Open menu</span>
                    {/* Heroicon name: outline/menu */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
                <nav className="hidden md:flex space-x-10">
                  <NavItem href="/about" text="About"/>
                  <NavItem href="/portfolio" text="Portfolio"/>
                  <NavItem href="/gallery" text="Gallery"/>
                </nav>
                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                  <motion.button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    aria-label="Toggle Dark Mode"
                    whileTap={{ scale: 0.9 }}
                  >
                    {theme === 'dark' ? (
                      <FaSun size={20}/>
                    ) : (
                      <FaMoon size={20}/>
                    )}
                  </motion.button>
                  <ExternalLink href="https://docs.google.com/document/d/1yJT8ggDQm4Ys8auysyUR0Ro9Hxn-oMcQpNaFODScGbk/edit?usp=sharing">
                    <button id='resume' className="oldContact">Résumé</button>
                  </ExternalLink>
                </div>
              </div>
            </div>
            {/*
              Mobile menu, show/hide based on mobile menu state.
          
              Entering: "duration-200 ease-out"
                  From: ""
                  To: ""
              Leaving: "duration-100 ease-in"
                  From: "opacity-100 scale-100"
                  To: "opacity-0 scale-95"
              */}
            <div
              className={
                open
                  ? "opacity-100 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 p-2 transform origin-top-right md:invisible"
                  : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right invisible"
              }
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-dark-mode bg-white divide-y-2 divide-gray-50">
                {/* mobile header */}
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                    <Link href="/">
                      <img
                          className="h-8 w-auto"
                          src="../logo.png"
                          alt="victor"
                        />
                    </Link>
                    </div>
                    <div className="-mr-2">
                      <button
                        type="button"
                        className="dark:bg-dark-mode bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        onClick={() => setOpen(!open)}
                      >
                        <span className="sr-only">Close menu</span>
                        {/* Heroicon name: outline/x */}
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                {/* mobile header ends */}
                <div className="py-6 px-5 space-y-6">
                  <div className="grid grid-cols-1 gap-y-4 gap-x-8">
                    <Link
                      href="/about"
                      className="w-full flex items-center justify-center text-base font-medium text-gray-700 hover:text-black dark:hover:text-white"
                    >
                      About
                    </Link>
                    <Link
                      href="/portfolio"
                      className="w-full flex items-center justify-center text-base font-medium text-gray-700 hover:text-black dark:hover:text-white"
                    >
                      Portfolio
                    </Link>
                    <Link
                      href="/gallery"
                      className="w-full flex items-center justify-center text-base font-medium text-gray-700 hover:text-black dark:hover:text-white"
                    >
                      Gallery
                    </Link>
                    <motion.button
                      className='swap swap-rotate w-full flex items-center justify-center mb-4'
                      aria-label="Toggle Dark Mode"
                      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                      whileTap={{ scale: 0.9 }}
                    >
                      {theme === 'dark' ? (
                        <FaSun size={20}/>
                      ) : (
                        <FaMoon size={20}/>
                      )}
                    </motion.button>
                  </div>
                  <ExternalLink href="https://docs.google.com/document/d/1yJT8ggDQm4Ys8auysyUR0Ro9Hxn-oMcQpNaFODScGbk/edit?usp=sharing">
                      <button id='resume' className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-2xl shadow-sm text-base font-medium text-white bg-indigo-400 hover:bg-indigo-500">
                        Résumé
                      </button>
                  </ExternalLink>
                </div>
              </div>
            </div>
          </div>
      </>
    );
  };

export default Navbar;