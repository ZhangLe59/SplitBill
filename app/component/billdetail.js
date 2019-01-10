import React, {PropTypes} from 'react';
import { View,Text } from 'react-native';
import { Button, Flex, InputItem, WingBlank, ListView } from '@ant-design/react-native';
import commonStyle from '../style/commonStyle';


class BillDetailScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = { trxname: '', trxamount: '', layout: 'list' }
    }

    onFetch = async (page = 1, startFetch, abortFetch) => {
        try {
            let pageLimit = 30;
            if (this.state.layout === 'grid') pageLimit = 60;
            const skip = (page - 1) * pageLimit;

            //Generate dummy data
            let rowData = Array.from({ length: pageLimit },(_, index) => `item -> ${index + skip}`);

            //Simulate the end of the list if there is no more data returned from the server
            if (page === 3) {rowData = [];}

            startFetch(rowData, pageLimit);
            } catch (err) {
                abortFetch(); //manually stop the refresh or pagination if it encounters network error
            }
    };

    static navigationOptions = ({ navigation }) => ({
        title: 'Bill Detail Page',
    });

    renderItem = (item) => {
        return (
          <View style={{ padding: 10 }}>
            <Text>{item}</Text>
          </View>
        );
    };

    render() {
      const { params } = this.props.navigation.state;
      return (
        <View style={commonStyle.container}>
            <Flex >
                <Flex.Item style={commonStyle.flexcentertext} >
                <Text>Bill Name { params.billname }</Text>
                </Flex.Item>
            </Flex>
            <Flex >
                <Flex.Item style={commonStyle.flexcentertext} >
                <Text>Bill Number : 001</Text>
                </Flex.Item>
            </Flex>
            <Flex >
                <Flex.Item style={commonStyle.flexcentertext} >
                <Text>Your Name { params.username }</Text>
                </Flex.Item>
            </Flex>
            <WingBlank style={commonStyle.wingblank}>
                <Flex justify='start' wrap='wrap'>
                <Button style={commonStyle.graybutton}>{ params.username }</Button>
                <Button style={commonStyle.graybutton}>{ params.username }</Button>
                <Button style={commonStyle.graybutton}>{ params.username }</Button>
                <Button style={commonStyle.graybutton}>{ params.username }</Button>
                <Button style={commonStyle.graybutton}>{ params.username }</Button>
                <Button style={commonStyle.graybutton}>{ params.username }</Button>
                <Button style={commonStyle.graybutton}>{ params.username }</Button>
                </Flex>
            </WingBlank>
            <Flex>
                <Flex.Item style={commonStyle.flexsmalltext} >
                <InputItem placeholder='Please type TrxName'
                    onChangeText={ (text) => this.setState({trxname: text}) }
                    value={this.state.trxname} />
                </Flex.Item>
                <Flex.Item style={commonStyle.flexsmalltext} >
                <InputItem placeholder='Please type TrxAmount' type='number'
                    onChangeText={ (text) => this.setState({trxamount: text}) }
                    value={this.state.trxamount} />
                </Flex.Item>
                <Flex.Item style={ commonStyle.flexsmallbutton }>
                <Button style={commonStyle.graybutton}>+</Button>
                </Flex.Item>
            </Flex>
            <Flex>
            <ListView
                onFetch={this.onFetch}
                keyExtractor={(item, index) => `${this.state.layout} - ${item} - ${index}`}
                renderItem={this.renderItem}
                numColumns={this.state.layout === 'list' ? 1 : 3} />
            </Flex>
                
        </View>
      );
    }
}

export default BillDetailScreen;
export const title = 'ListView';
export const description = 'ListView Example';