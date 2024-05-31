
import { Text, TextInput, View } from 'react-native'
import { CustomView } from '../../components/ui/CustomView'
import { Title } from '../../components/ui/Title'
import { Card } from '../../components/ui/Card'
import { globalStyles } from '../../../config/theme/theme'
import { useContext, useState } from 'react'
import { Separator } from '../../components/ui/Separator'
import { ScrollView } from 'react-native-gesture-handler'
import MaterialInput from '../../components/ui/MaterialInput'
import { ThemeContext } from '../../context/ThemeContext'

export const TextInputScreen = () => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const { colors } = useContext( ThemeContext );

    return (
        <ScrollView>

            <CustomView margin >
                <Title text='Text Inputs' safe/>

                <Card>
                    <TextInput
                        style={[
                            globalStyles.input, 
                            { 
                                color: colors.text,
                                backgroundColor: colors.background
                            }
                        ]}
                        placeholder='Escribe algo!'
                        autoCapitalize={'words'}
                        autoCorrect={false}
                        onChangeText={ value => setForm({...form, name: value})}
                        placeholderTextColor={ colors.primary }
                    />

                    <TextInput
                        style={[
                            globalStyles.input, 
                            { 
                                color: colors.text,
                                backgroundColor: colors.background
                            }
                        ]}
                        placeholder='Correo Electronico'
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        keyboardType='email-address'
                        onChangeText={ value => setForm({...form, email: value})}
                        placeholderTextColor={ colors.primary }
                    />

                    <TextInput
                        style={[
                            globalStyles.input, 
                            { 
                                color: colors.text,
                                backgroundColor: colors.background
                            }
                        ]}
                        placeholder='Teléfono'
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        keyboardType='phone-pad'
                        onChangeText={ value => setForm({...form, phone: value})}
                        placeholderTextColor={ colors.primary }
                    />

                    <MaterialInput label="Nombre" />
                    
                    <MaterialInput label="Apellidos" />

                </Card>
                
                <Separator/>
                
                <Card>
                    <Text style={{ color:colors.text }}>{ JSON.stringify(form, null, 2)}</Text>
                    <Text style={{ color:colors.text }}>{ JSON.stringify(form, null, 2)}</Text>
                    <Text style={{ color:colors.text }}>{ JSON.stringify(form, null, 2)}</Text>
                    <Text style={{ color:colors.text }}>{ JSON.stringify(form, null, 2)}</Text>
                    <Text style={{ color:colors.text }}>{ JSON.stringify(form, null, 2)}</Text>
                    <Text style={{ color:colors.text }}>{ JSON.stringify(form, null, 2)}</Text>
                    <Text style={{ color:colors.text }}>{ JSON.stringify(form, null, 2)}</Text>
                </Card>

                <Separator/>

                <Card>

                    <TextInput
                        style={[
                            globalStyles.input, 
                            { 
                                color: colors.text,
                                backgroundColor: colors.background
                            }
                        ]}
                        placeholder='Teléfono'
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        keyboardType='phone-pad'
                        onChangeText={ value => setForm({...form, phone: value})}
                        placeholderTextColor={ colors.primary }
                    />

                </Card>

                <Separator/>

            </CustomView>
        </ScrollView>
    )
}