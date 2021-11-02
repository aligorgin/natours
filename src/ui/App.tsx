import Header from "./containers/Header";
import About from "./containers/About";
import Features from "./containers/Features";
import Tours from "./containers/Tours";
import Stories from "./containers/Stories";
import Booking from "./containers/Booking";
import Footer from "./containers/Footer";
import Nav from "./containers/Nav";
import PopUp from "./containers/PopUp";
import {ModalContext} from "./providers/ModalContext";
import React, {ReactNode, useMemo, useState} from "react";


interface MyObj {
    isOpen: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function App() {
    const [isOpen, setOpen] = useState<boolean>(false);

    const providerValue = useMemo<MyObj>(() => ({isOpen, setOpen}), [isOpen, setOpen])

    return (
        <div className={'lg:p-[3rem]'}>
            <ModalContext.Provider value={providerValue}>
                <Nav/>
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
                <PopUp/>
            </ModalContext.Provider>

        </div>
    )

}