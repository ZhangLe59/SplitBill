import React, {PropTypes} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput
  } from 'react-native';

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        height: 30,
        flexDirection:'row'
    },
    textContainer: {
        alignItems: 'center',
        padding: 20
    },
    textinputContainer: {
        marginTop: 18, 
        height: 28, 
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
        <View style={styles.container}>
          <Text style={[styles.textContainer]}>{ this.props.name }</Text>
          <TextInput style={[styles.textinputContainer]}
            onBlur={ () => this.onBlur() }
            onFocus={ () => this.onFocus() }
            onChangeText={ (text) => this.setState({text}) }
            value={this.state.text} />
        </View>
      );
    }
}

export default LabelTextRowScreen;