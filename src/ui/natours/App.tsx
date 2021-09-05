import Header from "./containers/Header";
import About from "./containers/About";


export default function App() {
    return (
            <div className={'p-[3rem]'}>
                <Header/>
                <main>
                    <About/>
                </main>
            </div>
    )

}