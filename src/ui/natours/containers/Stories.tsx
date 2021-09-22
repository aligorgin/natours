import HeaderHoverAnimate from "../components/HeaderHoverAnimate";
import StoriesCard from "../components/StoriesCard";

export default function Stories(){
    return(
        <>
            <section className='py-[15rem] bg-gray-100'>
                <div className='mb-[8rem] text-center'>
                    <HeaderHoverAnimate text={'we make people genuinely happy'}/>
                </div>

                <div className='max-w-[114rem] mx-auto'>
                    <StoriesCard text={'text'}/>
                </div>
            </section>
        </>
    )
}