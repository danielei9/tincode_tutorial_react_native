import React, {useState} from 'react';
import {StyleSheet, StatusBar, View, Text, SafeAreaView} from 'react-native';

// import Form from './src/components/Form';

// import {useEffect} from 'react';

// import colors from './src/utils/colors';

// // SafeAreaView es para no coger area de la pantalla no disponible

export default function App() {
  return (
    <>
      <StatusBar barStyle={colors.STATUS_BAR} />

      <SafeAreaView></SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({});
