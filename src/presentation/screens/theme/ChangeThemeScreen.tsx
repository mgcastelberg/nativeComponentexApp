
import { CustomView } from '../../components/ui/CustomView'
import { Title } from '../../components/ui/Title'
import { Button } from '../../components/ui/Button'
import { Separator } from '../../components/ui/Separator'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { Text } from 'react-native'

export const ChangeThemeScreen = () => {

    const { setTheme, currentTheme, colors } = useContext( ThemeContext );

    return (
        <CustomView margin>
            <Title text={`Cambiar tema: ${ currentTheme }`} safe />
            <Button text='Tema Light' onPress={ () => setTheme('light') } />
            <Separator/>
            <Button text='Tema Dark' onPress={ () => setTheme('dark') } />

            <Text style={{ color: colors.text }}>
                { JSON.stringify(colors,null,2) }
            </Text>
        </CustomView>
    )
}