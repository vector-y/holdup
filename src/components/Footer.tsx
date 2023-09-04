const Footer = () => {
    return(
            <div className="p-16 border-gray-150 flex w-full flex-col gap-16 border-t py-8">
                <div className="mx-auto grid w-full sm:max-w-md md:max-w-2xl lg:max-w-6xl grid-cols-1 gap-12 md:grid-cols-4 sm:grid-cols-2">
                    <div className="flex flex-col md-max:order-4">
                        <a className="flex items-center" href="/">
                            <img src="./logo.png" className="h-8 mr-3" alt="Holdup Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap">Holdup</span>
                        </a>
                        <div className="mt-4 flex flex-col gap-1 opacity-70">
                            <p className="font-normal text-sm text-tertiary whitespace-nowrap">Hold up Software Co.</p>
                            <p className="font-normal text-sm text-tertiary">© 2023</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 order-1 md:order-3">
                        <p className="font-semibold text-sm">Company</p><a target="_self" rel="auto" className="text-secondary hover:text-primary" href="/blog">
                            <p className="font-normal text-sm text-inherit">Blog</p>
                        </a>
                        <a target="_self" rel="auto" className="text-secondary hover:text-primary" href="/contact">
                            <p className="font-normal text-sm text-inherit">Contact</p>
                        </a>
                    </div>
                    <div className="flex flex-col gap-2 order-2 md:order-4">
                        <p className="font-semibold text-sm">Resources</p>
                            <a target="_self" rel="auto" className="text-secondary hover:text-primary" href="https://www.termsfeed.com/live/f0e9fa6c-e64b-4028-9fe5-813efdeb6e4b">
                                <p className="font-normal text-sm text-inherit">Privacy policy</p>
                            </a>
                    </div>
                    <div className="flex flex-col gap-2 order-3 md:order-5">
                        <div className="flex flex-col gap-2">
                            <p className="font-semibold text-sm">Follow</p>
                            <a target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary" href="/twitter">
                                <p className="font-normal text-sm text-inherit">Twitter</p>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary" href="/linkedin">
                                <p className="font-normal text-sm text-inherit">LinkedIn</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Footer