import { useRef } from "react";
import { Animated, Easing } from "react-native";

export const useAnimation = () => {


    const animatedOpacity = useRef( new Animated.Value(0) ).current;
    const animatedTop = useRef( new Animated.Value(0) ).current;

    const fadeIn = ({ duration = 300, toValue = 1, callback = ()=>{} }) => {
        // Animated.timing( animatedTop, {
        //     toValue:0, 
        //     duration:700, 
        //     useNativeDriver:true,
        //     easing: Easing.elastic(1) 
        // }).start( () => console.log('Animation Move Ended'));
        Animated.timing( animatedOpacity, {
            toValue:toValue,
            duration: duration,
            useNativeDriver:true
        }).start( callback );
    }

    const fadeOut = ({ duration = 300, toValue = 0, callback = ()=>{} }) => {

        Animated.timing( animatedOpacity, {
            toValue: toValue,
            duration: duration,
            useNativeDriver:true
        }).start( callback );
        
    }

    const startMovingTopPosition = ({ 
        duration = 700, 
        toValue = 0, 
        initialPosition = 0, 
        easingType = Easing.linear, 
        callback = ()=>{} 
    }) => {
        // Animated.timing( animatedOpacity, {toValue:0, duration:300, useNativeDriver:true } ).start( () => console.log('Animation Ended at 0'));
        // Animated.timing( animatedOpacity, {toValue:0, duration:300, useNativeDriver:true } ).start( () => animatedTop.resetAnimation());
        // animatedTop.resetAnimation();
        animatedTop.setValue(initialPosition);
        Animated.timing( animatedTop, {
            duration: duration,
            toValue: toValue,
            useNativeDriver:true,
            easing: easingType
        }).start( callback );
    }

    return {
        // Properties
        animatedOpacity,
        animatedTop,
        // Methods
        fadeIn,
        fadeOut,
        startMovingTopPosition
    }
}
