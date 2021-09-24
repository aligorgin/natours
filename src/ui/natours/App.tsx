import Header from "./containers/Header";
import About from "./containers/About";
import Features from "./containers/Features";
import Tours from "./containers/Tours";
import Stories from "./containers/Stories";
import Booking from "./containers/Booking";


export default function App() {
    return (
        <div className={'p-[3rem]'}>
            <Header/>
            <main>
                <About/>
                <Features/>
                <Tours/>
                <Stories/>
                <Booking/>
            </main>
        </div>
    )

}