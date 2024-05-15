
import { StyleSheet, Text, View, Pressable, Animated, Easing } from 'react-native';
import { colors } from '../../../config/theme/theme';
import { useAnimation } from '../../hooks/useAnimation';

export const Animation101Screen = () => {

    const { fadeIn, fadeOut, startMovingTopPosition, animatedOpacity, animatedTop } = useAnimation();

    return (
        <View style={ styles.container }>

            <Animated.View style={[styles.purpleBox, { 
                opacity: animatedOpacity, 
                transform: [{
                    translateY: animatedTop 
                }]
            }]} />
            
            <Pressable onPress={ () => {
                fadeIn({});
                startMovingTopPosition({ initialPosition:-150, easingType: Easing.elastic(1), duration:700 });
            }} style={{ ...styles.button, marginTop:10 }}>
                <Text style={{ ...styles.buttonText }}>FadeIn</Text>
            </Pressable>
            <Pressable onPress={ () => {
                fadeOut({});
                startMovingTopPosition({ initialPosition:0, toValue:-150, easingType: Easing.elastic(1), duration:700 });
            }} style={{ ...styles.button, marginTop:10 }}>
                <Text style={{ ...styles.buttonText }}>FadeOut</Text>
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    purpleBox: {
        backgroundColor: colors.primary,
        width: 150,
        height: 150,
        marginBottom:5
    },
    button:{
        height:40,
        width:120,
        backgroundColor:colors.primary,
        borderRadius:50,
        justifyContent:'center',
        textAlign:'center',
        marginTop:15
    },
    buttonText: {
        textAlign:'center',
        padding:10,
        fontSize:14,
        color:'white',
        fontWeight:'300'
    }

});