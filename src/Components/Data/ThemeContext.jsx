import { createContext, useState } from 'react'

import { themeData } from './ThemeData'

export const ThemeContext = createContext()
const ThemeContextProvider = (props) => {
    const [theme, setTheme] = useState(themeData.theme)
    const [drawerOpen, setDrawerOpen] = useState(false)

    const setHandleDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }



    const value = { theme, drawerOpen, setHandleDrawer }
    return (
                <ThemeContext.Provider value={value}>
                    {props.children}
                </ThemeContext.Provider>
            )
};

export default ThemeContextProvider;