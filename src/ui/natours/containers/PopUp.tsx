import Image from "next/image";
import nat8 from '../../../../public/natours-img/nat-8.jpg';
import nat9 from '../../../../public/natours-img/nat-9.jpg';
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

    const {isOpen,setOpen} = useContext(ModalContext);

    return (
        <div
            className={clsx('h-screen w-full fixed top-0 left-0 bg-black transition-all duration-300 bg-opacity-80 z-51 grid place-items-center',
                isOpen ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-50')}>

            <div className='w-3/4 bg-white shadow-darkL rounded-[3px]'>

                <div className='flex h-full'>

                    <div className='flex flex-col w-1/3 '>
                        <Image src={nat8} alt='nature picture' objectFit={"cover"} className='h-full'/>
                        <Image src={nat9} alt='nature picture' objectFit={"cover"} className='h-full'/>
                    </div>

                    <div className='flex-1 w-2/3 py-[3rem] px-[5rem] relative'>
                        <div onClick={() => {
                            setOpen(false);
                        }} className='absolute top-12 right-12 flex flex-col cursor-pointer '>
                            <div className='w-[3rem] h-[2px] bg-gray-600 absolute rotate-45 '/>
                            <div className='w-[3rem] h-[2px] bg-gray-600 -rotate-45 '/>
                        </div>
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