import React, {PropTypes} from 'react';
import {
    View,
    Text
  } from 'react-native';
import { Button, Flex, InputItem } from '@ant-design/react-native';
import commonStyle from '../style/commonStyle';

class NewBillScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = { billname: '', username: '', alerttext: '' }
    }

    static navigationOptions = ({ navigation }) => ({
        title: 'Create New Bill',
    });

    onPress = () => {
        this.setState({ billname: this.props.billname, username: this.props.username });
        if (this.state.billname == "" || this.state.username == ""){
            this.setState({ alerttext: 'Please type in bill name and your name. '});
        } else {
            this.setState({ alerttext: ''});
            this.props.navigation.navigate('BillDetail', { billname: this.state.billname, username: this.state.username})
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
                <Button style={commonStyle.graybutton}  onPress={this.onPress}>Create</Button>
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