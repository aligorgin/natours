import NavItem from "../components/NavItem";
import {useState} from "react";
import clsx from "clsx";

export default function Nav() {
    const [isClose, setClose] = useState(true);


    return (
        <div>
            <div onClick={()=>setClose((prevState => !prevState))}
                className={clsx('bg-white h-[7rem] w-[7rem] fixed top-[6rem] right-[6rem] rounded-full z-50')}>
            </div>
            <div
                onClick={() => setClose((prevState => !prevState))}
                className={clsx('h-[6rem] w-[6rem] rounded-full fixed right-[6.5rem] top-[6.5rem] radial-gradient-green z-30 scale-[80]',
                    isClose ? '' : '')}/>
            <nav className='h-screen w-full fixed top-0 left-0 z-40 flex justify-center items-center'>
                <ul className='text-center'>
                    <NavItem num={'01'} text={'about natous'}/>
                    <NavItem num={'02'} text={'your benefits'}/>
                    <NavItem num={'03'} text={'popular tours'}/>
                    <NavItem num={'04'} text={'Stories'}/>
                    <NavItem num={'06'} text={'book now'}/>
                </ul>
            </nav>
        </div>
    )
}