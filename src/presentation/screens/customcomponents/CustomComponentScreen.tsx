
import { Text, View } from 'react-native'
import { Card } from '../../components/ui/Card'
import { CustomView } from '../../components/ui/CustomView'
import { Button } from '../../components/ui/Button'
import { SubTitle } from '../../components/ui/SubTitle'

export const CustomComponentsScreen = () => {
    return (
        <CustomView margin >
            <Card style={{ marginTop:20, paddingHorizontal:10 }}>
                <SubTitle text='Custom Components' backgroundColor='transparent'/>
                <Button
                    text='Click Me'
                    onPress={ ()=>{} }
                />
            </Card>
        </CustomView>
    )
}