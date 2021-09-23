import HeaderHoverAnimate from "../components/HeaderHoverAnimate";
import StoriesCard from "../components/StoriesCard";
import Words from "../contents/Words";
import ButtonSecondary from "../components/ButtonSecondary";

export default function Stories() {
    return (
        <>
            <section className='py-[15rem] bg-gray-100'>
                <div className='mb-[8rem] text-center'>
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