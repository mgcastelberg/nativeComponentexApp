
import { useState } from 'react'
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native'
import { CustomView } from './CustomView'
import { Title } from './Title'
import { colors } from '../../../config/theme/theme'

export const InfiniteScrollScreen = () => {

    const [numbers, setNumbers] = useState([0,1,2,3,4,5])

    const loadMore = () => {
        
        console.log('Loading more');

        // Todo añadir numeros a nuestro arreglo
        const newArray = Array.from({ length: 5 }, (_, i) => numbers.length + i );

        setTimeout(() => {
            // esparcimos los numeros anteriore
            setNumbers( [ ...numbers, ...newArray] );
            
        }, 3000);
    }

    return (
        <View style={{ backgroundColor: 'black'}}>
            {/* <Title text='Infinite Scroll' safe /> */}
            <FlatList 
                data={numbers}
                onEndReached={ loadMore }
                onEndReachedThreshold={ 0.6 } //para que carge antes de llegar al final
                keyExtractor={ ( item ) => item.toString() }
                renderItem={ ({item})=> <ListItem number={item}/>}
                ListFooterComponent={ () => (
                    <View style={{ height:150, justifyContent:'center' }}>
                        <ActivityIndicator size={ 40 } color={ colors.primary } />
                    </View>
                )}
            />
        </View>
    )
}


interface ListItemProps {
    number: number;
}

const ListItem = ({ number }:ListItemProps) => {
    return (
        <Image  
            source={{ uri: `https://picsum.photos/id/${number}/500/400`}}
            style={{
                height: 400,
                width: '100%',
            }}
        />
        // <Text style={{ height:300, backgroundColor: colors.primary, color: 'white', fontSize:50, padding:10 }}>{ number }</Text>
    )
  }