import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { DrawerContentScrollView } from '@react-navigation/drawer'
import Screen from '../Helper/Screen'

const drowerArrey = [
    {
        name:'Meals',
        key:Screen.Meals
    },
    {
        name:'Filter',
        key:Screen.Filter
    }
]






export class SideDrower extends Component {
    constructor(props){
        super(props)
        this.state = {}
    } 

    onPress = (item) => {
        const {navigation} = this.props
        navigation.navigate(item.key)
    }

    render() {           
        const {state} = this.props
        return (
            <View style={styles.screen}>
                <DrawerContentScrollView>
                    {drowerArrey.map((item,index)=>{
                        const isFocused = state.index === index
                    return(
                        <TouchableOpacity 
                            onPress = {()=> this.onPress(item,index)}
                            key={`tab-${index}`} 
                            style={styles.drower}                          
                           >                            
                            <Text>{item.name}</Text>
                        </TouchableOpacity>
                    )
                    })}
                </DrawerContentScrollView>
            </View>
        )
    }
}

export default SideDrower

const styles = StyleSheet.create({
    screen:{
        flex:1,
        paddingTop:20
    },
    drower:{
        paddingLeft:20,
        paddingVertical:10,
        marginVertical:5,
        elevation:1,
        backgroundColor:'#FBFCFC'      
    }
})






