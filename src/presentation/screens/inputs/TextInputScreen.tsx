
import { Text, TextInput, View } from 'react-native'
import { CustomView } from '../../components/ui/CustomView'
import { Title } from '../../components/ui/Title'
import { Card } from '../../components/ui/Card'
import { globalStyles } from '../../../config/theme/theme'
import { useState } from 'react'
import { Separator } from '../../components/ui/Separator'
import { ScrollView } from 'react-native-gesture-handler'
import MaterialInput from '../../components/ui/MaterialInput'

export const TextInputScreen = () => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: ''
    });

    return (
        <ScrollView>

            <CustomView margin >
                <Title text='Text Inputs' safe/>

                <Card>
                    <TextInput
                        style={ globalStyles.input }
                        placeholder='Escribe algo!'
                        autoCapitalize={'words'}
                        autoCorrect={false}
                        onChangeText={ value => setForm({...form, name: value})}
                    />

                    <TextInput
                        style={ globalStyles.input }
                        placeholder='Correo Electronico'
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        keyboardType='email-address'
                        onChangeText={ value => setForm({...form, email: value})}
                    />

                    <TextInput
                        style={ globalStyles.input }
                        placeholder='Teléfono'
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        keyboardType='phone-pad'
                        onChangeText={ value => setForm({...form, phone: value})}
                    />

                    <MaterialInput label="Nombre" />
                    
                    <MaterialInput label="Apellidos" />

                </Card>
                
                <Separator/>
                
                <Card>
                    <Text>{ JSON.stringify(form, null, 2)}</Text>
                    <Text>{ JSON.stringify(form, null, 2)}</Text>
                    <Text>{ JSON.stringify(form, null, 2)}</Text>
                    <Text>{ JSON.stringify(form, null, 2)}</Text>
                    <Text>{ JSON.stringify(form, null, 2)}</Text>
                    <Text>{ JSON.stringify(form, null, 2)}</Text>
                    <Text>{ JSON.stringify(form, null, 2)}</Text>
                </Card>

                <Separator/>

                <Card>

                    <TextInput
                        style={ globalStyles.input }
                        placeholder='Teléfono'
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        keyboardType='phone-pad'
                        onChangeText={ value => setForm({...form, phone: value})}
                    />

                </Card>

                <Separator/>

            </CustomView>
        </ScrollView>
    )
}