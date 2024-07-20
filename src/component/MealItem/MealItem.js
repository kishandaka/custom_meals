import React, { Component } from 'react'
import { Text, View , TouchableOpacity ,ImageBackground,StyleSheet} from 'react-native'
import mealItemStyle from './mealItemStyle'

export class MealItem extends Component {
    render() {
        return (
            <View style={mealItemStyle.mealItem}>
                <TouchableOpacity onPress={this.props.onSelectMeal}>
                    <View>
                        <View style={[mealItemStyle.mealRow , mealItemStyle.mealHeader]}>
                             <ImageBackground source={{ uri: this.props.image }} 
                             style={mealItemStyle.bgImage}
                            >
                            <View style={mealItemStyle.mealTitleContainer}>
                            <Text style={mealItemStyle.mealTitle} numberOfLines={1}>{this.props.title}</Text>
                            </View>
                            </ImageBackground>
                        </View>
                        <View style={[mealItemStyle.mealRow , mealItemStyle.mealDetails]}>
                            <Text>{this.props.duration}</Text>
                            <Text>{this.props.complexity.toUpperCase()}</Text>
                            <Text>{this.props.affordability.toUpperCase()}</Text>
                        </View>
                    </View>
            </TouchableOpacity>
            </View>
        )
    }
}

export default MealItem




