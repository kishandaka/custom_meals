import React, { Component } from "react";
import { Text, View, ScrollView, Image, StyleSheet } from "react-native";
import mealDetail_S_Style from "./mealDetail_S_Style";
import HaderButton from "../../component/HaderButton";
import DefultText from "../../component/DefultText";
import Const from "../../Helper/Const";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import _ from "lodash";
import AppHeder from "../../component/AppHeder";
import AsyncStorage from "@react-native-async-storage/async-storage";

class MealDetailScreen extends Component {
  constructor(props) {
    super(props);

    console.log("constructor");
    const { filteredMeals, route, navigation } = props;
    const { mealId, title } = route.params;
    const meal = filteredMeals.filteredMeals;
    const selectedMeal = meal.find((meal) => meal.id === mealId);
    const fav = this.props.favList;
    this.state = {
      mealId,
      selectedMeal,
      title,
      isFav: false,
      fav,
    };
  }

  toggelFavoriteHandlore = () => {
    this.props.favorite.toggleFavorite(this.state.mealId);
  };

  starIconHandler = () => {
    const favStar = this.props.favList;
    const isFav = favStar.includes(this.state.mealId);
    this.setState({ isFav: isFav });
  };

  
  componentDidUpdate = (prevProps, prevState) => {   
    if (
      prevProps.favList !==
      this.props.favList
    ) {
      this.starIconHandler();
    }
  };

  componentDidMount = () => {
    this.starIconHandler();
  };

  render() {
    //   console.log("favList - Stor", this.props.favList);
    return (
      <View style={mealDetail_S_Style.screen}>
        <AppHeder
          title={this.state.title}
          rightBtn={true}
          leftBtn={true}
          leftIcon="arrow-back"
          rightIcon={this.state.isFav ? "star" : "star-outline"}
          leftPress={() => {
            this.props.navigation.pop();
          }}
          rightPress={() => {
            this.props.favorite.toggleFavorite(this.state.mealId);
          }}
        />
        <ScrollView>
          <View style={mealDetail_S_Style.mealDetailBox}>
            <Image
              source={{ uri: this.state.selectedMeal.imageUrl }}
              style={mealDetail_S_Style.image}
            />
            <View style={[mealDetail_S_Style.listBox, mealDetail_S_Style.row]}>
              <View style={{ flexDirection: "column" }}>
                <Text style={mealDetail_S_Style.detailTitle}>Time</Text>
                <DefultText style={mealDetail_S_Style.detailes}>
                  {this.state.selectedMeal.duration}M
                </DefultText>
              </View>
              <View style={{ flexDirection: "column" }}>
                <Text style={mealDetail_S_Style.detailTitle}>Complexity</Text>
                <DefultText style={mealDetail_S_Style.detailes}>
                  {this.state.selectedMeal.complexity}
                </DefultText>
              </View>
              <View style={{ flexDirection: "column" }}>
                <Text style={mealDetail_S_Style.detailTitle}>
                  Affordability
                </Text>
                <DefultText style={mealDetail_S_Style.detailes}>
                  {this.state.selectedMeal.affordability}
                </DefultText>
              </View>
            </View>
            <View style={mealDetail_S_Style.listBox}>
              <DefultText style={mealDetail_S_Style.listTitle}>
                Ingredients
              </DefultText>
              {this.state.selectedMeal.ingredients.map((Ingredient, index) => {
                return (
                  <View
                    style={mealDetail_S_Style.listItem}
                    key={`Ingredients-${index}`}
                  >
                    <DefultText>{Ingredient}</DefultText>
                  </View>
                );
              })}
            </View>
            <View style={mealDetail_S_Style.listBox}>
              <DefultText style={mealDetail_S_Style.listTitle}>
                Steps
              </DefultText>
              {this.state.selectedMeal.steps.map((step, index) => {
                return (
                  <View
                    style={mealDetail_S_Style.listItem}
                    key={`step-${index}`}
                  >
                    <DefultText>{step}</DefultText>
                  </View>
                );
              })}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filteredMeals: state.meals,
    favList: state.meals.fav,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    favorite: bindActionCreators(Const.action.mealAction, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MealDetailScreen);

const styles = StyleSheet.create({});
