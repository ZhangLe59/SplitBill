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
import LabelTextRowScreen from '../base/labeltextrow';

const styles = StyleSheet.create({
    container: {
        flex: 0.3,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 20
    }
});

class NewBillScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = { billtext: '', username: '', alerttext: '' }
    }

    onPress = () => {
        this.setState({ billtext: this.refs.billname.state.text, username: this.refs.yourname.state.text });
        if (this.state.billtext == "" || this.state.username == ""){
            this.setState({ alerttext: 'Please type in bill name and your name. '});
        } else {
            this.setState({ alerttext: ''});
            this.props.navigation.navigate('BillDetail', { billname: this.refs.billname.state.text, username: this.refs.yourname.state.text})
        }
       
    }
      
    render() {
      return (
        <View style={styles.container}>
          <LabelTextRowScreen name='Bill Name' ref="billname" />
          <LabelTextRowScreen name='Your Name' ref="yourname" />
          <TouchableOpacity style={styles.button}
                onPress={this.onPress} >
                <Text>Create A New Bill</Text>
          </TouchableOpacity>
          <Text >{ this.state.alerttext }</Text>
        </View>
      );
    }
}

export default NewBillScreen;