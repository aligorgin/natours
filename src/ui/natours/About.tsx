import HeadingTerritory from "./HeadingTerritory";
import Paragraph from "./Paragraph";

export default function About() {

    return (
        <section className='bg-gray-100 py-[25rem] mt-[-25vh] px-0 '>
            <div className='text-center mb-[8rem]'>
                <h2 className='text-[3.5rem] tracking-[.2rem] uppercase font-bold bg-gradient-to-r from-primary-light to-primary-dark
                            inline-block bg-clip-text text-transparent  transition-all duration-200 hover:skew-x-[15deg]
                            hover:scale-110 hover: hover:skew-y-2 full hover:text-shadow-xl
                            '>
                    Exciting tours for adventurous people
                </h2>
            </div>

            <div className='max-w-[114rem] mx-auto'>
                <div className='grid grid-cols-2'>
                    <div>
                        <HeadingTerritory text={'You\'re going to fall in love with nature'} />
                        <Paragraph
                            text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi commodi ipsa neque nihil similique tempore tenetur unde vero! Adipisci consectetur ex fugiat illum itaque nihil optio, praesentium provident quae similique.'}
                        />

                        <HeadingTerritory text={'Live adventures like you never have before'}/>
                        <Paragraph
                            isLastOne={true}
                            text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, at, distinctio expedita explicabo fuga inventore.'}
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