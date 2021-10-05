import HeadingTerritory from "../components/HeadingTerritory";
import Paragraph from "../components/Paragraph";
import Words from "../contents/Words";
import HeaderHoverAnimate from "../components/HeaderHoverAnimate";
import ButtonSecondary from "../components/ButtonSecondary";
import nat1 from '../../../../public/natours-img/nat-1-large.jpg';
import nat2 from '../../../../public/natours-img/nat-2-large.jpg';
import nat3 from '../../../../public/natours-img/nat-3-large.jpg';
import Image from "next/image";

export default function About() {

    return (
        <section className='bg-gray-100 py-[20rem] lg:py-[30rem] mt-[-25vh] px-0 '>
            <div className='text-center mb-[5rem] lg:mb-[8rem]'>
                <HeaderHoverAnimate text={Words.header}/>
            </div>

            <div className='max-w-[114rem] mx-auto'>
                <div className='grid grid-cols-1 px-5 lg:px-0 lg:grid-cols-2 lg:gap-20'>
                    <div>
                        <HeadingTerritory text={Words.headingTerritory1}/>
                        <Paragraph
                            text={Words.p1}
                        />

                        <HeadingTerritory text={Words.headingTerritory2}/>
                        <Paragraph
                            isLastOne={true}
                            text={Words.p2}
                        />

                        <a href="#">
                            <ButtonSecondary text={'Learn more'}/>
                        </a>
                    </div>

                    <div>
                        <div className='relative composition'>
                            <div
                                className='composition__photo w-[55%] shadow-semiDark rounded-[2px] absolute transition-all duration-200 left-0 top-[-2rem]
                                           hover:scale-105 hover:shadow-dark hover:z-20 hover:outline-xl hover:translate-y-[-.5rem]'>
                                <Image src={nat1} alt='photo 2' layout='responsive'/>
                            </div>

                            <div
                                className='composition__photo w-[55%] shadow-semiDark rounded-[2px] absolute transition-all duration-200 right-0 top-[2rem]
                                           hover:scale-105 hover:shadow-dark hover:z-20 hover:outline-xl hover:translate-y-[-.5rem]'>
                                <Image src={nat2} alt='photo 2' layout='responsive'/>
                            </div>
                            <div
                                className='composition__photo w-[55%] shadow-semiDark rounded-[2px] absolute transition-all duration-200 left-[20%] top-[10rem]
                                           hover:scale-105 hover:shadow-dark hover:z-20 hover:outline-xl hover:translate-y-[-.5rem]'>
                                <Image src={nat3} alt='photo 2' layout='responsive'/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )

}