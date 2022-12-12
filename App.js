import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import icon from 'react-native-vector-icons/FontAwesome';

import splashscr from './source/root/splashscr';
import login from './source/root/login';
import register from './source/root/register';
import main from './source/main_models/main';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Roothome = () => {  
  return (
    <Tab.Navigator
      initialRouteName="myday"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: '#694fad' }}>
      <Tab.Screen
        name="myday"
        component={myday}
        options={{
          tabBarLabel: 'My Day',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="task"
        component={task}
        options={{
          tabBarLabel: 'Task',
          tabBarIcon: ({ color }) => (
            <Icon name="list" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="important"
        component={important}
        options={{
          tabBarLabel: 'Important',
          tabBarIcon: ({ color }) => (
            <Icon name="star" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="completed"
        component={completed}
        options={{
          tabBarLabel: 'Completed',
          tabBarIcon: ({ color }) => (
            <Icon name="check" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="settings"
        component={settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => (
            <Icon name="settings" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splashscr">
        <Stack.Screen name="splashscr" component={splashscr} options={{headerShown: false}} />
        <Stack.Screen name="login" component={login} options={{headerShown: false}} />
        <Stack.Screen name="register" component={register} options={{headerShown: false}} />
        <Stack.Screen name="main" component={Roothome} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;