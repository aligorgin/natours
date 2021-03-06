import HeaderHoverAnimate from "../components/HeaderHoverAnimate";
import ToursRotateCard from "../components/ToursRotateCard";
import Words from "../contents/Words";
import Button from "../components/Button";

export default function Tours() {
    return (
        <>
            <section className='bg-gray-100 py-[20rem] lg:pt-[25rem] pb-[10rem] lg:pb-[15rem] px-0 mt-[-10rem] lg:mt-[-14rem] ' id='tours'>

                <div className='mb-[5rem] lg:mb-[8rem] text-center'>
                    <HeaderHoverAnimate text={'most popular tours'}/>
                </div>


                <div className='max-w-[50rem] lg:max-w-[114rem] mx-auto'>
                    <div className='grid grid-cols-1 place-items-center gap-y-12 lg:gap-y-0 lg:grid-cols-3 lg:gap-[6rem]'>

                        <ToursRotateCard
                            img={5}
                            heading={Words.toursHeader1}
                            li1={Words.toursLi1Card1}
                            li2={Words.toursLi2Card1}
                            li3={Words.toursLi3Card1}
                            li4={Words.toursLi4Card1}
                            li5={Words.toursLi5Card1}
                            price={'297'}
                            colorLight={'from-secondary-light'}
                            colorDark={'to-secondary-dark'}
                        />

                        <ToursRotateCard
                            img={6}
                            heading={Words.toursHeader2}
                            li1={Words.toursLi1Card2}
                            li2={Words.toursLi2Card2}
                            li3={Words.toursLi3Card2}
                            li4={Words.toursLi4Card2}
                            li5={Words.toursLi5Card2}
                            price={'497'}
                            colorLight={'from-primary-light'}
                            colorDark={'to-primary-dark'}
                        />

                        <ToursRotateCard
                            img={7}
                            heading={Words.toursHeader3}
                            li1={Words.toursLi1Card3}
                            li2={Words.toursLi2Card3}
                            li3={Words.toursLi3Card3}
                            li4={Words.toursLi4Card3}
                            li5={Words.toursLi5Card3}
                            price={'897'}
                            colorLight={'from-tertiary-light'}
                            colorDark={'to-tertiary-dark'}
                        />

                    </div>
                </div>

                <div className='mt-[10rem] text-center'>
                    <Button isSubmitButton={false} colorAfter={'after:bg-primary'} textColor={'text-white'} color='bg-primary' text={'Discover all tours'}/>
                </div>


            </section>
        </>
    )
}