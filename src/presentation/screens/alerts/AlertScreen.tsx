
import { Alert, Text, View } from 'react-native'
import { CustomView } from '../../components/ui/CustomView'
import { Title } from '../../components/ui/Title'
import { globalStyles } from '../../../config/theme/theme'
import { Button } from '../../components/ui/Button'
import { Separator } from '../../components/ui/Separator'

export const AlertScreen = () => {


    const createTwoButtonAlert = () => {

        Alert.alert('Alert Title', 'My Alert Msg', [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'destructive',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],{
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
        ]);

        // No funciona en aindroid
        const showPrompt = () => {
            Alert.prompt(
                'Correo electronico',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto natus',
                (valor: string) => console.log(valor),
                'secure-text',
                'valor por defecto'
            );
        }
    

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
                onPress={ showPrompt }
            />

            <Separator/>


        </CustomView>
    )
}