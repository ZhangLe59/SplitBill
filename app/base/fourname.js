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

class FourNameScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = { user1: this.props.name1, user2: this.props.name2, user3: 'User3', user4: 'User4' }
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
          <Text style={[styles.textContainer]}>{ this.state.user1 }</Text>
          <Text style={[styles.textContainer]}>{ this.state.user2 }</Text>
          <Text style={[styles.textContainer]}>{ this.state.user3 }</Text>
          <Text style={[styles.textContainer]}>{ this.state.user4 }</Text>
        </View>
      );
    }
}

export default FourNameScreen;