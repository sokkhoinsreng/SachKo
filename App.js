/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import RootTab from './src/config/AppRouting';
import { Provider } from 'mobx-react'
import stores from './src/stores';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
export default class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <RootTab />
      </Provider>
    );
  }
}

