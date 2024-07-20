import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from 'react-navigation-drawer';
import Colors from "../constant/Colors";
import CategoryScreen from "../screen/CategoryScreen/CategoryScreen";
import CategoryMealsScreen from "../screen/CategoryMealsScreen/CategoryMealsScreen";
import MealDetailScreen from "../screen/MealDetailScreen/MealDetailScreen";
import FavritScreen from "../screen/FavritScreen/FavritScreen";
import FilterScreen from '../screen/FilterScreen/FilterScreen'
import Icon from "react-native-vector-icons/FontAwesome";


const defaultNavigation = {
  headerStyle: {
    backgroundColor: Colors.primary,
  },
  headerTintColor: "white",
  headerTitleStyle: {
    fontWeight: "400",
  }}


  

const MealsNavigation = createStackNavigator(
  {
    Categories: CategoryScreen,
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
   // initialRouteName:'MealDetail',
    defaultNavigationOptions: defaultNavigation,
  }
);

const FavoriteNavigator = createStackNavigator({
  Favorite:FavritScreen,
  MealDetail : MealDetailScreen
},{
  defaultNavigationOptions: defaultNavigation
})

const MealsTabNavigator = createBottomTabNavigator({
  Meal: { screen: MealsNavigation, navigationOptions: {
    tabBarIcon: tebInfo => {return(<Icon name='arrow-up' size={20} color={tebInfo.tintColor} />)}
  }},
  Favorite: {screen: FavoriteNavigator , navigationOptions: {
    tabBarIcon: tebInfo => {return(<Icon name='star' size={20} color={tebInfo.tintColor} />)}
  }},
},{
  tabBarOptions:{
    activeTintColor:'white',      
    activeBackgroundColor:Colors.primary,
  }
});

const FilterNavigator = createStackNavigator({
  Filter:FilterScreen
},{
  defaultNavigationOptions: defaultNavigation
})

const MainNavigator = createDrawerNavigator({
  Meals:MealsTabNavigator,
  Filter:FilterNavigator
},{
  contentOptions:{
    activeTintColor:Colors.primary,
    inactiveTintColor:Colors.accent
  }
})

// const SideMenu = createDrawerNavigator({
//   tab: MealsTabNavigator,
//    Filter:FilterScreen
// })

// const mainStack = createStackNavigator({
//   home:SideMenu
// })
export default createAppContainer(MainNavigator);


