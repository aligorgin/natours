import Header from "./containers/Header";
import About from "./containers/About";
import Features from "./containers/Features";
import Tours from "./containers/Tours";
import Stories from "./containers/Stories";
import Booking from "./containers/Booking";
import Footer from "./containers/Footer";


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
            <footer>
                <Footer/>
            </footer>
        </div>
    )

}