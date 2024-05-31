import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { ThemeContext } from '../../context/ThemeContext';
import { colors } from '../../../config/theme/theme';

const CustomAlert = ({ isVisible, onClose, title, message, buttons }:any) => {

    const { colors } = useContext( ThemeContext );
    
    return (
        <Modal isVisible={isVisible} onBackdropPress={onClose}>
            <View style={{...styles.modalContent, backgroundColor: colors.cardBackground}}>
            <Text style={{...styles.title, color: colors.text}}>{title}</Text>
            <Text style={{...styles.message, color: colors.text}}>{message}</Text>
            <View style={styles.buttonContainer}>
                { buttons.map((button:any, index:any) => (
                    <TouchableOpacity
                    key={index}
                    style={[styles.button, { backgroundColor: button.color || '#007BFF' }]}
                    onPress={() => {
                        button.onPress();
                        onClose();
                    }}
                    >
                    <Text style={styles.buttonText}>{button.text}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
    width: '40%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default CustomAlert;