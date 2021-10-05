import nat10 from '../../../../public/natours-img/nat-10.jpg';
import Image from "next/image";
import Form from "../components/Form";

export default function Booking() {
    return (
        <>
            <section className='py-[10rem] lg:py-[15rem] bg-gradient-to-br from-primary-light to-primary-dark'>
                <div className='max-w-[114rem] mx-auto'>
                    <div style={{backgroundSize: '100%'}}
                         className='h-[50rem] overflow-hidden rounded-[3px] shadow-semiDark relative'>
                        <div className='w-[55%] h-full bg-white absolute z-10 bg-opacity-90 clip-path-b'>
                            <div className='p-[6rem]'>
                                <Form/>
                            </div>
                        </div>
                        <Image src={nat10} layout='responsive' alt='nature image' objectFit='cover'
                               className='bg-cover'/>
                    </div>
                </div>
            </section>
        </>
    )
}