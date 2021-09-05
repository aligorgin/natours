import HeadingTerritory from "../components/HeadingTerritory";
import Paragraph from "../components/Paragraph";
import AboutWords from "../contents/AboutWords";
import HeaderHoverAnimate from "../components/HeaderHoverAnimate";

export default function About() {

    return (
        <section className='bg-gray-100 py-[25rem] mt-[-25vh] px-0 '>
            <div className='text-center mb-[8rem]'>
                <HeaderHoverAnimate text={AboutWords.header}/>
            </div>

            <div className='max-w-[114rem] mx-auto'>
                <div className='grid grid-cols-2'>
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

                        <a href="#"
                           className='text-[1.6rem] text-primary inline-block border-b-[1px] border-solid border-primary p-[3px] transition-all duration-200
                                       transform hover:bg-primary hover:text-white hover:shadow-light hover:translate-y-[-2px] active:shadow-lessLight active:translate-y-0'
                        >
                            Learn more &rarr;
                        </a>
                    </div>
                    <div>someimg</div>
                </div>
            </div>
        </section>
    )

}