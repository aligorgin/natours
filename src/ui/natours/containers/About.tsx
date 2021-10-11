import HeadingTerritory from "../components/HeadingTerritory";
import Paragraph from "../components/Paragraph";
import Words from "../contents/Words";
import HeaderHoverAnimate from "../components/HeaderHoverAnimate";
import ButtonSecondary from "../components/ButtonSecondary";
import nat1 from '../../../../public/natours-img/nat-1-large.jpg';
import nat2 from '../../../../public/natours-img/nat-2-large.jpg';
import nat3 from '../../../../public/natours-img/nat-3-large.jpg';
import Image from "next/image";
import AboutImg from "../components/AboutImg";

export default function About() {

    return (
        <section className='bg-gray-100 pt-[30rem] pb-[20rem]  lg:py-[30rem] mt-[-25vh] px-0 '>
            <div className='text-center mb-[5rem] lg:mb-[8rem]'>
                <HeaderHoverAnimate text={Words.header}/>
            </div>

            <div className='max-w-[114rem] mx-auto'>
                <div className='grid grid-cols-1 gap-20 px-5 lg:px-0 lg:grid-cols-2 lg:gap-20'>
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

                    <div className='relative composition flex lg:inline-block px-8 lg:px-0'>
                        <AboutImg img={1} className={'lg:left-0 lg:top-[-2rem] lg:scale-100 scale-[1.2]'}/>
                        <AboutImg img={2} className={'lg:right-0 lg:top-[2rem] lg:scale-100 scale-[1.3] top-[-1rem] z-[2]'}/>
                        <AboutImg img={3} className={'lg:left-[20%] lg:top-[10rem] lg:scale-100 scale-[1.1] top-[1rem]'}/>
                    </div>

                </div>
            </div>
        </section>
    )

}