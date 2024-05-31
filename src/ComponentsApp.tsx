import 'react-native-gesture-handler';
import { NavigationStack } from './presentation/navigation/NavigationStack';
import { ThemeProvider } from './presentation/context/ThemeContext';

export const ComponentsApp = () => {
    return (
        <ThemeProvider>
            <NavigationStack/>
        </ThemeProvider>
    )
}