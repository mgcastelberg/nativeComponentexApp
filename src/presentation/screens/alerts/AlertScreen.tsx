
import { Alert, Text, View } from 'react-native'
import { CustomView } from '../../components/ui/CustomView'
import { Title } from '../../components/ui/Title'
import { colors, globalStyles } from '../../../config/theme/theme'
import { Button } from '../../components/ui/Button'
import { Separator } from '../../components/ui/Separator'
import { showPrompt } from '../../../config/adapters/promp.adapters';
import { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import CustomAlert from '../../components/ui/CustomAlert';

export const AlertScreen = () => {

    const {colors, isDark } = useContext( ThemeContext );

    const createTwoButtonAlert = () => {

        Alert.alert('Alert Title', 'My Alert Msg', [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'destructive',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],{
                userInterfaceStyle: isDark ? 'dark' : 'light',
                cancelable: true,
                onDismiss(){
                    console.log('onDismiss');
                }
            });
        }

      const createThreeButtonAlert = () =>
        Alert.alert('Alert Title', 'My Alert Msg', [
          {
            text: 'Ask me later',
            onPress: () => console.log('Ask me later pressed'),
          },
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],{
            userInterfaceStyle: isDark ? 'dark' : 'light',
        });

        // No funciona en aindroid
        const onShowPrompt = () => {
            showPrompt({
                title: 'Hola Mundo',
                subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elite',
                buttons: [
                    {text: 'Cancel', onPress: () => console.log('Cancel Pressed')},
                    {text: 'OK', onPress: (value:any) => console.log('OK Pressed, password: ' + value)},
                ],
                placeholder: 'Placeholder'
            });
        }

        // Custom alert thowModal
        const [isAlertVisible, setAlertVisible] = useState(false);

        const showAlert = () => {
            setAlertVisible(true);
        };

        const closeAlert = () => {
            setAlertVisible(false);
        };
    

    return (
        <CustomView style={ globalStyles.globalMargin}>
            <Title safe text='Alertas'/>

            <Button 
                text="Alerta - 2 Botones"
                onPress={ createTwoButtonAlert }
            />

            <Separator/>
            
            <Button 
                text="Alerta - 3 Botones"
                onPress={ createThreeButtonAlert }
            />

            <Separator/>
            
            <Button 
                text="Alerta - Input"
                onPress={ onShowPrompt }
            />

            <Separator/>

            <Button text="Show Alert" onPress={ showAlert } />
            <CustomAlert
                isVisible={isAlertVisible}
                onClose={closeAlert}
                title="Alert Title"
                message="My Alert Msg"
                buttons={[
                    {
                      text: 'Cancel',
                      onPress: () => console.log('Cancel Pressed'),
                      color: colors.buttonDanger, // Optional: Customize button color
                    },
                    {
                      text: 'OK',
                      onPress: () => console.log('OK Pressed'),
                      color: colors.primary, // Optional: Customize button color
                    },
                ]}
            />


        </CustomView>
    )
}