import React, {Component} from 'react';
import {View} from 'react-native';
import categoryMeals_S_Style from './categoryMeals_S_Style';
import MealList from '../../component/MealList';
import { connect } from 'react-redux';
import DefultText from '../../component/DefultText';
import AppHeder from "../../component/AppHeder";




 class CategoryMealsScreen extends Component {
  constructor(props) {
   
    super(props);
    const {filteredMeals ,route} = props  
    const { categoryId , categoryTitle } =route.params      
    const meal = filteredMeals.filteredMeals;   
    const displayMeal = meal.filter(
      meal => meal.categoryIds.indexOf(categoryId) >= 0,
    );
    this.state = {
      displayMeal,
      catId: categoryId,
      catTitle:categoryTitle,
    };    

  }

  // static navigationOptions = ({navigation}) => {    
  //   const catTitle = navigation.getParam('title');    
  //   return {
  //     title: catTitle,
  //   };
  // };

  hederHandler = () =>{
    return(
      <AppHeder      
      title={this.state.catTitle}
      rightBtn={false}
      leftBtn={true}
      leftIcon = 'arrow-back' 
      leftPress={()=>{this.props.navigation.pop()}}             
    />     
    )
  }

  render() { 
    if(this.state.displayMeal.length === 0){     
      return(
        <View style={categoryMeals_S_Style.screen}>
         {this.hederHandler()}
         <View style={categoryMeals_S_Style.emptyMsg} >
        <DefultText> No meals found , maybe chek your filters? </DefultText>
        </View>
      </View>
      )      
    }   

    return (
      <View style={categoryMeals_S_Style.screen}>
      {this.hederHandler()}
       <View style={categoryMeals_S_Style.screenContainer} >
       <MealList data={this.state.displayMeal}  navigation={this.props.navigation} />
       </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filteredMeals: state.meals,
  }
}


export default connect(mapStateToProps , null)(CategoryMealsScreen);
