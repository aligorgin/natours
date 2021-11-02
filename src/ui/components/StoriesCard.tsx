import HeadingTerritory from "./HeadingTerritory";
import Image from "next/image";
import nat8 from '../../../public/natours-img/nat-8.jpg';
import nat9 from '../../../public/natours-img/nat-9.jpg';

interface Props {
    header:string;
    text:string;
    img:number;
    writerName:string;
    writerLast:string;
}
export default function StoriesCard({header,img,writerLast,writerName,text}:Props){
    return(
        <div className={`${img===8 ? 'mb-32' :''} group w-[90%] lg:w-3/4 mx-auto shadow-super bg-white bg-opacity-60 rounded-[3px] p-[4rem] lg:p-[6rem] pl-[7rem] lg:pl-[9rem] text-[1.6rem] lg:skew-x-[-12deg]`}>
            <div className='w-[15rem] h-[15rem] relative flex justify-center items-center shape-outside-circle float-left clip-path-circle translate-x-[-3rem] lg:skew-x-[12deg]'>
                {img=== 8 && <Image src={nat8} alt='nature photo' layout='fill' objectFit={'cover'} className='transition-all duration-500 scale-100 blur-[3px] brightness-75 md:brightness-100 md:blur-0 md:scale-140 group-hover:scale-100 group-hover:blur-[3px] group-hover:brightness-75 '/>}
                {img=== 9 && <Image src={nat9} alt='nature photo' layout='fill' objectFit={'cover'} className='transition-all duration-500 scale-100 blur-[3px] brightness-75 md:brightness-100 md:blur-0 md:scale-140 group-hover:scale-100 group-hover:blur-[3px] group-hover:brightness-75 '/>}
                <div className='back-face-hidden transition-all duration-500 absolute translate-y-0 opacity-100 md:opacity-0 md:translate-y-[70%] group-hover:opacity-100 group-hover:translate-y-0 uppercase text-white text-center text-[1.7rem]'>
                    {writerName} <br/>{writerLast}
                </div>
            </div>
            <div className='lg:skew-x-[12deg]'>
                <HeadingTerritory text={header}/>
                <p className='mt-[1.5rem]'> {text}</p>
            </div>
        </div>
    )
}