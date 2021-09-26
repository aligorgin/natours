import Image from "next/image";
import logo2x from '../../../../public/natours-img/logo-green-2x.png';


export default function Footer(){
    return(
        <div>
            <div>
                <Image src={logo2x} alt='full logo' objectFit='cover'/>
            </div>
            <div className='max-w-[114rem] mx-auto'>
                <div className='grid grid-cols-2'>

                    <div>
                        <ul>
                            components to loop these a tags
                        </ul>
                    </div>

                    <div>

                    </div>

                </div>
            </div>
        </div>
    )
}