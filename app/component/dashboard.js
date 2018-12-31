import React, {PropTypes} from 'react';
import {
    ListView,
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
  } from 'react-native';
import commonStyle from '../style/commonStyle';

const styles = StyleSheet.create({
    listView: {
      flex: 1,
    },
    itemView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: 15
    },
    itemText: {
      color: commonStyle.TEXT_GRAY_COLOR,
      fontSize: 18
    },
    itemImage: {
      width: 20,
      height: 20,
    },
    separatorLine: {
      height: 1,
      backgroundColor: commonStyle.GRAY_COLOR,
      marginHorizontal: 15
    }
});


class HomeScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>Home Screen</Text>
        </View>
      );
    }
}

export default HomeScreen;