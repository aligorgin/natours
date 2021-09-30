import Image from "next/image";
import nat8 from '../../../../public/natours-img/nat-8.jpg';
import nat9 from '../../../../public/natours-img/nat-9.jpg';
import HeaderHoverAnimate from "../components/HeaderHoverAnimate";
import HeadingTerritory from "../components/HeadingTerritory";
import Words from "../contents/Words";
import Button from "../components/Button";

export default function PopUp() {
    return (
        <div
            className='h-screen w-full fixed top-0 left-0 bg-black  bg-opacity-80 z-51 flex justify-center items-center'>

            <div className='w-3/4 bg-white shadow-darkL rounded-[3px]'>

                <div className='flex h-full'>

                    <div className='flex flex-col w-1/3 '>
                        <Image src={nat8} alt='nature picture' objectFit={"cover"} className='h-full'/>
                        <Image src={nat9} alt='nature picture' objectFit={"cover"} className='h-full'/>
                    </div>

                    <div className='flex-1 w-2/3 py-[3rem] px-[5rem]'>
                        <div className='flex flex-col justify-center h-full'>
                            <div className='mb-[3rem]'>
                                <HeaderHoverAnimate text={Words.popUpHeader}/>
                            </div>

                            <HeadingTerritory text={Words.popUph3}/>
                            <p className='text-[1.4rem] mb-[4rem] popup-column hyphens-auto'>{Words.popUpP}</p>
                            <a href="#">
                                <Button text={'Book now'} color={'bg-primary'} textColor={'text-white'}
                                        colorAfter={'after:bg-primary'} isSubmitButton={false}/>
                            </a>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}