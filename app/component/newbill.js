import React, {PropTypes} from 'react';
import {
    Button,
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity
  } from 'react-native';
import commonStyle from '../style/commonStyle';

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        justifyContent: 'center',
        paddingHorizontal: 20,
        flexDirection:'row'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 20
    },
    textContainer: {
        flex: 1,
        alignItems: 'center',
        padding: 20
    },
    textinputContainer: {
        marginTop: 18, 
        height: 28, 
        width: '65%', 
        borderColor: 'gray', 
        borderWidth: 1
    }
});

class NewBillScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = { text: 'Please type in the Bill name '}
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
        <View style={styles.container}>
          <Text style={[styles.textContainer]}>Bill Name : </Text>
          <TextInput style={[styles.textinputContainer]}
            onBlur={ () => this.onBlur() }
            onFocus={ () => this.onFocus() }
            onChangeText={ (text) => this.setState({text}) }
            value={this.state.text} />
        </View>
      );
    }
}

export default NewBillScreen;