import HeaderHoverAnimate from "./HeaderHoverAnimate";

export default function Form(){
    return(
        <form action="#" autoComplete={'off'}>

            <div className='mb-[4rem]'>
                <HeaderHoverAnimate text={'Start booking now'}/>
            </div>

            <div className='mb-[2rem]'>
                <input className='form_input transition-all duration-300 focus:invalid:border-secondary-dark text-black placeholder-[#999] w-4/5 block border-b-[3px] border-solid border-transparent focus:outline-none focus:shadow-light focus:border-b-[3px] focus:border-solid focus:border-primary text-[1.5rem] py-[1.5rem] px-[2rem] rounded-[2px] bg-white bg-opacity-50 ' type="text" placeholder='Full name' id='name' required />
                <label className='form_label transition-all duration-300 text-[1.2rem] font-bold ml-[2rem] mt-[.7rem] block text-gray-900' htmlFor="name">Full name</label>
            </div>

            <div className='mb-[2rem]'>
                <input className='form_input transition-all duration-300 focus:invalid:border-secondary-dark text-black placeholder-[#999] w-4/5 block border-b-[3px] border-solid border-transparent focus:outline-none focus:shadow-light focus:border-b-[3px] focus:border-solid focus:border-primary text-[1.5rem] py-[1.5rem] px-[2rem] rounded-[2px] bg-white bg-opacity-50 ' type="email" placeholder='Email address' id='email' required />
                <label className='form_label transition-all duration-300 text-[1.2rem] font-bold ml-[2rem] mt-[.7rem] block text-gray-900' htmlFor="email">Email address</label>
            </div>

            <div className='flex space-x-32'>
                <div>
                    <input type="radio" id='small' name='size'/>
                    <label htmlFor="small" className='text-[1.6rem] cursor-pointer relative pl-[4rem] '>
                        <span className='after:opacity-0 after:h-5 after:w-5 after:block after:rounded-full after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-primary absolute left-0 top-[-.4rem] h-[3rem] w-[3rem] border-[5px] border-solid border-primary rounded-full inline-block'/>
                        Small tour group
                    </label>
                </div>

                <div>
                    <input type="radio" id='large' name='size'/>
                    <label htmlFor="large" className='text-[1.6rem] cursor-pointer relative pl-[4rem] '>
                        <span className='after:opacity-0 after:h-5 after:w-5 after:block after:rounded-full after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-primary absolute left-0 top-[-.4rem] h-[3rem] w-[3rem] border-[5px] border-solid border-primary rounded-full inline-block'/>
                        large tour group
                    </label>
                </div>
            </div>

        </form>
    )
}