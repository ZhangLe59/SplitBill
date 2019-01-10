/**
 * Created by ZhangLe on 08/01/2019.
 */

import { StyleSheet } from 'react-native';

const colors = {
  MAIN_COLOR: 'white',
  // LINE_GRAY_COLOR: '#E8E8E8',
  GRAY_COLOR: '#DADADA',
  TEXT_GRAY_COLOR: '#79767C',
  TEXT_COLOR: '#443046',
  BACKGROUND_COLOR: '#F7F7F7',
  LIGHT_BLUE_COLOR: '#5CACEE',//浅蓝色
  LIGHT_GRAY_COLOR: '#cccccc44'//浅灰色
};

const styles = StyleSheet.create({
  container: {
      marginTop: 10,
  },
  flexhorizon: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    flexDirection:'row'
  },
  flexcentertext: {
    padding: 10,
    alignItems: 'center'
  },
  flexsmalltext: {
    paddingLeft: 2,
    paddingRight:2,
    paddingTop:10,
    alignItems: 'center'
  },
  flexsmallbutton: {
    paddingLeft: 2,
    paddingRight: 2,
    paddingTop: 10,
    flex: 0.3
  },
  flexcenterbutton: {
    padding: 10
  },
  graybutton: {
    backgroundColor: '#DDDDDD'
  },
  wingblank: {
    marginTop: 10,
  },
  input: {
    borderColor: '#DDDDDD',
    borderWidth: 1
  }
});


export default {
  ...colors,
  ...styles,
  HORIZONTAL_SPACE: 10,
};
