import Header from "./containers/Header";
import About from "./containers/About";
import Features from "./containers/Features";


export default function App() {
    return (
            <div className={'p-[3rem]'}>
                <Header/>
                <main>
                    <About/>
                    <Features/>
                </main>
            </div>
    )

}