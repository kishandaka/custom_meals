import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";

export class AddIcon extends Component {
    render() {
        const{name , size, color}=this.props
        return (
            <Icon name={name} size={size?size : 20} color={color?color:"#900"} />
        )
    }
}

export default Icon

