import React, {PropTypes} from 'react';
import {
    View, Text, Alert
  } from 'react-native';
import { Button, Flex, InputItem } from '@ant-design/react-native';
import commonStyle from '../style/commonStyle';

class NewBillScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = { billname: '', username: '', alerttext: '', billid: '' }
    }

    static navigationOptions = ({ navigation }) => ({
        title: 'Create New Bill',
    });

    onPress = () => {
        this.setState({ billname: this.props.billname, username: this.props.username });
        Alert.alert(
            'Generate the Bill',
            'Processing ....',
            [
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
          );
        if (this.state.billname == "" || this.state.username == ""){
            this.setState({ alerttext: 'Please type in bill name and your name.'});
        } else {
            this.setState({ alerttext: ''});
            //fetch
            fetch('http://35.240.226.40/newBill/', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    theme: this.state.billname,
                    name: this.state.username,
                }),
            }).then(response => {
                //console.log(JSON.parse(response._bodyText).data)
                this.props.navigation.navigate('BillDetail', { billname: JSON.parse(response._bodyText).data.theme, username: this.state.username, billid: JSON.parse(response._bodyText).data.id, billperson: JSON.parse(response._bodyText).data.person });
                /*
                if (response.status === 200) {
                    this.setState({
                        billid: JSON.parse(response._bodyText)
                      })
                  return response.json();
                } else {
                  throw new Error('Something went wrong on api server!');
                }*/
              });
            //end fetch
            //
        }   
    }
      
    render() {
      return (
        <View style={commonStyle.container}>
          <Flex>
                <Flex.Item style={commonStyle.flexcentertext} >
                <InputItem placeholder='Please type bill name' labelNumber={8}
                    onChangeText={ (text) => this.setState({billname: text}) }
                    value={this.state.billname} >Bill Name : </InputItem>
                </Flex.Item>
          </Flex>
          <Flex>
                <Flex.Item style={commonStyle.flexcentertext} >
                <InputItem placeholder='Please type your name' labelNumber={8}
                    onChangeText={ (text) => this.setState({username: text}) }
                    value={this.state.username} >Your Name : </InputItem>
                </Flex.Item>
          </Flex>
          <Flex>
                <Flex.Item style={commonStyle.flexcenterbutton} >
                <Button style={commonStyle.graybutton}  onPress={this.onPress}>Generate</Button>
                </Flex.Item>
          </Flex>
          <Flex>
                <Flex.Item style={commonStyle.flexcentertext} >
                <Text >{ this.state.alerttext }</Text>
                </Flex.Item>
          </Flex>         
        </View>
      );
    }
}

export default NewBillScreen;