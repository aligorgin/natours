import Image from "next/image";
import nat5 from '../../../../public/natours-img/nat-5.jpg';
import nat6 from '../../../../public/natours-img/nat-6.jpg';
import nat7 from '../../../../public/natours-img/nat-7.jpg';
import Button from "./Button";
import {useContext, useState} from "react";
import {ModalContext} from "../providers/ModalContext";

interface Props {
    img: number;
    heading: string;
    li1: string;
    li2: string;
    li3: string;
    li4: string;
    li5: string;
    price: string;
    colorLight: 'from-primary-light' | 'from-secondary-light' | 'from-tertiary-light';
    colorDark: 'to-primary-dark' | 'to-secondary-dark' | 'to-tertiary-dark';
}

export default function ToursRotateCard({heading, li1, li2, li3, li4, li5, img, price, colorLight, colorDark}: Props) {

    const {isOpen, setOpen} = useContext(ModalContext);


    return (
        <div className='group perspective-150 shadow-semiDarkLow lg:shadow-none bg-white lg:bg-transparent relative h-auto lg:h-[52rem] w-[34rem]'>
            <div className='lg:group-hover:-rotate-y-180 lg:shadow-semiDarkLow relative lg:absolute back-face-hidden back w-full top-0 left-0 bg-white h-auto lg:h-[50rem] transition-all duration-700 ease-out rounded-[3px] overflow-hidden'>
                <div
                    className={`h-[23rem] w-full bg-gradient-to-br ${colorLight} ${colorDark} clip-path-br-85 rounded-tl-[3px] rounded-tr-[3px]`}>
                    {img === 5 && <Image src={nat5} alt='nature image' objectFit='cover' width={340} height={230}
                                         className='opacity-30'/>}
                    {img === 6 && <Image src={nat6} alt='nature image' objectFit='cover' width={340} height={230}
                                         className='opacity-30'/>}
                    {img === 7 && <Image src={nat7} alt='nature image' objectFit='cover' width={340} height={230}
                                         className='opacity-30'/>}
                    &nbsp;
                </div>

                <div className='text-[2.8rem] font-light uppercase text-white text-right absolute top-[12rem] right-[2rem] w-[70%]'>
                    <span className={`py-[1rem] px-[1rem] decoration-clone bg-gradient-to-br ${colorLight} ${colorDark} opacity-80`}>{heading}</span>
                </div>
                <div className='py-[1rem] px-[3rem] lg:p-[3rem]'>
                    <ul className='w-4/5 mx-auto'>
                        <li className='text-center text-[1.5rem] p-[1rem] border-b border-[#eee]'>{li1}</li>
                        <li className='text-center text-[1.5rem] p-[1rem] border-b border-[#eee]'>{li2}</li>
                        <li className='text-center text-[1.5rem] p-[1rem] border-b border-[#eee]'>{li3}</li>
                        <li className='text-center text-[1.5rem] p-[1rem] border-b border-[#eee]'>{li4}</li>
                        <li className='text-center text-[1.5rem] p-[1rem] '>{li5}</li>
                    </ul>
                </div>
            </div>
            <div className={`rounded-bl-[3px] rounded-br-[3px] lg:rounded-[3px] clip-path-tr lg:clip-path-default rotate-y-0 lg:rotate-y-180 lg:group-hover:rotate-y-0 lg:shadow-semiDarkLow relative lg:absolute back-face-hidden back w-full top-0 left-0 text-white text-[2rem] h-auto lg:h-[50rem] transition-all duration-700 ease-out bg-gradient-to-br ${colorLight} ${colorDark}`}>
                <div className='flex flex-col justify-center items-center lg:h-full pt-[7rem] pb-[4rem] lg:p-0'>
                    <div className='text-center mb-[3rem] lg:mb-[8rem] '>
                        <div className='text-[1.4rem] uppercase'>Only</div>
                        <div className='text-[4rem] lg:text-[6rem] font-thin'>${price}</div>
                    </div>
                    <a onClick={() => setOpen(true)}>
                        <Button isSubmitButton={false} colorAfter={'after:bg-white'} textColor={'text-[#777]'}
                                color={'bg-white'} text={'Book now!'}/>
                    </a>
                </div>
            </div>
        </div>
    )
}