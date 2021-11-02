import nat10 from '../../../public/natours-img/nat-10.jpg';
import Image from "next/image";
import Form from "../components/Form";

export default function Booking() {
    return (
        <>
            <section className='py-[10rem] lg:py-[15rem] bg-gradient-to-br from-primary-light to-primary-dark'>
                <div className='max-w-[114rem] mx-auto px-4 md:px-0 '>
                    <div className='h-[50rem] overflow-hidden rounded-[3px] shadow-semiDark relative'>
                        <div className='w-full sm:w-[75%] md:w-[55%] h-full bg-white absolute z-10 bg-opacity-90 sm:clip-path-b'>
                            <div className='p-[6rem]'>
                                <Form/>
                            </div>
                        </div>
                        <div className='bg-cover'>
                            <Image src={nat10} layout='fill' alt='nature image' objectFit='cover'/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}