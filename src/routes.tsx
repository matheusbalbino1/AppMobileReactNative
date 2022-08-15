import React from "react";
import { Home } from './screens/Home';
import { Cadastrar } from './screens/Cadastrar';
import { NavigationContainer } from '@react-navigation/native';
import Icon from "react-native-vector-icons/Feather";
import { theme } from './global/styles/theme';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export function Routes() {

  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={() => ({
        headerShow: false,
        tabBarActiveTintColor: theme.colors.orange70,
        tabBarInactiveTintColor: theme.colors.white000,
        tabBarLabelPosition: "beside-icon",
        tabBarStyle: {
          backgroundColor: theme.colors.blue80,
          height: 60
        }
      })}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarHideOnKeyboard:true,
            tabBarLabel: "Home",
            headerShown:false,
            tabBarIcon: ({ size, color }) => (<Icon name="home" size={size} color={color} />)
          }} />
        <Tab.Screen name="Cadastrar" component={Cadastrar}
          options={{
            tabBarHideOnKeyboard:true,
            headerShown:false,
            tabBarLabel: "Cadastrar",
            tabBarIcon: ({ size, color }) => (<Icon name="layers" size={size} color={color} />),
          }} />
          
      </Tab.Navigator>

    </NavigationContainer>
  )
}