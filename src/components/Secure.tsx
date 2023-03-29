/* eslint-disable react/no-unescaped-entities */
const Secure = () => {
    return(
        <section className="bg-white  pb-16 md:pb-24">
            <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 px-4 lg:gap-8 lg:px-8">
                <div className="bg-dots border-secondary dark relative flex items-center overflow-hidden rounded-2xl bg-black px-8 py-8 text-white lg:justify-center lg:py-24">
                    <div className="flex flex-col gap-4 pb-4 lg:items-center lg:gap-8 lg:pb-8 lg:text-center">
                    <svg width="92" height="92" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 4.75L4.75002 8C4.75002 8 4.00002 19.25 12 19.25C20 19.25 19.25 8 19.25 8L12 4.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9.75 12.75L11 14.25L14.25 9.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        <h2 className="text-2xl font-bold leading-[1.2] tracking-tight md:text-4xl lg:text-5xl xl:text-6xl text-white">Private and Secure.</h2>
                        <p className="text-2xl w-3/5 sm:w-4/5 tracking-tight text-opacity-50 md:text-3xl lg:text-4xl text-white">We use industry best-practices to keep your team's work private and secure.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Secure;