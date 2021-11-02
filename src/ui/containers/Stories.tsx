import HeaderHoverAnimate from "../components/HeaderHoverAnimate";
import StoriesCard from "../components/StoriesCard";
import Words from "../contents/Words";
import ButtonSecondary from "../components/ButtonSecondary";

export default function Stories() {
    return (
        <>
            <section className='py-[10rem] lg:py-[15rem] relative'>

                <div className='absolute top-0 left-0 w-full h-full -z-1 opacity-20 overflow-hidden'>
                    <video src={require('../../../public/natours-img/video.mp4')} autoPlay muted loop
                           className='h-full w-full object-cover '>
                        Your browser is not supported!
                    </video>
                </div>

                <div className='mb-[5rem] lg:mb-[8rem] text-center'>
                    <HeaderHoverAnimate text={'we make people genuinely happy'}/>
                </div>

                <div className='max-w-[114rem] mx-auto'>
                    <StoriesCard
                        header={Words.storyHeader1}
                        text={Words.storyP}
                        img={8}
                        writerName={'mary'}
                        writerLast={'smith'}
                    />
                    <StoriesCard
                        header={Words.storyHeader2}
                        text={Words.storyP}
                        img={9}
                        writerName={'jack'}
                        writerLast={'wilson'}
                    />

                    <div className='text-center mt-[10rem]'>
                        <ButtonSecondary text={'Read all stories'}/>
                    </div>
                </div>

            </section>
        </>
    )
}