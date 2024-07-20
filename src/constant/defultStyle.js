import {StyleSheet, Platform, Dimensions} from 'react-native';
import Colors from './Colors';

export default StyleSheet.create({
  //categoryGridTile
  gridTileContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },
  itemGrid: {
    flex: 1,
    margin: 15,
    height: 150,
  },
  tileText: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 18,
    textAlign: 'right',
  },
  //Mealitem
  mealItem:{
    height:200,
    width:'100%',
    backgroundColor:Colors.secondary,
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
    paddingHorizontal:12
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
