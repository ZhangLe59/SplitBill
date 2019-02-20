import React, {PropTypes} from 'react';
import { View, Text, Alert } from 'react-native';
import { Button, Flex, InputItem } from '@ant-design/react-native';
import commonStyle from '../style/commonStyle';

class ViewBillScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = { username: '', billid: '' }
    }

    static navigationOptions = ({ navigation }) => ({
        title: 'Create New Bill',
    });

    onPress = () => {
        this.setState({ username: this.props.username, billid: this.props.billid });
        if (this.state.billname == "" || this.state.username == ""){
            Alert.alert(
                'Invalid Bill Name or User Name',
                'Please type in bill name and your name before click the button',
                [
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
              );
        } else {
            Alert.alert(
                'Generate the Bill',
                'Processing ....',
                [
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
              );
            //fetch 
            fetch('http://35.240.226.40/addPerson/', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    billCode: this.state.billid,
                    name: this.state.username,
                }),
            }).then(response => {
                console.log(response);
                if (JSON.parse(response._bodyText).code === 1) {
                    this.props.navigation.navigate('BillDetail', { billname: JSON.parse(response._bodyText).data.theme, username: this.state.username, billid: JSON.parse(response._bodyText).data.id, billperson: JSON.parse(response._bodyText).data.person });
                    return response.json();
                } else {
                  throw new Error('Something went wrong on api server!');
                }
              });
           //end fetch
        }   
    }
      
    render() {
      return (
        <View style={commonStyle.container}>
          <Flex>
                <Flex.Item style={commonStyle.flexcentertext} >
                <InputItem placeholder='Please type bill code' 
                labelNumber={8} type='number'
                onChangeText={(text) => this.setState({billid: text})} >Bill Code : </InputItem>
                </Flex.Item>
          </Flex>
          <Flex>
                <Flex.Item style={commonStyle.flexcentertext} >
                <InputItem placeholder='Please type your name' 
                labelNumber={8}
                onChangeText={(text) => this.setState({username: text})} >Your Name : </InputItem>
                </Flex.Item>
          </Flex>
          <Flex>
                <Flex.Item style={commonStyle.flexcenterbutton} >
                <Button style={commonStyle.graybutton}  onPress={this.onPress}>Attend</Button>
                </Flex.Item>
          </Flex>
          <Flex>
                <Flex.Item style={commonStyle.flexcenterbutton} >
                <Text>{ this.state.billid }</Text>
                </Flex.Item>
          </Flex>
        </View>
      );
    }
}

export default ViewBillScreen;