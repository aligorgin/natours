import HeadingTerritory from "../components/HeadingTerritory";
import Paragraph from "../components/Paragraph";
import AboutWords from "../contents/AboutWords";
import HeaderHoverAnimate from "../components/HeaderHoverAnimate";
import ButtonSecondary from "../components/ButtonSecondary";
import nat1 from '../../../../public/natours-img/nat-1-large.jpg';
import nat2 from '../../../../public/natours-img/nat-2-large.jpg';
import nat3 from '../../../../public/natours-img/nat-3-large.jpg';
import Image from "next/image";

export default function About() {

    return (
        <section className='bg-gray-100 py-[25rem] mt-[-25vh] px-0 '>
            <div className='text-center mb-[8rem]'>
                <HeaderHoverAnimate text={AboutWords.header}/>
            </div>

            <div className='max-w-[114rem] mx-auto'>
                <div className='grid grid-cols-2 gap-20'>
                    <div>
                        <HeadingTerritory text={AboutWords.headingTerritory1}/>
                        <Paragraph
                            text={AboutWords.p1}
                        />

                        <HeadingTerritory text={AboutWords.headingTerritory2}/>
                        <Paragraph
                            isLastOne={true}
                            text={AboutWords.p2}
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