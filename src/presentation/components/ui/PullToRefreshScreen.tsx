
import { RefreshControl, Text, View } from 'react-native'
import { Title } from './Title'
import { ScrollView } from 'react-native-gesture-handler'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useContext, useState } from 'react'
import { globalStyles } from '../../../config/theme/theme'
import { ThemeContext } from '../../context/ThemeContext'

export const PullToRefreshScreen = () => {

    const { top } = useSafeAreaInsets();
    const [isRefresing, setIsRefresing] = useState(false);
    const onRefresh = () =>{
        setIsRefresing(true);
        setTimeout(() => {
            setIsRefresing(false);
        }, 3000);
    }
    const { colors } = useContext( ThemeContext );

    return (
        <ScrollView refreshControl={ 
                <RefreshControl 
                    refreshing={isRefresing} 
                    progressViewOffset={top}
                    colors={[ colors.primary, 'red', 'orange','green']}
                    onRefresh={ onRefresh }
                />
            }
            style={ [ 
                globalStyles.mainContainer, 
                globalStyles.globalMargin,
                { backgroundColor: colors.background }

            ]}
        >
        
                <Title text='Pull to refresh'/>

        </ScrollView>
    )
}