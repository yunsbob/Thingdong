/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import {SafeAreaView, Text} from 'react-native';
import WebView from 'react-native-webview';

function App(): JSX.Element {
  return (
    // <SafeAreaView>
    // <WebView source={{uri: 'https://thingdong.com'}} />
    <WebView source={{uri: 'http://192.168.31.240:3000/'}} />
    // <Text> 123</Text>
    // </SafeAreaView>
  );
}

export default App;
