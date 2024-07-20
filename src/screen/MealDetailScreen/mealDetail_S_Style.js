import { StyleSheet } from "react-native";
import Colors from "../../constant/Colors";

export default StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      mealDetailBox: {
        padding:10,
      },
      image: {
        width: "100%",
        height: 200,
      },
      row: {
        padding: 15,
        flexDirection: "row",
        justifyContent: "space-around",
      },
      listBox: {
        marginHorizontal: 10,
        marginVertical: 20,
        backgroundColor: "#FBFCFC",
        elevation: 3,
        padding: 15,
        borderRadius: 20,
      },
      listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 15,
      },
      detailTitle: {
        fontSize:14,
        color:Colors.accent,
        marginBottom:5
      },
      listTitle: {
        fontFamily: "OpenSans-Bold",
        fontSize: 20,
        textAlign: "center",
        color: Colors.accent,
      },
      detailes:{
        fontSize:12,
        textAlign:'center'
      }
})