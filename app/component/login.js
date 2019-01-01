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
        flex: 0.3,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    },
    textContainer: {
        alignItems: 'center',
        padding: 10
    }
});


class LoginScreen extends React.Component {
    constructor(props) {
        super(props)
    }

    onPressCreateBill = () => {
        this.props.navigation.navigate('NewBill')
    }

    onPress = () => {
        this.props.navigation.navigate('Home')
    }

    render() {
      return (
        <View style={styles.container}>
            <View style={[styles.textContainer]}>
                <Text>Welcom to Split Bill App</Text>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={this.onPressCreateBill} >
                <Text>Create A Bill</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={this.onPress} >
                <Text>View A Bill</Text>
            </TouchableOpacity>
                                
        </View>
      );
    }
}

export default LoginScreen;