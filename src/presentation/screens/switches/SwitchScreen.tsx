
import { Text, View } from 'react-native'
import { CustomView } from '../../components/ui/CustomView'
import { Card } from '../../components/ui/Card'
import { Switch } from 'react-native-gesture-handler'
import { useState } from 'react'
import { CustomSwitch } from '../../components/ui/CustomSwitch'
import { colors } from '../../../config/theme/theme'
import { Separator } from '../../components/ui/Separator'

export const SwitchScreen = () => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [state, setState] = useState({
        isActive:true,
        isHungry:false,
        isHappy:true
    });

    return (
        <CustomView style={{ marginTop:10, paddingHorizontal:10 }}>
            <Card>
                <Text style={{ color: colors.text }}> Componente Directo Native</Text>
                <Switch
                    trackColor={{false: '#767577', true: '#81b0ff'}}
                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </Card>

            <Separator space={5} />
            
            <Card>
                <CustomSwitch
                    isOn={ isEnabled }
                    onChange={ () => toggleSwitch() }
                    text= "Encendido"
                />
            </Card>

            <Separator />

            <Card>
                <CustomSwitch
                    isOn={ state.isActive }
                    onChange={ (value) => setState({ ...state, isActive: value }) }
                    text= "¿Está activo?"
                />
            </Card>

            <Separator />

            <Card>
                <CustomSwitch
                    isOn={ state.isHungry }
                    onChange={ (value) => setState({ ...state, isHungry: value }) }
                    text= "¿Tiene hambre?"
                />
            </Card>

            <Separator />

            <Card>
                <CustomSwitch
                    isOn={ state.isHappy }
                    onChange={ (value) => setState({ ...state, isHappy: value }) }
                    text= "¿Es feliz?"
                />
            </Card>
        </CustomView>
    )
}