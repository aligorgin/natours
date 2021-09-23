import Image from "next/image";
import nat5 from '../../../../public/natours-img/nat-5.jpg';
import nat6 from '../../../../public/natours-img/nat-6.jpg';
import nat7 from '../../../../public/natours-img/nat-7.jpg';
import Button from "./Button";

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

    return (
        <div className='tours-rotate relative h-[52rem] w-[34rem]'>
            <div className='shadow-semiDarkLow absolute back-face-hidden back w-full top-0 left-0 bg-white
                            h-[50rem] transition-all duration-700 h-[52rem]
                            ease-out tours-rotate__card__front rounded-[3px] overflow-hidden
                            '>
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

                <div
                    className='text-[2.8rem] font-light uppercase text-white text-right absolute top-[12rem] right-[2rem] w-[70%]'>
                    <span
                        className={`py-[1rem] px-[1rem] decoration-clone bg-gradient-to-br ${colorLight} ${colorDark} opacity-80`}>{heading}</span>
                </div>
                <div className='p-[3rem]'>
                    <ul className='w-4/5 mx-auto'>
                        <li className='text-center text-[1.5rem] p-[1rem] border-b border-[#eee]'>{li1}</li>
                        <li className='text-center text-[1.5rem] p-[1rem] border-b border-[#eee]'>{li2}</li>
                        <li className='text-center text-[1.5rem] p-[1rem] border-b border-[#eee]'>{li3}</li>
                        <li className='text-center text-[1.5rem] p-[1rem] border-b border-[#eee]'>{li4}</li>
                        <li className='text-center text-[1.5rem] p-[1rem] '>{li5}</li>
                    </ul>
                </div>
            </div>
            <div className={`shadow-semiDarkLow absolute back-face-hidden back w-full top-0 left-0 
                            text-white text-[2rem] h-[50rem] transition-all duration-700 ease-out
                            tours-rotate__card__back
                            bg-gradient-to-br ${colorLight} ${colorDark}`}>
                <div className='flex flex-col justify-center items-center h-full'>
                    <div className='text-center mb-[8rem]'>
                        <div className='text-[1.4rem] uppercase'>Only</div>
                        <div className='text-[6rem] font-thin'>${price}</div>
                    </div>
                    <Button colorAfter={'after:bg-white'} textColor={'text-[#777]'} color={'bg-white'} text={'Book now!'}/>
                </div>
            </div>
        </div>
    )
}