import React, { Component } from 'react'
import { Text, View , StyleSheet } from 'react-native'
import HaderButton from '../component/HaderButton'
import Colors from '../constant/Colors'

export class AppHeder extends Component {
    render() {
      const{title,rightBtn,leftBtn ,rightPress, leftIcon , rightIcon , color ,leftPress ,label} = this.props
        return (
            <View style={styles.headerContainer}>
                <View style={{flex:1}}>
                {leftBtn && <HaderButton
                    onPress={leftPress}    
                    iconName = {leftIcon}
                    color = {color ? color :'white'}
                    size = {20}             
                />}
                </View>
                <View style={styles.titleContainer }>
                <Text style={[styles.title , {color:color ? color :'white'}]} numberOfLines={1}>{title}</Text>
                </View>
                <View style={{flex:1 }} >
                   {rightBtn && <HaderButton
                    onPress={rightPress}    
                    iconName = {rightIcon}
                    color =  {color ? color :'white'}
                    size = {20}                    

                />} 
                </View>
            </View>
        )
    }
}

export default AppHeder

const styles = StyleSheet.create({
    headerContainer:{
        backgroundColor:Colors.primary,
        width:'100%',
        height:60,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    title:{
        fontSize:18,
        fontFamily:'OpenSans-Bold',
        color:'white'
    },  
   
    titleContainer:{
        flex:4,
        paddingHorizontal:10,
        alignItems:'center',                   
    }  

})