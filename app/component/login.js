import React, {PropTypes} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
  } from 'react-native';
import { Button, Flex, WhiteSpace, WingBlank } from '@ant-design/react-native';
import commonStyle from '../style/commonStyle';

const styles = StyleSheet.create({
    container: {
        marginTop: 10
    },
    flextext: {
        alignItems: 'center',
        padding: 10
    },
    flexbutton: {
        padding: 10
    },
    textContainer: {
        alignItems: 'center',
        padding: 10
    },
    button: {
        backgroundColor: '#DDDDDD',
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
            <Flex>
                <Flex.Item style={styles.flextext} >
                <Text style={styles.textContainer}>Welcom to Split Bill App</Text>
                </Flex.Item>
            </Flex>
            <Flex>
                <Flex.Item style={styles.flexbutton} >
                <Button style={styles.button}  onPress={this.onPressCreateBill}>Create A Bill</Button>
                </Flex.Item>
            </Flex>
            <Flex>
                <Flex.Item style={styles.flexbutton} >
                <Button style={styles.button}  onPress={this.onPress}>View A Bill</Button>
                </Flex.Item>
            </Flex>
        </View>
      );
    }
}

export default LoginScreen;