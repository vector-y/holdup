/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';

const OldFeatures = () => {
    return(
        <section className="pb-16 md:pb-24 lg:pb-32">
            <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 px-4 lg:gap-8 lg:px-8">
                <div className="col-span-1 flex flex-col gap-2 pb-4 md:gap-4 lg:items-center lg:gap-6 lg:pb-8 lg:text-center">
                    <h2 className="text-3xl font-bold leading-[1.2] tracking-tight  md:text-4xl lg:text-5xl xl:text-6xl text-black">Track your climbing journey.</h2>
                    <p className="text-2xl tracking-tight text-opacity-50 md:text-3xl lg:text-4xl text-black">Keep up with what's happening your climbing friends.</p>
                </div>
                <div className="mx-auto grid w-full max-w-6xl grid-cols-6 gap-4 gap-y-8 lg:gap-8 lg:gap-y-4 xl:gap-12">
                    <div className="col-span-6 flex w-full flex-col md:col-span-3">
                        <div className="relative z-10 mt-4 flex flex-none flex-col gap-1 pr-4 md:gap-2">
                            <div className="border-secondary bg-secondary overflow-hidden rounded-xl border">
                                <Image  
                                    src="/problems.jpg"
                                    alt="Picture of the author"
                                    style={{objectFit:"cover", objectPosition:"50% 35%", maxHeight: 300 }}
                                    width={520}
                                    height={300}/>
                            </div>
                            <h3 className="text-lg text-black md:text-xl xl:text-2xl">
                                Share your problems.
                            </h3>
                        </div>
                    </div>
                    <div className="col-span-6 flex w-full flex-col md:col-span-3">
                        <div className="relative z-10 mt-4 flex flex-none flex-col gap-1 pr-4 md:gap-2">
                            <div className="border-secondary bg-secondary overflow-hidden rounded-xl border">
                                <Image  
                                    src="/progress.jpg"
                                    alt="Picture of the author"
                                    style={{objectFit:"cover", objectPosition:"50% 50%", maxHeight: 300 }}
                                    width={520}
                                    height={300}/>
                            </div>
                            <h3 className="text-lg text-black md:text-xl xl:text-2xl">
                                Track progress.
                            </h3>
                        </div>
                    </div>
                    <div className="col-span-6 flex w-full flex-col md:col-span-3">
                        <div className="relative z-10 mt-4 flex flex-none flex-col gap-1 pr-4 md:gap-2">
                            <div className="border-secondary bg-secondary overflow-hidden rounded-xl border">
                                <Image  
                                    src="/gyms.jpg"
                                    alt="Picture of the author"
                                    style={{objectFit:"cover", objectPosition:"50% 50%", maxHeight: 300 }}
                                    width={520}
                                    height={300}/>
                            </div>
                            <h3 className="text-lg text-black md:text-xl xl:text-2xl">
                                Explore new gyms.
                            </h3>
                        </div>
                    </div>
                    <div className="col-span-6 flex w-full flex-col md:col-span-3">
                        <div className="relative z-10 mt-4 flex flex-none flex-col gap-1 pr-4 md:gap-2">
                            <div className="border-secondary bg-secondary overflow-hidden rounded-xl border">
                                <Image  
                                    src="/collaborate.jpg"
                                    alt="Picture of the author"
                                    style={{objectFit:"cover", objectPosition:"50% 50%", maxHeight: 300 }}
                                    width={520}
                                    height={300}/>
                            </div>
                            <h3 className="text-lg text-black md:text-xl xl:text-2xl">
                                Collaborate with others.
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OldFeatures;