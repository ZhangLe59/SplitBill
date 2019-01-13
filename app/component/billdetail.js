import React, {PropTypes} from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { Button, Flex, InputItem, WingBlank } from '@ant-design/react-native';
import commonStyle from '../style/commonStyle';


class BillDetailScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = { trxname: '', trxamount: '', layout: 'list', arrayitem: null, isLoading: true }
    }

    componentDidMount() {
        this.setState({//加载
          isLoading: true
        });
        return fetch('http://35.240.226.40/transaction/')
          .then((responseJson) => {
          this.setState({
            arrayitem: JSON.parse(responseJson._bodyText).data,
            isLoading: false
          });
        }).catch((error) => {
          console.error(error);
          this.setState({//加载
            isLoading: true
          });
        });
    }

    static navigationOptions = ({ navigation }) => ({
        title: 'Bill Detail Page',
    });

    renderItem = (item) => {
        return (
          <View style={{ padding: 10 }}>
            <Text>{item}</Text><Text>{item}</Text>
          </View>
        );
    };

    render() {
      const { params } = this.props.navigation.state;
      var userlist = [];
      count = 0;
      while (count < params.billperson.split(',').length){
          userlist.push(params.billperson.split(',')[count]);
          count += 1;
      }
      if(this.state.isLoading){
        return(
          <View style={{flex: 1, padding: 20}}>
            <ActivityIndicator/>
          </View>
        )
      }
      return (
        <View style={commonStyle.container}>
            <Flex >
                <Flex.Item style={commonStyle.flexcentertext} >
                <Text>Bill Name { params.billname }</Text>
                </Flex.Item>
                <Flex.Item style={commonStyle.flexcentertext} >
                <Text>Bill Number : { params.billid }</Text>
                </Flex.Item>
            </Flex>
            <Flex >
                <Flex.Item style={commonStyle.flexcentertext} >
                <Text>Your Name { params.billperson }</Text>
                </Flex.Item>
            </Flex>
            <WingBlank style={commonStyle.wingblank}>
                <Flex justify='start' wrap='wrap'>
            
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
                <FlatList
                    data={this.state.arrayitem}
                    renderItem={({item}) => 
                    <Flex>
                        <Flex.Item style={commonStyle.flexsmalltext} >
                        <Text>{item.theme}</Text>
                        </Flex.Item>
                        <Flex.Item style={commonStyle.flexsmalltext} >
                        <Text>{item.amount}</Text>
                        </Flex.Item>
                        <Flex.Item style={commonStyle.flexsmalltext} >
                        <Text>{item.paiedPerson}</Text>
                        </Flex.Item>
                    </Flex>
                        } />
            </Flex>
                
        </View>
      );
    }
}

export default BillDetailScreen;
export const title = 'ListView';
export const description = 'ListView Example';