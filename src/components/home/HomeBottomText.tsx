import { Link } from "react-router-dom";

export default function HomeBottomText() {
    return (
        <div className="font-[font2] flex items-center justify-center gap-2">
            <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-44 flex items-center px-3 pt-1 lg:px-14 border-white rounded-full uppercase'>
                <Link to="/travail" className='text-[6vw] lg:mt-6'>Projects</Link>
            </div>
            <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50]  lg:h-44 flex items-center px-3 pt-1 lg:px-14 border-white rounded-full uppercase'>
                <Link to="/agence" className='text-[6vw] lg:mt-6'>Agence</Link>
            </div>
        </div>
    )
}