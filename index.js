
/** @format */

import React from 'react';
import {AppRegistry} from 'react-native';
import enUS from '@ant-design/react-native/lib/locale-provider/en_US';
import App from './app/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
