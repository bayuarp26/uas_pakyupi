import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const main = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <TouchableOpacity style={styles.button}>
          <Icon name="home" size={30} color="#fff" />
      <Text style={styles.text}>My Day</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.container1}>
        <TouchableOpacity style={styles.button}>
          <Icon name="tasks" size={30} color="#fff" />
      <Text style={styles.text}>Task</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.container1}>
        <TouchableOpacity style={styles.button}>
          <Icon name="star" size={30} color="#fff" />
      <Text style={styles.text}>Important</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.container1}>
        <TouchableOpacity style={styles.button}>
          <Icon name="check" size={30} color="#fff" />
      <Text style={styles.text}>Completed</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.container1}>
        <TouchableOpacity style={styles.button}>
          <Icon name="cog" size={30} color="#fff" />
      <Text style={styles.text}>Settings</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.container1}>
        <TouchableOpacity style={styles.button}>
          <Icon name="info" size={30} color="#fff" />
      <Text style={styles.text}>About</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
  },
  container1: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#1E1E1E',
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default main;
