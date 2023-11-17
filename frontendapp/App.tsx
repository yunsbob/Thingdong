/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import WebView from 'react-native-webview';
// import {
//   setUpdateIntervalForType,
//   SensorTypes,
//   accelerometer,
// } from 'react-native-sensors';

function App(): JSX.Element {
  // const myInjectedJs = `(function() {
  //   window.localStorage.removeItem('accessToken');
  // })();`;

  // useEffect(() => {
  //   // 1초에 한번 씩 업데이트 (default 100ms)
  //   setUpdateIntervalForType(SensorTypes.accelerometer, 1000);

  //   const subscription = accelerometer.subscribe(({x, y, z, timestamp}) => {
  //     console.log('x, y, z, timestamp: ', x, y, z, timestamp);
  //   });

  //   return () => subscription.unsubscribe();
  // }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView
        javaScriptEnabled={true}
        // injectedJavaScript={myInjectedJs}
        source={{uri: 'https://thingdong.com'}}
        // source={{uri: 'http://192.168.31.240:3000/'}}
      />
    </SafeAreaView>
  );
}

export default App;
