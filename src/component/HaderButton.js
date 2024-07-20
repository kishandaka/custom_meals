import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export class HaderButton extends Component {
  render() {
    return (
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={this.props.onPress} style={styles.headerBtn}>
        <View >
        {this.props.label !== undefined ? (
            <Text style={{ color: this.props.color }}>{this.props.label}</Text>
          ) : (
            <Icon
              name={this.props.iconName}
              size={this.props.size}
              color={this.props.color}
            />
          )}
        </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default HaderButton;

const styles = StyleSheet.create({
  btnContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerBtn: {
    marginHorizontal: 10,
    padding:5,
    elevation:1,    
  },
});
