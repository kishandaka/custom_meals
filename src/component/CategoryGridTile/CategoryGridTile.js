/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import categoryGridTileStyle from './categoryGridTileStyle';

export class CategoryGridTile extends Component {
  render() {
    return (
      <View style={categoryGridTileStyle.itemGrid}>
        <TouchableOpacity style={{flex: 1}} onPress={this.props.onSelect}>
          <View
            style={[
              categoryGridTileStyle.gridTileContainer,
              {backgroundColor: this.props.color},
            ]}>
            <Text style={categoryGridTileStyle.tileText} numberOfLines={2}>
              {this.props.title}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default CategoryGridTile;

//const styles = StyleSheet.create({});
