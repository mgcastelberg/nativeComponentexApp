
import { StyleSheet, Text, View, Pressable, Animated } from 'react-native';
import { colors } from '../../../config/theme/theme';
import { useRef } from 'react';

export const Animation101Screen = () => {

    const animatedOpacity = useRef( new Animated.Value(0) ).current;

    const fadeIn = () => {
        Animated.timing( animatedOpacity, {toValue:1, duration:300, useNativeDriver:true } ).start( () => console.log('Animation Ended'));
    }

    const fadeOut = () => {
        Animated.timing( animatedOpacity, {toValue:0, duration:300, useNativeDriver:true } ).start( () => console.log('Animation Ended at 0'));
    }

    return (
        <View style={ styles.container }>

            <Animated.View style={[styles.purpleBox, { opacity: animatedOpacity }]} />
            
            <Pressable onPress={ () => fadeIn() } style={{ ...styles.button, marginTop:10 }}>
                <Text style={{ ...styles.buttonText }}>FadeIn</Text>
            </Pressable>
            <Pressable onPress={ fadeOut } style={{ ...styles.button, marginTop:10 }}>
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