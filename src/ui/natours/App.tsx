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


export default function App() {
    const [isOpen, setOpen] = useState<boolean>(false);

    const providerValue = useMemo(() => ({isOpen, setOpen}), [isOpen, setOpen])


    console.log(typeof setOpen)

    return (
        <div className={'p-[3rem]'}>
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