import 'react-native-gesture-handler';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { NavigationStack } from './presentation/navigation/NavigationStack';
import { PropsWithChildren, useContext } from 'react';
import { ThemeContext, ThemeProvider } from './presentation/context/ThemeContext';

const AppNavigator = ({ children }: PropsWithChildren ) => {
    const { isDark } = useContext(ThemeContext);
    return (
        <NavigationContainer theme={ isDark ? DarkTheme : DefaultTheme } >
            { children}
        </NavigationContainer>
    )
}

const AppTheme = ( { children }: PropsWithChildren ) => {
    return (
        <ThemeProvider>
            <AppNavigator>{ children }</AppNavigator>
        </ThemeProvider>
    )
}


export const ComponentsApp = () => {
    return (
        <AppTheme>
            <NavigationStack/>
        </AppTheme>
    )
}