import React, {PropTypes} from 'react';
import {
    Button,
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
  } from 'react-native';
import commonStyle from '../style/commonStyle';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    },
    countContainer: {
        alignItems: 'center',
        padding: 10
    },
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


class LoginScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
    }

    onPress = () => {
        this.setState({ count: this.state.count + 1 })
    }

    render() {
      return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={this.onPress} >
                <Text>Create Bill</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={this.onPress} >
                <Text>Add into Bill</Text>
            </TouchableOpacity>
            <View style={[styles.countContainer]}>
                <Text>Login Screen { this.state.count !== 0? this.state.count: null }</Text>
            </View>
                     
        </View>
      );
    }
}

export default LoginScreen;