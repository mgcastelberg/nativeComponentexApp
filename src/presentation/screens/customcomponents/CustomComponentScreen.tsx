
import { Text, View } from 'react-native'
import { Card } from '../../components/ui/Card'
import { CustomView } from '../../components/ui/CustomView'
import { Button } from '../../components/ui/Button'

export const CustomComponentsScreen = () => {
    return (
        <CustomView style={{ marginTop:10, paddingHorizontal:10 }}>
            <Card>
                <Text>
                    SwitchScreen
                </Text>
                <Button
                    text='Click Me'
                    onPress={ ()=>{} }
                />
            </Card>
        </CustomView>
    )
}