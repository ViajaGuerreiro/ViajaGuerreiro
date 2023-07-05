import { createContext, useState } from "react";

export const OpenNavContext = createContext()

export const OpenNavProvider = ({children}) => {
    const [openNav, setOpenNav] = useState(false)

    const toggleNav = () => {
        setOpenNav(!openNav)
    }

    return (
        <OpenNavContext.Provider value={{openNav, toggleNav}}>
            {children}
        </OpenNavContext.Provider>
    )
}