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
    }

    onPress = () => {
        console.log("");
    }
      
    render() {
      return (
        <View style={styles.container}>
          <LabelTextRowScreen name='Bill Name' />
          <LabelTextRowScreen name='Your Name' />
          <TouchableOpacity style={styles.button}
                onPress={this.onPress} >
                <Text>Create A New Bill</Text>
          </TouchableOpacity>
          <Text ></Text>
        </View>
      );
    }
}

export default NewBillScreen;