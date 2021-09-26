import Image from "next/image";
import logo2x from '../../../../public/natours-img/logo-green-2x.png';
import FooterList from "../components/FooterList";


export default function Footer(){
    return(
        <div className='bg-[#333] py-[10rem] text-[1.4rem]'>

            <div className='mb-[8rem] flex justify-center'>
                <div className='w-[15rem] h-auto '>
                    <Image src={logo2x} alt='full logo' objectFit='cover' className='text-center'/>
                </div>
            </div>


            <div className='max-w-[114rem] mx-auto'>

                <div className='grid grid-cols-2 gap-80'>

                    <div className='border-t-[1px] border-solid border-[#777] pt-[2rem] inline-block'>
                        <ul>
                            <FooterList text={'Company'}/>
                            <FooterList text={'Contact us'}/>
                            <FooterList text={'Carrers'}/>
                            <FooterList text={'Privacy policy'}/>
                            <FooterList isLast={true} text={'Terms'}/>
                        </ul>
                    </div>

                    <div className='w-4/5 border-t-[1px] border-solid border-[#777] pt-[2rem] inline-block'>
                        <p>
                            copyright &copy; by jonas schmedtmann for his course, exercitationem expedita fuga iusto minus molestias nobis optio quasi qui reiciendis sapiente similique suscipit vel vero vitae voluptatibus! Ducimus eos, molestiae quas repellat repudiandae rerum saepe sapiente! Ab accusantium, consectetur consequuntur culpa cumque cupiditate deleniti dolorem dolores enim inventore itaque non odit porro quis quisquam, reiciendis rem totam, veniam voluptate!
                        </p>
                    </div>

                </div>

            </div>
        </div>
    )
}