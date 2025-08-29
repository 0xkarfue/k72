import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { useLocation } from 'react-router-dom';



export default function Stair({children}: {children: React.ReactNode}) {
// export default function Stair() {

    const stairParentRef = useRef(null);
    const pageRef = useRef(null);

    const currentPath = useLocation().pathname;

    useGSAP(() => {

        const tl = gsap.timeline();

        tl.to(stairParentRef.current, {
            display: "block"
        })

        tl.from(".stair", {
            height: 0,
            stagger: {
                amount: -0.25
            }
        })

        tl.to(".stair", {
            y: "100%",
            stagger: {
                amount: -0.25
            }
        })

        tl.to(stairParentRef.current, {
            display: "none"
        })

        tl.to(".stair", {
            y: "0%",
        })

        gsap.from(pageRef.current, {
            opacity: 0,
            delay: 1,
            scale: 1.2
        })

    }, [currentPath])

    return (
        <div>
            <div ref={stairParentRef} className='h-screen fixed z-10 w-full'>


                <div className='h-full fixed z-10 w-full flex'>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                </div>

            </div>
            <div ref={pageRef}>
                {children}
            </div>
        </div>
    )
}