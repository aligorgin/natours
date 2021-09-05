import Image from "next/image";
import heroPattern from '../../../../public/natours-img/hero.jpg';
import logo from '../../../../public/natours-img/logo-white.png';
import Button from "../components/Button";


export default function Header() {

    return (
        <header
            className='clip-path-br relative h-[95vh] bg-gradient-to-br from-[rgba(126,213,111,0.8)] to-[rgba(40,180,131,0.8)]'>
            <div className='absolute w-full h-full opacity-20'>
                <Image src={heroPattern} alt='header image' layout={"fill"} objectFit="cover"/>
            </div>

            <div className='absolute top-[4rem] left-[4rem] h-[3.5rem] w-[7rem]'>
                <Image src={logo} alt='logo'/>
            </div>

            <div
                className='back-face-hidden absolute top-[40%] left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-center'>
                <h1 className='text-gray-100 uppercase mb-[6rem]'>
                    <span className='animate-fadeRight block tracking-[3.5rem] text-[6rem] font-normal'>outdoors</span>
                    <span className='animate-fadeLeft block tracking-[1.75rem] text-[2rem] font-bold'>is where life happens</span>
                </h1>
                <a href="#">
                    <Button text={'discover our tours'} isAnimated={true}/>
                </a>
            </div>

        </header>
    )
}