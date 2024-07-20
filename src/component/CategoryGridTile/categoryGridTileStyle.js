import {StyleSheet, Platform, Dimensions} from 'react-native';

export default StyleSheet.create({
    gridTileContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 15,
        borderRadius: 15,
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
});
