import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { styled, keyframes } from '@stitches/react';
import { motion } from "framer-motion";
import { violet, blackA, mauve, green } from '@radix-ui/colors'
import {
    FaCopy,
    FaPenNib,
    FaCalendarCheck,
  } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';

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
const successCopy = () => toast.success('Copied to clipboard!')

const Modal = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
        <button className="bg-indigo-600 hover:bg-indigo-700 inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-2xl bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
          Contact 
        <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Toaster/>
      <DialogOverlay />
      <DialogContent className={'bg-white dark:bg-dark-mode'}>
        <DialogTitle className={'text-black dark:bg-dark-mode dark:text-white pb-4'}>Contact</DialogTitle>
        <div className={'contents'}>
            <h1 className={'text-black dark:bg-dark-mode dark:text-white'}>Email</h1>
            <div className={'grid sm:grid-cols-1 md:grid-cols-2 gap-4 items-center pb-4'}>
                <p className={'text-gray-400 dark:bg-dark-mode'}>vt.victortran@gmail.com</p>
                <div className={'flex pb-1'}>
                    <ExternalLink href="mailto:vt.victortran@gmail.com">
                        <button className={'inline-flex items-center space-between border border-gray-200 text-md dark:bg-dark-mode dark:border-gray-800 dark:hover:bg-gray-700 dark:text-gray-100 bg-white hover:bg-gray-200 text-gray-800 py-1 px-4 rounded-l'}>
                            <FaPenNib className='mr-2 text-gray-500'/> Compose
                        </button>
                    </ExternalLink>
                    <button onClick={successCopy}>
                        <button 
                            className={'inline-flex items-center space-between border border-gray-200 text-md dark:bg-dark-mode dark:border-gray-800 dark:hover:bg-gray-700 dark:text-gray-100 bg-white hover:bg-gray-200 text-gray-800 py-1 px-4 rounded-r'}
                            onClick={() => navigator.clipboard.writeText('vt.victortran@gmail.com')}
                            onCopy={successCopy}>
                            <FaCopy className='mr-2 text-gray-500'/> Copy
                        </button>
                    </button>

                </div>
            </div>
        </div>
        <div className='flex-grow border-t border-gray-100 dark:border-gray-900'></div>
        <div className={'pt-2'}>
            <h1 className={'text-black dark:bg-dark-mode dark:text-white'}>Book a time</h1>
            <div className={'grid sm:grid-cols-1 md:grid-cols-2 gap-4 items-center pb-4'}>
              <p className={'text-gray-400 dark:bg-dark-mode'}>I'd love to chat 😊</p>
              <ExternalLink href="https://cal.com/victortran/15min">
                <button
                className={'inline-flex items-center space-between border border-gray-200 text-md dark:bg-dark-mode dark:border-gray-800 dark:hover:bg-gray-700 dark:text-gray-100 bg-white hover:bg-gray-200 text-gray-800 py-1 px-4 rounded-r'}>
                  <FaCalendarCheck className='mr-2 text-gray-500'/> Book
                </button>
              </ExternalLink>
            </div>
        </div>
      </DialogContent>
    </Dialog.Portal>
  </Dialog.Root>
);

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

const DialogOverlay = styled(Dialog.Overlay, {
  backgroundColor: blackA.blackA9,
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
});

const DialogContent = styled(Dialog.Content, {
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '500px',
  minWidth: '400px',
  maxHeight: '85vh',
  padding: 36,
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  '&:focus': { outline: 'none' },
});

const DialogTitle = styled(Dialog.Title, {
  margin: 0,
  fontWeight: 600,
  color: mauve.mauve12,
  fontSize: 24,
});

const DialogDescription = styled(Dialog.Description, {
  margin: '10px 0 20px',
  color: mauve.mauve10,
  paddingBottom: 24,
  fontSize: 15,
  lineHeight: 1.5,
});

const Flex = styled('div', { display: 'flex' });

const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 25,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: violet.violet11,
  position: 'absolute',
  top: 10,
  right: 10,

  '&:hover': { backgroundColor: violet.violet4 },
  '&:focus': { boxShadow: `0 0 0 2px ${violet.violet7}` },
});

const Fieldset = styled('fieldset', {
  all: 'unset',
  display: 'flex',
  gap: 20,
  alignItems: 'center',
  marginBottom: 15,
});

const Label = styled('label', {
  fontSize: 15,
  color: violet.violet11,
  width: 90,
  textAlign: 'right',
});

export default Modal;