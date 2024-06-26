import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { Animation101Screen } from '../screens/animations/Animation101Screen';
import { Animation102Screen } from '../screens/animations/Animation102Screen';
import { SwitchScreen } from '../screens/switches/SwitchScreen';
import { CustomComponentsScreen } from '../screens/customcomponents/CustomComponentScreen';
import { AlertScreen } from '../screens/alerts/AlertScreen';
import { TextInputScreen } from '../screens/inputs/TextInputScreen';
import { PullToRefreshScreen } from '../components/ui/PullToRefreshScreen';
import { CustomSectionListScreen } from '../components/ui/CustomSectionListScreen';
import { ModalScreen } from '../components/ui/ModalScreen';
import { InfiniteScrollScreen } from '../components/ui/InfiniteScrollScreen';
import { SlidesScreen } from '../components/ui/SlidesScreen';
import { ChangeThemeScreen } from '../screens/theme/ChangeThemeScreen';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export type RootStackParams = {
    Home: undefined;
    Animation101Screen: undefined;
    Animation102Screen: undefined;
    SwitchScreen: undefined;
    CustomComponentsScreen: undefined;
    AlertScreen: undefined;
    TextInputScreen: undefined;
    PullToRefreshScreen: undefined;
    CustomSectionListScreen: undefined;
    ModalScreen: undefined;
    InfiniteScrollScreen: undefined;
    SlidesScreen: undefined;
    ChangeThemeScreen: undefined;
}

const Stack = createStackNavigator<RootStackParams>();

export const NavigationStack = () => {

  const { colors } = useContext( ThemeContext );

  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle:{
              backgroundColor: colors.background
            }
        }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
      <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
      <Stack.Screen name="CustomComponentsScreen" component={CustomComponentsScreen} />
      <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
      <Stack.Screen name="AlertScreen" component={AlertScreen} />
      <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
      <Stack.Screen name="PullToRefreshScreen" component={PullToRefreshScreen} />
      <Stack.Screen name="CustomSectionListScreen" component={CustomSectionListScreen} />
      <Stack.Screen name="ModalScreen" component={ModalScreen} />
      <Stack.Screen name="InfiniteScrollScreen" component={InfiniteScrollScreen} />
      <Stack.Screen name="SlidesScreen" component={SlidesScreen} />
      <Stack.Screen name="ChangeThemeScreen" component={ChangeThemeScreen} />
    </Stack.Navigator>
  );
}