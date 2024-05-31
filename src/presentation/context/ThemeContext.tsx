import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { darkColors, ligthColors, ThemeColors } from '../../config/theme/theme';
import { Appearance, AppState, useColorScheme } from "react-native";

type ThemeColor = 'light' | 'dark';

interface ThemeContextProps {
    currentTheme: ThemeColor;
    colors: ThemeColors;
    isDark: boolean;

    setTheme: ( theme: ThemeColor ) => void;
}

export const ThemeContext = createContext( {} as ThemeContextProps );


export const ThemeProvider = ({ children }:PropsWithChildren) => {

    const colorsScheme = useColorScheme();

    const [currentTheme, setCurrentTheme] = useState<ThemeColor>('light')

    useEffect(() => {
        // console.log(colorsScheme);
        if (colorsScheme === 'dark') {
            setCurrentTheme('dark');
        } else {
            setCurrentTheme('light');
        }
    }, [colorsScheme]);

    // useEffect(() => {
    //     const subscription = AppState.addEventListener('change', nextAppState => {
    //         // console.log( {nextAppState} );
    //         // cambiar el color a traves del stado de la applicacion
    //         const colorScheme = Appearance.getColorScheme();
    //         setCurrentTheme( colorScheme === 'dark' ? 'dark' : 'light');
    //     });
    
    //     return () => {
    //       subscription.remove();
    //     };
    //   }, []);

    const setTheme = (theme: ThemeColor) => {
        console.log(theme);
        setCurrentTheme(theme);
    }

    return ( 
        <ThemeContext.Provider
            value={{
                currentTheme: currentTheme,
                isDark: currentTheme ==='light' ? false : true,
                colors: currentTheme ==='light' ? ligthColors : darkColors,
                setTheme: setTheme
            }}
        >
            { children }
        </ThemeContext.Provider>
    )
}