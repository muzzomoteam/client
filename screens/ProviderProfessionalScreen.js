import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProviderProfessionalScreen = () => {
  const navigation = useNavigation();
  const proNavigation = () => {
    navigation.navigate('ProLogin');
  }
  const userNavigation = () => {
    navigation.navigate('UserLogin');
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={userNavigation}>
        <Text style={styles.buttonText}>User Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.proButton]} onPress={proNavigation}>
        <Text style={styles.buttonText}>Pro Login</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ProviderProfessionalScreen

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      backgroundColor: '#3498db',
      paddingVertical: 15,
      paddingHorizontal: 40,
      borderRadius: 5,
      marginVertical: 10,
    },
    proButton: {
      backgroundColor: '#e74c3c',
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });