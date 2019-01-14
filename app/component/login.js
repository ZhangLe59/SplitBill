import React, {PropTypes} from 'react';
import { View, Text } from 'react-native';
import { Button, Flex } from '@ant-design/react-native';
import commonStyle from '../style/commonStyle';

class LoginScreen extends React.Component {
    constructor(props) {
        super(props)
    }

    static navigationOptions = ({ navigation }) => ({
        title: 'Split Bill App',
    });

    onPressCreateBill = () => {
        this.props.navigation.navigate('NewBill')
    }

    onPress = () => {
        this.props.navigation.navigate('ViewBill')
    }

    render() {
      return (
        <View style={commonStyle.container}>
            <Flex >
                <Flex.Item style={commonStyle.flexcentertext} >
                <Text>Welcom to Split Bill App</Text>
                </Flex.Item>
            </Flex>
            <Flex>
                <Flex.Item style={commonStyle.flexcenterbutton} >
                <Button style={commonStyle.graybutton}  onPress={this.onPressCreateBill}>Create A Bill</Button>
                </Flex.Item>
            </Flex>
            <Flex>
                <Flex.Item style={commonStyle.flexcenterbutton} >
                <Button style={commonStyle.graybutton}  onPress={this.onPress}>View A Bill</Button>
                </Flex.Item>
            </Flex>
        </View>
      );
    }
}

export default LoginScreen;