import React, {createContext} from "react";

interface MyObj {
    isOpen: boolean ,
    setOpen: React.Dispatch<React.SetStateAction<boolean>> ,
}

export const ModalContext = createContext<MyObj>({
    isOpen: false,
    setOpen: () => {},
})
