import HeadingTerritory from "./HeadingTerritory";
import Image from "next/image";
import nat8 from '../../../../public/natours-img/nat-8.jpg';

interface Props {
    text:string;
}
export default function StoriesCard({text}:Props){
    return(
        <div className='w-3/4 mx-auto shadow-super bg-white rounded-[3px] p-[6rem] pl-[9rem] text-[1.6rem] skew-x-[-12deg]'>
            <div className='w-[15rem] h-[15rem] shape-outside-circle float-left clip-path-circle translate-x-[-3rem] skew-x-[12deg]'>
                <Image src={nat8} alt='nature photo' layout='fill' objectFit={'cover'}/>
            </div>
            <div className='skew-x-[12deg]'>
                <HeadingTerritory text={'i had the best week ever with my family'}/>
                <p className='mt-[1.5rem]'> fugit illum in laborum libero nisi officiis quas qui quia, ratione saepe sequi ullam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur culpa dolorem id illum, inventore neque quasi quisquam tempora tempore voluptas voluptates? Ea fuga fugit minus possimus reiciendis sapiente voluptate.</p>
            </div>
        </div>
    )
}