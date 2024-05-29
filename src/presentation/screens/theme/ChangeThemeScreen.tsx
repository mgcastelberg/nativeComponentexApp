
import { CustomView } from '../../components/ui/CustomView'
import { Title } from '../../components/ui/Title'
import { Button } from '../../components/ui/Button'
import { Separator } from '../../components/ui/Separator'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

export const ChangeThemeScreen = () => {

    const { setTheme, currentTheme } = useContext( ThemeContext );

    return (
        <CustomView margin>
            <Title text={`Cambiar tema: ${ currentTheme }`} safe />
            <Button text='Tema Light' onPress={ () => setTheme('light') } />
            <Separator/>
            <Button text='Tema Dark' onPress={ () => setTheme('dark') } />
        </CustomView>
    )
}