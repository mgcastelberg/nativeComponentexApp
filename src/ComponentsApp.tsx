import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { NavigationStack } from './presentation/navigation/NavigationStack';
import { PropsWithChildren } from 'react';
import { ThemeProvider } from './presentation/context/ThemeContext';


const AppState = ({ children }: PropsWithChildren ) => {
    return (
        <NavigationContainer>
            <ThemeProvider>
                { children}
            </ThemeProvider>
        </NavigationContainer>
    )
}


export const ComponentsApp = () => {
    return (
        <AppState>
            <NavigationStack/>
        </AppState>
    )
}