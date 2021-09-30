import NavItem from "../components/NavItem";
import {useState} from "react";
import clsx from "clsx";

export default function Nav() {
    const [isClose, setClose] = useState(true);

    // note : the hot nav items is because of cubic custom after and the with from 0 to 100 and a bit bigger
    //        cause of cubic custom after.

    return (
        <div>
            <div onClick={() => setClose((prevState => !prevState))}
                 className={clsx('cursor-pointer group flex flex-col items-center justify-center bg-white h-[7rem] w-[7rem] fixed top-[6rem] right-[6rem] rounded-full z-50 shadow-moreLight')}>

                <span className={clsx('w-[3rem] h-[2px] bg-[#333] inline-block  transition-all', isClose ? 'mb-2 group-hover:mb-3' : "rotate-135  -mb-2")}/>

                <span className={clsx('w-[3rem] h-[2px] inline-block  transition-all', isClose ? 'bg-[#333] mb-2 group-hover:mb-3' : 'bg-transparent mb-0')}/>

                <span className={clsx('w-[3rem] h-[2px] bg-[#333] inline-block', isClose ? '' : '-rotate-135 ')}/>

            </div>
            <div
                className={clsx('h-[6rem] w-[6rem] rounded-full fixed right-[6.5rem] top-[6.5rem] radial-gradient-green z-30 cubic-custom',
                    isClose ? '' : 'scale-[90]')}/>
            <nav className={clsx('h-screen fixed top-0 left-0 z-40 flex justify-center items-center cubic-custom-after',
                isClose ? 'w-0 opacity-0' : 'w-full opacity-100')}>
                <ul className='text-center w-full'>
                    <NavItem num={'01'} text={'about natous'}/>
                    <NavItem num={'02'} text={'your benefits'}/>
                    <NavItem num={'03'} text={'popular tours'}/>
                    <NavItem num={'04'} text={'Stories'}/>
                    <NavItem num={'05'} text={'book now'}/>
                </ul>
            </nav>
        </div>
    )
}