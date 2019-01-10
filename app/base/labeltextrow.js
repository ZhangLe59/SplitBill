import React, {PropTypes} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { InputItem, Flex } from '@ant-design/react-native';
import commonStyle from '../style/commonStyle';

  const styles = StyleSheet.create({
    textinputContainer: {
        marginTop: 18, 
        width: '60%', 
        borderColor: 'gray', 
        borderWidth: 1
    }
});

class LabelTextRowScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = { text: 'Type in the ' + this.props.name }
    }

    getInitialState() {
        return {
            backgroundColor: '#ededed',
            color: 'white'
        }
    }

    onFocus(){
        this.setState({
            text: ''
        })
    }

    onBlur(){
        this.setState({
            backgroundColor: '#ededed'
        })
    }
      
    render() {
      return (
        <View style={commonStyle.containerhorizon}>
            <Flex>
                <Flex.Item style={commonStyle.flexcentertext} >
                <Text>{ this.props.name }</Text>
                </Flex.Item>
            </Flex>
            <Flex>
                <Flex.Item style={commonStyle.flexcentertext} >
                <InputItem placeholder='Please type'
                    onBlur={ () => this.onBlur() }
                    onFocus={ () => this.onFocus() }
                    onChangeText={ (text) => this.setState({text}) }
                    value={this.state.text} />
                </Flex.Item>
            </Flex>
        </View>
      );
    }
}

export default LabelTextRowScreen;