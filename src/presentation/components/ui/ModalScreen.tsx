
import { Modal, Text, View } from 'react-native'
import { CustomView } from './CustomView'
import { Title } from './Title'
import { Button } from './Button'
import { useState } from 'react'

export const ModalScreen = () => {

    const [isVisible, setIsVisible] = useState(false);

    return (
        <CustomView margin>
            <Title text='Modal' safe/>

            <Button text='Abrir Modal' onPress={ () => setIsVisible(true) }></Button>

            <Modal 
                visible={isVisible}
                animationType='slide'
            >
                <View style={{ flex:1, backgroundColor: 'rgba(0,0,0,0.1)'}}>
                    <View style={{ paddingHorizontal: 10}}>
                        <Title text='Modal Content' safe />
                    </View>
                    <View style={{ flex: 1 }}>
                    </View>
                    <Button text='Cerrar Modal' onPress={ () => setIsVisible(false) }
                        styles={{ height:40, borderRadius:0 }}
                    ></Button>
                </View>
            </Modal>

        </CustomView>
    )
}