import React, {PropTypes} from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';

class HomeScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = { getAPI: null, isLoading: true }
    }

    componentDidMount() {
      this.setState({//加载
        isLoading: true
      });
      return fetch('http://35.240.226.40/')
        .then((responseJson) => {
        this.setState({
          getAPI: JSON.parse(responseJson._bodyText),
          isLoading: false
        });
      }).catch((error) => {
        console.error(error);
        this.setState({//加载
          isLoading: true
        });
      });
  }

    render() {
      if(this.state.isLoading){
        return(
          <View style={{flex: 1, padding: 20}}>
            <ActivityIndicator/>
          </View>
        )
      }
  
      return(
        <View style={{flex: 1, paddingTop:20}}>
          <Text>_bodyText_data: {this.state.getAPI.code}</Text>
          <Text>_bodyText_msg: {this.state.getAPI.msg}</Text>
          <Text>_bodyText_data: {this.state.getAPI.data}</Text>
        </View>
      );
    }
  }

//        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//          <Text>Home Screen { this.state.text }</Text>
//        </View>
/* 
         <Text>status: {this.state.data.status}</Text>
          <Text>url: {this.state.data.url}</Text>  */


export default HomeScreen;