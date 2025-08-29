import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useNav } from "../../context/NavContext";


const FullSreenNav = () => {

    // const stairParentRef = useRef(null);


    // const [navOpen, setNavOpen] = useContext(NavBarContext)

    const [navOpen, setNavOpen] = useNav();

    const fullNavLinkRef = useRef(null);
    const fullScreenRef = useRef<HTMLDivElement | null>(null);
    

    function gsapAnimation() {
        const tl = gsap.timeline()
        tl.to('.fullscreennav', {
            display: 'block'
        })
        tl.to('.stairing', {
            delay: 0.2,
            height: '100%',
            stagger: {
                amount: -0.3
            }
        })
        tl.to('.link', {
            opacity: 1,
            rotateX: 0,
            stagger: {
                amount: 0.3
            }
        })
        tl.to('.navlink', {
            opacity: 1
        })
    }
    function gsapAnimationReverse() {
        const tl = gsap.timeline()
        tl.to('.link', {
            opacity: 0,
            rotateX: 90,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.stairing', {
            height: 0,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.navlink', {
            opacity: 0
        })
        tl.to('.fullscreennav', {
            display: 'none',
        })
    }


    useGSAP(function () {
        if (navOpen) {

            gsapAnimation()
        } else {

            gsapAnimationReverse()

        }
    }, [navOpen])

    return (
        <div ref={fullScreenRef} className="fullscreennav h-screen w-full absolute text-white overflow-hidden z-50">
            <div className="h-screen w-screen fixed">
                <div className="h-full w-full flex">
                    <div className="stairing h-full w-1/5 bg-black"></div>
                    <div className="stairing h-full w-1/5 bg-black"></div>
                    <div className="stairing h-full w-1/5 bg-black"></div>
                    <div className="stairing h-full w-1/5 bg-black"></div>
                    <div className="stairing h-full w-1/5 bg-black"></div>
                </div>
            </div>
            <div ref={fullNavLinkRef} className="relative">
                <div className="flex p-5 w-full justify-between items-start">
                    <div className="">
                        <div className='lg:p-5 p-2 '>
                            <div className='lg:w-36 w-24'>
                                <svg className=' w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
                                    <path fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div onClick={() => setNavOpen(false)} className="h-32 w-32 relative cursor-pointer">
                        <div className="h-full w-2 -rotate-45 origin-left bg-[#D3FD50] absolute"></div>
                        <div className="h-full w-2 rotate-45 origin-right bg-[#D3FD50] absolute"></div>
                    </div>
                </div>
                <div className="py-36">
                    <div className="origin-top border-t-1 relative border-white link">
                        <h1 className="font-[font1] text-[8vw] uppercase leading-[0.8] pt-10 text-center">Projects</h1>

                        <div className="moveLink flex absolute top-0 bg-[#D3FD50] text-black">
                            <div className="flex items-center moveX">
                                <h2 className="whitespace-nowrap font-[font1] text-[8vw] uppercase leading-[0.8] pt-10 text-center">Pour Tout voir</h2>
                                <img className="w-80 object-cover rounded-full shrink-0 h-28" src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                                <h2 className="whitespace-nowrap font-[font1] text-[8vw] uppercase leading-[0.8] pt-10 text-center">Pour Tout voir</h2>
                                <img className="w-80 object-cover rounded-full shrink-0 h-28" src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                            <div className="flex items-center moveX">
                                <h2 className="whitespace-nowrap font-[font1] text-[8vw] uppercase leading-[0.8] pt-10 text-center">Pour Tout voir</h2>
                                <img className="w-80 object-cover rounded-full shrink-0 h-28" src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                                <h2 className="whitespace-nowrap font-[font1] text-[8vw] uppercase leading-[0.8] pt-10 text-center">Pour Tout voir</h2>
                                <img className="w-80 object-cover rounded-full shrink-0 h-28" src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="origin-top border-t-1 relative border-white link">
                        <h1 className="font-[font1] text-[8vw] uppercase leading-[0.8] pt-10 text-center">agence</h1>

                        <div className="moveLink flex absolute top-0 bg-[#D3FD50] text-black">
                            <div className="flex items-center moveX">
                                <h2 className="whitespace-nowrap font-[font1] text-[8vw] uppercase leading-[0.8] pt-10 text-center">Pour Tout voir</h2>
                                <img className="w-80 object-cover rounded-full shrink-0 h-28" src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                                <h2 className="whitespace-nowrap font-[font1] text-[8vw] uppercase leading-[0.8] pt-10 text-center">Pour Tout voir</h2>
                                <img className="w-80 object-cover rounded-full shrink-0 h-28" src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                            <div className="flex items-center moveX">
                                <h2 className="whitespace-nowrap font-[font1] text-[8vw] uppercase leading-[0.8] pt-10 text-center">Pour Tout voir</h2>
                                <img className="w-80 object-cover rounded-full shrink-0 h-28" src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                                <h2 className="whitespace-nowrap font-[font1] text-[8vw] uppercase leading-[0.8] pt-10 text-center">Pour Tout voir</h2>
                                <img className="w-80 object-cover rounded-full shrink-0 h-28" src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="origin-top border-t-1 relative border-white link">
                        <h1 className="font-[font1] text-[8vw] uppercase leading-[0.8] pt-10 text-center">contact</h1>

                        <div className="moveLink flex absolute top-0 bg-[#D3FD50] text-black">
                            <div className="flex items-center moveX">
                                <h2 className="whitespace-nowrap font-[font1] text-[8vw] uppercase leading-[0.8] pt-10 text-center">Pour Tout voir</h2>
                                <img className="w-80 object-cover rounded-full shrink-0 h-28" src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                                <h2 className="whitespace-nowrap font-[font1] text-[8vw] uppercase leading-[0.8] pt-10 text-center">Pour Tout voir</h2>
                                <img className="w-80 object-cover rounded-full shrink-0 h-28" src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                            <div className="flex items-center moveX">
                                <h2 className="whitespace-nowrap font-[font1] text-[8vw] uppercase leading-[0.8] pt-10 text-center">Pour Tout voir</h2>
                                <img className="w-80 object-cover rounded-full shrink-0 h-28" src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                                <h2 className="whitespace-nowrap font-[font1] text-[8vw] uppercase leading-[0.8] pt-10 text-center">Pour Tout voir</h2>
                                <img className="w-80 object-cover rounded-full shrink-0 h-28" src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="origin-top border-y-1 relative border-white link">
                        <h1 className="font-[font1] text-[8vw] uppercase leading-[0.8] pt-10 text-center">blogue</h1>

                        <div className="moveLink flex absolute top-0 bg-[#D3FD50] text-black">
                            <div className="flex items-center moveX">
                                <h2 className="whitespace-nowrap font-[font1] text-[8vw] uppercase leading-[0.8] pt-10 text-center">Pour Tout voir</h2>
                                <img className="w-80 object-cover rounded-full shrink-0 h-28" src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                                <h2 className="whitespace-nowrap font-[font1] text-[8vw] uppercase leading-[0.8] pt-10 text-center">Pour Tout voir</h2>
                                <img className="w-80 object-cover rounded-full shrink-0 h-28" src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                            <div className="flex items-center moveX">
                                <h2 className="whitespace-nowrap font-[font1] text-[8vw] uppercase leading-[0.8] pt-10 text-center">Pour Tout voir</h2>
                                <img className="w-80 object-cover rounded-full shrink-0 h-28" src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                                <h2 className="whitespace-nowrap font-[font1] text-[8vw] uppercase leading-[0.8] pt-10 text-center">Pour Tout voir</h2>
                                <img className="w-80 object-cover rounded-full shrink-0 h-28" src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullSreenNav;