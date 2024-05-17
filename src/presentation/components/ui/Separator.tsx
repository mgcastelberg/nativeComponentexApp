
import { StyleProp, View, ViewStyle } from 'react-native'
import { colors } from '../../../config/theme/theme';

interface Props {
    style?: StyleProp<ViewStyle>;
    space?: number;
    heightline?: number;
}

export const Separator = ({space = 5, heightline = 0}:Props) => {
    return (
        <View style={[
            {
                alignSelf:'center',
                opacity:0.3,
                backgroundColor: 'gray',
                width: '90%',
                height: heightline,
                marginVertical: space
            }
        ]} />
    )
}