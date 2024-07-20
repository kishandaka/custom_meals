import React, { Component } from 'react'
import { StyleSheet, Text, View, Switch} from 'react-native'
import Colors from '../constant/Colors'

export class FilterSwitch extends Component {
    render() {        
        return (
            <View style={styles.filterContainer}>
                <Text>{this.props.label}</Text>
                    <Switch
                    trackColor={{true:Colors.primary}}
                    thumbColor={Colors.primary}
                    value={this.props.value}
                    onValueChange={(value)=> {console.log(value); return (this.props.onChage(value))}}
                    />
            </View>
        )
    }
}

export default FilterSwitch

const styles = StyleSheet.create({
    filterContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%",
        alignItems: "center",
        marginVertical:10,
      }
})
