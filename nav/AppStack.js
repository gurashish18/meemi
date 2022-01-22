import React from 'react'
import {Image} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons'
import HomeScreen from '../Screens/HomeScreen';
import CategoriesScreen from '../Screens/CategoriesScreen'
import ProfileScreen from '../Screens/ProfileScreen'
import ProductsScreen from '../Screens/ProductsScreen'
import ProductScreen from '../Screens/ProductScreen'
import WishlistScreen from '../Screens/WishlistScreen'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator();

const ProductStack = () => {
    return (
            <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen name="Categories" component={CategoriesScreen} />
                    <Stack.Screen name="Products" component={ProductsScreen} />
                    <Stack.Screen name="Product" component={ProductScreen} /> 
                    <Stack.Screen name="Wishlist" component={WishlistScreen} /> 
            </Stack.Navigator>
    )
}

const AppStack = () => {
    return (
        <Tab.Navigator
            initialRouteName="Categories Screen"
            screenOptions={{
                tabBarActiveTintColor: '#000000',
                headerShown: false,
                tabBarStyle: { backgroundColor: '#ffffff' },
            }}>
                <Tab.Screen
                    name="Home Screen"
                    component={HomeScreen}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                        <Image source={require('../assets/logo.png')} style={{height: 40, width: 40, resizeMode: 'contain'}}/>
                        ),
                }}/>
                <Tab.Screen
                    name="Categories Screen"
                    component={ProductStack}
                    options={{
                        tabBarLabel: 'Categories',
                        tabBarIcon: ({ color, size }) => (
                            <Image source={require('../assets/category.png')} style={{height: 40, width: 40, resizeMode: 'contain'}}/>
                        ),
                }}/>
                <Tab.Screen
                    name="Profile Screen"
                    component={ProfileScreen}
                    options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <Image source={require('../assets/profile.png')} style={{height: 60, width: 60, resizeMode: 'contain'}}/>
                    ),
                }}/>
        </Tab.Navigator>
    )
}

export default AppStack
