import Header from "./Header";
import About from "./About";


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