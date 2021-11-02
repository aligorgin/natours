import Image from "next/image";
import nat1 from '../../../public/natours-img/nat-1-large.jpg';
import nat2 from '../../../public/natours-img/nat-2-large.jpg';
import nat3 from '../../../public/natours-img/nat-3-large.jpg';
import clsx from "clsx";

interface Props {
    img: number;
    className: string;
}

export default function AboutImg({img, className}: Props) {
    return (
        <div
            className={clsx('composition__photo w-1/3 lg:w-[55%] shadow-semiDarkSuperLow lg:shadow-semiDark rounded-[2px] lg:absolute transition-all duration-200  top-[-2rem] hover:scale-105 hover:shadow-dark hover:z-20 hover:outline-xl hover:translate-y-[-.5rem] ', className)}>
            {img === 1 && <Image src={nat1} alt={'nature photo'} layout='responsive' />}
            {img === 2 && <Image src={nat2} alt={'nature photo'} layout='responsive' />}
            {img === 3 && <Image src={nat3} alt={'nature photo'} layout='responsive' />}
        </div>
    )
}