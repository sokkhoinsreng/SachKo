import React from "react";
import { createTabNavigator } from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "../screen/Home";
import FormAddProduct from '../screen/addProductForm/index';
import testUploadImage from '../component/testUploadImage'

const color = "#373737";
const activeColor = "#F15C53";
const AppRouting = createTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: "New Feeds",
        tabBarIcon: ({ focused }) =>
          focused ? (
            <Ionicons
              name="ios-home"
              size={24}
              iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
              color={activeColor}
            />
          ) : (
            <Ionicons
              name="ios-home-outline"
              size={24}
              iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
              color={color}
            />
          )
      }
    },
    Product: {
      screen: FormAddProduct ,
      navigationOptions: {
        title: "AddProduct",
        tabBarIcon: ({ focused }) =>
          focused ? (
            <Ionicons
              name="ios-menu"
              size={24}
              iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
              color={activeColor}
            />
          ) : (
            <Ionicons
              name="ios-menu-outline"
              size={24}
              iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
              color={color}
            />
          )
      }
    },
  },
  {
    removeClippedSubviews : true,
    initialRouteName: "Home",
    tabBarPosition: "bottom",
    animationEnabled: true,
    activeTintColor: activeColor,
    inActiveTintColor: color,
    lazy: true,
    tabBarOptions: {
        swipeEnabled: true,
        showLabel: true,
        showIcon: true,
        labelStyle : {
            fontSize: 12,
            fontWeight: '300'
        },
        activeTintColor : activeColor,
        style: {
            elevation: 0,
            borderTopWidth: 1,
            borderTopColor: '#F0F0F5',
            backgroundColor: '#fff',
            paddingTop: 5,
        },
        indicatorStyle: {
            backgroundColor: '#fff',
        },
    },
  }
);
export default AppRouting;