import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { Animation101Screen } from '../screens/animations/Animation101Screen';

export type RootStackParams = {
    Home: undefined;
    Animation101Screen: undefined;
}

const Stack = createStackNavigator<RootStackParams>();

export const NavigationStack = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
    </Stack.Navigator>
  );
}