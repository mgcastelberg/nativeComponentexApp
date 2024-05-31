import React, { useState, useRef, useContext } from 'react';
import { View, TextInput, Animated, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';

interface MaterialInputProps {
  label: string;
}

const MaterialInput: React.FC<MaterialInputProps> = ({ label }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [text, setText] = useState('');

  const animationValue = useRef(new Animated.Value(text || isFocused ? 1 : 0)).current;
  const inputRef = useRef<TextInput>(null);

  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(animationValue, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    if (!text) {
      setIsFocused(false);
      Animated.timing(animationValue, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  };

  const translateY = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -15],
  });

  const { colors } = useContext( ThemeContext );

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => inputRef.current?.focus()}>
        <Animated.Text style={[styles.label, { transform: [{ translateY }] }]}>
          {label}
        </Animated.Text>
      </TouchableWithoutFeedback>
      <TextInput
        ref={inputRef}
        style={[styles.input, { 
          borderBottomColor: isFocused ? 'blue' : 'gray',
          color: colors.text,
        }]}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={(value) => setText(value)}
      />
      <View style={styles.underline} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal:10
  },
  label: {
    position: 'absolute',
    left: 0,
    fontSize: 16,
    color: 'gray',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    fontSize: 16,
    paddingVertical: 5,
  },
  underline: {
    borderBottomWidth: 1,
    borderBottomColor: 'blue',
  },
});

export default MaterialInput;
