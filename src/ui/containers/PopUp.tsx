import Image from "next/image";
import nat8 from '../../../public/natours-img/nat-8.jpg';
import nat9 from '../../../public/natours-img/nat-9.jpg';
import HeaderHoverAnimate from "../components/HeaderHoverAnimate";
import HeadingTerritory from "../components/HeadingTerritory";
import Words from "../contents/Words";
import Button from "../components/Button";
import clsx from "clsx";
import {useContext} from "react";
import {ModalContext} from "../providers/ModalContext";

interface Props {
    isClicked?: boolean;
}

export default function PopUp() {

    const {isOpen, setOpen} = useContext(ModalContext);

    return (
        <div className={clsx('h-screen w-full backdrop-blur-md fixed top-0 left-0 transition-all duration-300 grid place-items-center px-8 h-auto sm:px-0',
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible')}>
            <div onClick={() => {
                setOpen(false)
            }} className='absolute left-0 top-0 z-[54] h-screen w-full bg-black/30 '/>

            <div className={clsx('w-full sm:w-3/4 bg-white shadow-darkL rounded-[3px] z-[6500] transition-all duration-300 origin-bottom', isOpen ? 'rotate-x-0' : '-rotate-x-90')}>

                <div className='flex flex-col md:flex-row h-full'>

                    <div className='flex flex-row md:flex-col md:w-1/3 w-full h-full '>
                        <Image src={nat8} alt='nature picture' />
                        <Image src={nat9} alt='nature picture' />
                    </div>

                    <div className='md:flex-1 md:w-2/3 py-4 px-8 sm:py-[3rem] sm:px-[5rem] relative'>
                        <div onClick={() => {setOpen(false);}} className='absolute top-9 right-12 flex flex-col justify-center items-center cursor-pointer w-9 h-9 group hidden sm:inline-block'>
                            <div className='w-[3rem] h-[2px] bg-gray-600 absolute rotate-45 group-hover:bg-primary transition-all'/>
                            <div className='w-[3rem] h-[2px] bg-gray-600 -rotate-45 group-hover:bg-primary transition-all'/>
                        </div>
                        <div className='flex flex-col justify-center h-full'>
                            <div className='mb-[3rem]'>
                                <HeaderHoverAnimate text={Words.popUpHeader}/>
                            </div>

                            <HeadingTerritory text={Words.popUph3}/>
                            <p className='text-[1.4rem] mb-[3rem] lg:mb-[4rem]'>{Words.popUpP}</p>
                            <a href="#" className='pb-5 sm:pb-0'>
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