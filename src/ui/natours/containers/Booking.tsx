import nat10 from '../../../../public/natours-img/nat-10.jpg';
import Image from "next/image";
import HeaderHoverAnimate from "../components/HeaderHoverAnimate";

export default function Booking() {
    return (
        <>
            <section className='py-[15rem] bg-gradient-to-br from-primary-light to-primary-dark'>
                <div className='max-w-[114rem] mx-auto'>
                    <div style={{backgroundSize: '100%'}}
                         className='h-[50rem] overflow-hidden rounded-[3px] shadow-semiDark relative'>
                        <div className='w-[55%] h-full bg-white absolute z-10 bg-opacity-90 clip-path-b'>
                            <div className='p-[6rem]'>
                                <form action="#" className=''>

                                    <div className='mb-[4rem]'>
                                        <HeaderHoverAnimate text={'Start booking now'}/>
                                    </div>

                                    <div>
                                        <input type="text" placeholder='Full name' id='name' required/>
                                        <label htmlFor="name">Full name</label>
                                    </div>
                                    
                                    <div>
                                        <input type="email" placeholder='Email address' id='email' required/>
                                        <label htmlFor="email">Email address</label>
                                    </div>

                                </form>
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