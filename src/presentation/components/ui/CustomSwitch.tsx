
import { Platform, StyleSheet, Text, View } from 'react-native'
import { Switch } from 'react-native-gesture-handler'
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

interface Props {
    isOn: boolean;
    text?: string;

    onChange:( value: boolean) => void;
}

export const CustomSwitch = ({ isOn, text, onChange }:Props) => {

    const { colors } = useContext( ThemeContext );

    return (
        <View  style={ styles.switchRow } >

            {
                text && (<Text style={{ color: colors.text }} >{text}</Text>)
            }
            

            {/* thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'} */}
            {/* thumbColor={ Platform.OS === 'android' ? colors.primary : '' } */}
            <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={ isOn ? colors.primary : '#f4f3f4' }
                ios_backgroundColor="#3e3e3e"
                onValueChange={onChange}
                value={isOn}
            />
        </View>
    )
}

const styles= StyleSheet.create({
    switchRow: {
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical:5
    }
}) 