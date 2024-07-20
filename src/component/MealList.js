import React, { Component } from "react";
import { FlatList } from "react-native";
import MealItem from "./MealItem/MealItem";

export class MealList extends Component {
  renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
          this.props.navigation.navigate("MealDetail", {
            mealId: itemData.item.id,
            title: itemData.item.title,
          });
        }}
      />
    );
  };

  render() {
    
    return (
      <FlatList
        data={this.props.data}
        keyExtractor={(item, index) => item.id}
        renderItem={this.renderMealItem}
        style={{ width: "100%" }}
      />
    );
  }
}

export default MealList;
