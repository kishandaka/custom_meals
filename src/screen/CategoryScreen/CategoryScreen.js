import React, { Component } from "react";
import { FlatList, View } from "react-native";
import { CATEGORY } from "../../data/dummy-data";
import CategoryGridTile from "../../component/CategoryGridTile/CategoryGridTile";
import category_S_Style from "./category_S_Style";
import HaderButton from "../../component/HaderButton";
import AppHeder from "../../component/AppHeder";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Const from "../../Helper/Const";
import AsyncStorage from "@react-native-async-storage/async-storage";

export class CategoryScreen extends Component {
  componentDidMount = async () => {
    let itemData = await AsyncStorage.getItem("favList");
      if (itemData !== null) {
      itemData = JSON.parse(itemData);      
      if(this.props.meals.fav) {
        this.props.updateFav(itemData);
      } 
    }
  };

  renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          this.props.navigation.navigate("CategoryMeals", {
            categoryId: itemData.item.id,
            categoryTitle: itemData.item.title,
          });
        }}
      />
    );
  };

  render() {
    return (
      <View style={category_S_Style.Screen}>
        <AppHeder
          title="Meal Category"
          rightBtn={true}
          leftBtn={true}
          leftIcon="ios-menu"
          leftPress={() => this.props.navigation.toggleDrawer()}
        />
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={CATEGORY}
          renderItem={this.renderGridItem}
          numColumns={2}
        />
      </View>
    );
  }
}

const mapStateToProps = (state)=>{
  console.log('chekd',state.meals)
  return{
    meals:state.meals
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateFav: bindActionCreators(
      Const.action.mealAction.updateFavData,
      dispatch
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryScreen);

//const styles = StyleSheet.create({});
