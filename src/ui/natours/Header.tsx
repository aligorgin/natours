import Image from "next/image";
import heroPattern from '../../../public/natours-img/hero.jpg';
import logo from '../../../public/natours-img/logo-white.png';


export default function Header() {

    const style = {
        clipPath: 'polygon(0 0, 100% 0, 100% 75vh, 0 100%)',
    };

    return (
        <div style={style}
             className='relative h-[95vh] bg-gradient-to-br from-[rgba(126,213,111,0.8)] to-[rgba(40,180,131,0.8)]'>
            <div className='absolute w-full h-full opacity-20'>
                <Image src={heroPattern} alt='header image' layout={"fill"} objectFit="cover"/>
            </div>

            <div className='absolute top-[40px] left-[40px] h-[35px] w-[70px]'>
                <Image src={logo} alt='logo'/>
            </div>

            <div style={{backfaceVisibility: 'hidden'}}
                 className='absolute top-[40%] left-1/2 transform -translate-y-1/2 -translate-x-1/2'>
                <h1 className='text-gray-100 uppercase'>
                    <span className='animate-fadeRight block tracking-[35px] text-[60px] font-normal'>outdoors</span>
                    <span className='animate-fadeLeft block tracking-[17.4px] text-[20px] font-bold'>is where life happens</span>
                </h1>
            </div>

        </div>
    )
}