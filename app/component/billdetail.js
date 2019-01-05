import React, {PropTypes} from 'react';
import {
    Button,
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
  } from 'react-native';
import FourNameScreen from '../base/fourname';

const styles = StyleSheet.create({
    container: {
        flex: 0.3,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    },
    textContainer: {
        alignItems: 'center',
        padding: 10
    }
});


class BillDetailScreen extends React.Component {
    constructor(props) {
        super(props)
    }

    static navigationOptions = ({ navigation }) => ({
        title: 'Bill Detail Page',
    });

    render() {
      const { params } = this.props.navigation.state;
      return (
        <View style={styles.container}>
            <View style={[styles.textContainer]}>
                <Text>Bill Name { params.billname }</Text>
                <Text>Bill Number : 001</Text>
                <Text>Your Name { params.username }</Text>
            </View>
            <FourNameScreen name='User1' />
            <FourNameScreen name='User1' name2='User2' name3='User3' name4='User4' />
                                
        </View>
      );
    }
}

export default BillDetailScreen;