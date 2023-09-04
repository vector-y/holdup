import Image from 'next/image';

const Features = () => {
    return(    
       <div className='pt-4 pb-8 px-4 mx-auto text-left max-w-screen-xl lg:pb-4 lg:px-12'>
            <h2 className='text-4xl font-bold tracking-tight lg:text-5xl/[1.25] xl:text-6xl/[1.2] text-black'>
                Share your all of your betas.
            </h2>
            <div className='mt-8 grid gap-2 lg:grid-cols-2'>
                <div className='border-secondary flex flex-col rounded-lg border bg-gray-50 p-6'>
                    <div className='flex flex-1 items-center justify-center pb-6 lg:px-8 lg:py-8'>    
                        <img width='100%' src='./beta.png' className='relative'></img> 
                    </div>
                    <div className='flex flex-col'>
                        <p className='font-semibold text-lg'>
                            Everyone shares.
                        </p>
                        <p className='font-normal text-lg text-secondary'>
                            View all problems within your gym and see what everyone's up to.
                        </p>
                    </div>
                </div>

                <div className='border-secondary flex flex-col rounded-lg border bg-gray-50'>
                    <div className='flex flex-col p-6'>
                        <p className='font-semibold text-lg'>
                            Local gyms.
                        </p>
                        <p className='font-normal text-lg text-secondary'>
                            Find gyms supporting your betas, or add one yourself.
                        </p>
                    </div>
                    <img width='75%' src='location.png' className='relative self-center pb-8'/>
                </div>

                <div className='border-secondary relative flex flex-col items-center gap-6 overflow-hidden rounded-lg border bg-gray-50 p-6 pt-0 md:col-span-2'>
                    <img width='500vh' src='solved.png' className='relative self-center pb-4'/>
                    <div className='flex flex-col text-center'>
                        <p className='font-semibold text-lg'>
                            Visible Progress.
                        </p>
                        <p className='font-normal text-lg text-secondary'>
                            Measure your growth over time and catalog your efforts.
                        </p>
                    </div>
                </div>
            </div>
            {/* <div className='w-full mt-2 grid gap-2 lg:grid-cols-3'>
                    <div className='border-secondary flex flex-col rounded-lg border bg-gray-50 p-6'>
                        <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></circle><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 19.25C7.99594 19.25 4.75 16.0041 4.75 12C4.75 7.99594 7.99594 4.75 12 4.75C18.8125 4.75 19.25 9.125 19.25 12V13.25C19.25 14.3546 18.3546 15.25 17.25 15.25V15.25C16.1454 15.25 15.25 14.3546 15.25 13.25V8.75"></path></svg>
                        <p className="font-semibold text-base">Mentions</p>
                        <p className="font-normal text-base text-tertiary">Mention anyone on your team to include them in a post.</p>
                    </div>
                    <div className='border-secondary flex flex-col rounded-lg border bg-gray-50 p-6'>
                        <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></circle><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 19.25C7.99594 19.25 4.75 16.0041 4.75 12C4.75 7.99594 7.99594 4.75 12 4.75C18.8125 4.75 19.25 9.125 19.25 12V13.25C19.25 14.3546 18.3546 15.25 17.25 15.25V15.25C16.1454 15.25 15.25 14.3546 15.25 13.25V8.75"></path></svg>
                        <p className="font-semibold text-base">Mentions</p>
                        <p className="font-normal text-base text-tertiary">Mention anyone on your team to include them in a post.</p>
                    </div>
                    <div className='border-secondary flex flex-col rounded-lg border bg-gray-50 p-6'>
                        <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M4.75 12C4.75 7.99594 7.99594 4.75 12 4.75C16.0041 4.75 19.25 7.99594 19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 12.0952L10.8621 14L15 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        <p className="font-semibold text-base">Mentions</p>
                        <p className="font-normal text-base text-tertiary">Yes yes yes</p>
                    </div>
                </div> */}
       </div> 
    );
}

export default Features;