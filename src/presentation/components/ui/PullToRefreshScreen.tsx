
import { RefreshControl, Text, View } from 'react-native'
import { Title } from './Title'
import { ScrollView } from 'react-native-gesture-handler'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useState } from 'react'
import { colors, globalStyles } from '../../../config/theme/theme'

export const PullToRefreshScreen = () => {

    const { top } = useSafeAreaInsets();
    const [isRefresing, setIsRefresing] = useState(false);
    const onRefresh = () =>{
        setIsRefresing(true);
        setTimeout(() => {
            setIsRefresing(false);
        }, 3000);
    }

    return (
        <ScrollView refreshControl={ 
                <RefreshControl 
                    refreshing={isRefresing} 
                    progressViewOffset={top}
                    colors={[ colors.primary, 'red', 'orange','green']}
                    onRefresh={ onRefresh }
                />
            }
            style={ [ globalStyles.mainContainer, globalStyles.globalMargin]}
        >
        
                <Title text='Pull to refresh'/>

        </ScrollView>
    )
}