/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import WebView from 'react-native-webview';
import AsyncStorage from '@react-native-async-storage/async-storage';

function App(): JSX.Element {
  console.log('찍히니ㅣ?');
  useEffect(() => {
    // Component가 마운트될 때 로컬 스토리지를 클리어.
    // Splash 확인용으로 자동 로그인 방지하기 위함
    clearLocalStorage();
  }, []);

  const clearLocalStorage = async () => {
    try {
      await AsyncStorage.clear();
      console.log('local storage 비워졌나요');
    } catch (error) {
      console.error('Error clearing local storage:', error);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <WebView source={{uri: 'https://thingdong.com'}} /> */}
      <WebView source={{uri: 'http://192.168.31.240:3000/'}} />
    </SafeAreaView>
  );
}

export default App;
