import NavItem from "../components/NavItem";

export default function Nav() {
    return (
        <div>
            <div>
                front
            </div>
            <div className='h-[6rem] w-[6rem] rounded-full fixed right-[6.5rem] top-[6.5rem] radial-gradient-green hover:scale-[50] transition-all duration-500 z-50'>

            </div>
            <nav>
                <ul>
                    <NavItem text={'about natous'}/>
                    <NavItem text={'your benfits'}/>
                    <NavItem text={'popular tours'}/>
                    <NavItem text={'Stories'}/>
                    <NavItem text={'book now'}/>
                </ul>
            </nav>
        </div>
    )
}