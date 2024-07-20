import {StyleSheet, Platform, Dimensions} from 'react-native';
import Colors from '../../constant/Colors';

export default StyleSheet.create({
    mealItem:{
        height:200,
        width:'100%',
        backgroundColor:Colors.secondary,
        borderRadius:10,
        overflow:'hidden',
        marginVertical:5,
      },
      mealRow:{
        flexDirection: 'row',   
      },
      mealHeader:{
        height:'85%'
      },
      bgImage:{
        width:'100%',
        height:'100%',
        justifyContent:'flex-end'
      },
      mealDetails:{
        justifyContent:'space-around',
        alignItems:'center',
        height:'15%',
        paddingHorizontal:12,
      },
      mealTitle:{
        fontFamily:'OpenSans-Bold',
        fontSize:20,
        color:'white',
        textAlign:'center'
    },
    mealTitleContainer:{
        backgroundColor:'rgba(0,0,0,0.5)',
        paddingVertical:5,
        paddingHorizontal:12,
        justifyContent:'flex-end'
    }
});
