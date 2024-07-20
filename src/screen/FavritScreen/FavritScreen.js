import React, {Component} from 'react';
import {View} from 'react-native';
import MealList from '../../component/MealList';
import favrit_S_Style from './favrit_S_Style';
import { connect } from "react-redux";
import HaderButton from '../../component/HaderButton';
import DefultText from '../../component/DefultText'
import AppHeder from '../../component/AppHeder';

export class FavritScreen extends Component {

  // static navigationOptions =(navData) => {
  //   return{
  //    headerTitle: 'Favorite Meals', 
  //    headerLeft: () => (
  //      <HaderButton
  //        onPress={() => {navData.navigation.toggleDrawer();}}    
  //       iconName = 'ios-menu'
  //        color = 'white'
  //        size = {20}             
  //      />
  //    ),   
  //   }
  //  };
  headerHandeler = () =>{
    return(
      <AppHeder      
      title='Favorites'
      rightBtn={false}
      leftBtn={true}
      leftIcon = 'ios-menu' 
      leftPress={()=>this.props.navigation.toggleDrawer()}             
    />  
    )
  }

  render() {
    const fav = this.props.meals.fav;
    const favMeals = this.props.meals.meals.filter(meal => fav.includes(meal.id))
    // console.log('favritScre',favMeals);
    // console.log('stor',fav)

    if(favMeals.length === 0){
      return(
        <View style={favrit_S_Style.screen}>
        {this.headerHandeler()}
        <View style={favrit_S_Style.emptyMsg}>
        <DefultText> No Favorite Meals Found ! </DefultText>
        </View>
        </View>
      )  
    }
    return (
      <View  style={favrit_S_Style.screen} >
      {this.headerHandeler()}
      <View style={favrit_S_Style.screenContent} >     
       <MealList data={favMeals}  navigation={this.props.navigation} />
      </View>
      </View>
    );
  }
}

const mapStateToProps=(state)=>{
  return{
    meals : state.meals
  }
} 

export default connect(mapStateToProps,null)(FavritScreen);
