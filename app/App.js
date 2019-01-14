/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// In App.js in a new project

import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './component/dashboard';
import LoginScreen from './component/login';
import NewBillScreen from "./component/newbill";
import ViewBillScreen from "./component/viewbill";
import BillDetailScreen from "./component/billdetail";


const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    NewBill: NewBillScreen,
    ViewBill: ViewBillScreen,
    BillDetail: BillDetailScreen
  },
  {
    initialRouteName: "Login"
  }
);

export default createAppContainer(AppNavigator);