import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import Screen from "../Helper/Screen";
import { AddIcon } from "./addIcon";
import Colors from "../constant/Colors";

const tabArrey = [
  {
    icon: "arrow-up-outline",
    name: "Meal",
    key: Screen.Meal,
  },
  {
    icon: "star",
    name: "Favorite",
    key: Screen.Favorite,
  },
];

const { width } = Dimensions.get("screen");

export class AppTabView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onPress = (item) => {
    const { navigation } = this.props;
    navigation.jumpTo(item.key);
  };

  render() {
    const { state } = this.props;
    return (
      <View style={styles.tabContainer}>
        {tabArrey.map((item, index) => {
          const isFocused = state.index === index;
          return (
            <TouchableOpacity
              onPress={() => this.onPress(item, index)}
              key={`tab-${index}`}
              style={styles.tab}
            >
              <AddIcon
                name={item.icon}
                color={isFocused ? Colors.primary : "black"}
                size={20}
              />
              <Text
                style={[
                  styles.tabName,
                  { color: isFocused ? Colors.primary : "black" },
                ]}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

export default AppTabView;

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    width: width,
    height: 60,
    backgroundColor: "white",
    paddingVertical: 10,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabName: {
    fontSize: 12,
    fontFamily: "OpenSans-Bold",
  },
});




