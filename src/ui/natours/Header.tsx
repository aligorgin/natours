import Image from "next/image";
import heroPattern from '../../../public/natours-img/hero.jpg';
import logo from '../../../public/natours-img/logo-white.png';


export default function Header() {

    const style = {
        clipPath: 'polygon(0 0, 100% 0, 100% 75vh, 0 100%)',
    };

    const styleOfA = 'text-[1.6rem] transition-all duration-200 transform  hover:-translate-y-2 rounded-full uppercase py-[1.5rem] px-[4rem] inline-block bg-white text-[#777] relative active:-translate-y-1 hover:shadow-light active:shadow-lessLight after:inline-block after:h-full after:w-full after:rounded-full after:absolute after:bg-white after:top-0 after:left-0 after:-z-1 after:transform hover:after:scale-x-140 hover:after:scale-y-160 hover:after:opacity-0 hover:after:transition-all hover:after:duration-400 animate-moveInBottom'

    return (
        <div style={style}
             className='relative h-[95vh] bg-gradient-to-br from-[rgba(126,213,111,0.8)] to-[rgba(40,180,131,0.8)]'>
            <div className='absolute w-full h-full opacity-20'>
                <Image src={heroPattern} alt='header image' layout={"fill"} objectFit="cover"/>
            </div>

            <div className='absolute top-[4rem] left-[4rem] h-[3.5rem] w-[7rem]'>
                <Image src={logo} alt='logo'/>
            </div>

            <div style={{backfaceVisibility: 'hidden'}}
                 className='absolute top-[40%] left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-center'>
                <h1 className='text-gray-100 uppercase mb-[6rem]'>
                    <span className='animate-fadeRight block tracking-[3.5rem] text-[6rem] font-normal'>outdoors</span>
                    <span className='animate-fadeLeft block tracking-[1.75rem] text-[2rem] font-bold'>is where life happens</span>
                </h1>
                <a href="#"
                   style={{animationFillMode: 'backwards'}}
                   className={styleOfA}>
                    discover our tours
                </a>
            </div>

        </div>
    )
}