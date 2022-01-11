/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name} from './app.json';

console.log('nameeeee', name)

AppRegistry.registerComponent(name, () => App);
