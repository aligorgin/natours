interface Props {
    text: string;
    num:string
}

export default function NavItem({text,num}: Props) {
    return (
        <>
            <li className='m-[1rem]'>
                <a href="#" style={{backgroundSize:'222%'}} className='inline-block hover:translate-x-[1rem] hover:text-primary py-[1rem] px-[2rem] text-[3rem] font-light text-white uppercase nav-text-hover transition-all duration-300'>
                    <span className='mr-[1.5rem] inline-block'>{num}</span>{text}
                </a>
            </li>
        </>
    )
}