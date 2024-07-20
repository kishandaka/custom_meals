import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import HaderButton from "../../component/HaderButton";
import FilterSwitch from "../../component/FilterSwitch";
import Const from "../../Helper/Const";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import AppHeder from '../../component/AppHeder';

 class FilterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      glutonFree: false,
      vegan: false,
      vegetarian: false,
      lactoseFree: false,
    };    
  }

  saveHandler = () =>{        
    const savData = {
           glutonFree : this.state.glutonFree,
            vegan : this.state.vegan,
            vegetarian : this.state.vegetarian,
            lactoseFree : this.state.lactoseFree
      }
      this.props.filter.setFilters(savData)
      this.props.navigation.navigate('Categories');
  }

  // componentDidMount = () =>{ 
  //   this.props.navigation.setParams({save:this.saveHandler});
  // }

  // static navigationOptions = ({navigation}) => {
  //   const saveFilter = navigation.getParam('save');       
  //   return {
  //     headerTitle: "Filter Category",
  //     headerLeft: () => (
  //       <HaderButton
  //         onPress={() => {
  //           navigation.toggleDrawer();
  //         }}
  //         iconName="ios-menu"
  //         color="white"
  //         size={20}
  //       />
  //     ),
  //     headerRight: () => (
  //       <HaderButton
  //         onPress={() => {
  //           saveFilter()
  //         }}
  //         label="Save"
  //         color="white"
  //         size={20}
  //       />
  //     ),
  //   };
  // };

  render() {   
    return (
      <View style={styels.screen}>
           <AppHeder      
      title='Favorites'
      rightBtn={true}
      leftBtn={true}
      leftIcon = 'ios-menu' 
      rightIcon = 'bookmark-outline'
      leftPress={()=>this.props.navigation.toggleDrawer()}
      rightPress={()=>this.saveHandler()}             
    /> 
        <Text style={styels.filterTitle}>Availabel Filters / Restrictions</Text>
        <FilterSwitch
          label="Gluten-Free"
          value={this.state.glutonFree}
          onChage={(value) => {
            this.setState({ glutonFree: value });
          }}
        />
        <FilterSwitch
          label="Vegan"
          value={this.state.vegan}
          onChage={(value) => {
            this.setState({ vegan: value });
          }}
        />
        <FilterSwitch
          label="Vegetarian"
          value={this.state.vegetarian}
          onChage={(value) => {
            this.setState({ vegetarian: value });
          }}
        />
        <FilterSwitch
          label="LactoseFree"
          value={this.state.lactoseFree}
          onChage={(value) => {
            this.setState({ lactoseFree: value });
          }}
        />
      </View>
    );
  }
}

const mapDispatchToProps =(dispatch) =>{ 
  return {
    filter:bindActionCreators(Const.action.mealAction, dispatch)
}
}


export default connect(null,mapDispatchToProps)(FilterScreen);

const styels = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  filterTitle: {
    fontFamily: "OpenSans-Bold",
    fontSize: 18,
    textAlign: "center",
    margin: 20,
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    alignItems: "center",
  },
});
