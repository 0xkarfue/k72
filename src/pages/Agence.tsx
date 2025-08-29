// &nbsp;      for custom gap

import { useGSAP } from "@gsap/react";
import { useRef } from "react"
import gsap from "gsap";
// import ScrollTrigger from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function Agence() {

    // const imageDivRef = useRef(null);
    // const imgRef = useRef(null);

    const imageDivRef = useRef<HTMLDivElement | null>(null);
    const imgRef = useRef<HTMLImageElement | null>(null);


    const imgArr = [
        'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
    ]

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.to(imageDivRef.current, {
            scrollTrigger: {
                trigger: imageDivRef.current,
                // markers: true,
                start: "top 39.7%",
                end: "top -70%",
                // scrub: true,
                // pin: true,
                
                onUpdate: (elem) => {
                    const imageIndex = Math.min(
                        Math.floor(elem.progress * imgArr.length),
                        imgArr.length - 1
                    );
                    if (imgRef.current) {
                        imgRef.current.src = imgArr[imageIndex];
                    }
                }
            }
        })
    })

    return (
        <div className="text-black">

            <div className="section1 py-1">
                <div ref={imageDivRef} className="h-[20vw] rounded-4xl overflow-hidden w-[15vw] absolute top-96 left-[30vw]">
                    <img ref={imgRef} className="h-full w-full object-cover" src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
                </div>
                <div className="relative font-[font2]">
                    <div className="mt-[55vh]">
                        <h1 className="text-[20vw] text-center uppercase leading-[17vw]">
                            Soixan7e <br />
                            Douze
                        </h1>
                    </div>
                    <div className="pl-[40%] mt-20">
                        <p className="text-6xl">&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
                    </div>
                </div>
            </div>
            <div className="section2 h-screen">

            </div>
        </div>
    )
}