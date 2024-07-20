import React, { Component } from 'react'
import { Text, View , StyleSheet } from 'react-native'

export class DefultText extends Component {
    render() {       
        return (
            <View>
                <Text style={[styles.text , this.props.style]}> 
                    {this.props.children}
                </Text>
            </View>
        )
    }
}

export default DefultText

const styles = StyleSheet.create({
     text:{
         fontFamily:'OpenSans-Regular',
         fontSize:14,        
     }
})


