import 'react-native-gesture-handler';
import { Text, View } from 'react-native'
import { HomeScreen } from './presentation/screens/home/HomeScreen'
import { NavigationContainer } from '@react-navigation/native'
import { NavigationStack } from './presentation/navigation/NavigationStack';

export const ComponentsApp = () => {
    return (
        <NavigationContainer>
            <NavigationStack/>
        </NavigationContainer>
    )
}