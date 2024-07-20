import React, { Component } from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CategoryScreen from "../screen/CategoryScreen/CategoryScreen";
import CategoryMealsScreen from "../screen/CategoryMealsScreen/CategoryMealsScreen";
import MealDetailScreen from "../screen/MealDetailScreen/MealDetailScreen";
import FavritScreen from "../screen/FavritScreen/FavritScreen";
import FilterScreen from "../screen/FilterScreen/FilterScreen";
import AppTabView from '../component/AppTabView';
import SideDrower from "../component/SideDrower";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
export class Navigation extends Component {
  MealsNavigator = () => {
    return (
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name="Categories" component={CategoryScreen} />
        <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
        <Stack.Screen name="MealDetail" component={MealDetailScreen} />
      </Stack.Navigator>
    );
  };

  FavoriteNavigator = () => {
    return (
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name="Favorite" component={FavritScreen} />
        <Stack.Screen name="MealDetail" component={MealDetailScreen} />
      </Stack.Navigator>
    );
  };

  MealsTabNavigator = () => {
    return (
      <Tab.Navigator headerMode='none' tabBar={(props) => <AppTabView {...props} />} >
        <Tab.Screen name="Meal" component={this.MealsNavigator} />
        <Tab.Screen name="Favorite" component={this.FavoriteNavigator} />
      </Tab.Navigator>
    );
  };

  FilterNavigator = () => {
    return (
      <Stack.Navigator headerMode='none' >
        <Stack.Screen name="Filter" component={FilterScreen} />
      </Stack.Navigator>
    );
  };

  MainNavigator = () => {
    return (
      <Drawer.Navigator drawerContent={(props)=> <SideDrower {...props} />} headerMode='none'>
        <Drawer.Screen name="Meals" component={this.MealsTabNavigator} />
        <Drawer.Screen name="Filter" component={this.FilterNavigator} />
      </Drawer.Navigator>
    );
  };

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode='none'>
          <Stack.Screen name='Main' component={this.MainNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigation;
