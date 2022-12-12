import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {useNavigation} from '@react-navigation/native';

const Register = () => {  
  // const navigation = useNavigation();
return (
    <View style={styles.container}>
      <Text style={styles.text}>Register</Text>
      <View style={styles.container1}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="white"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="white"
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="white"
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Register</Text>
        </TouchableOpacity>
        <Text style={styles.text2}>Already have an account? Sign In</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  container1: {
    width: '80%',
  },
  input: {
    backgroundColor: '#1B2430',
    width: '100%',
    height: 50,
    borderRadius: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#1B2430',
    width: '100%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  textButton: {
    color: '#fff',
    fontSize: 20,
  },
  text2: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
  },
});

export default Register;
