import React, {useState} from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  SafeAreaView,
  Button,
} from 'react-native';

import Form from './src/components/Form';
import Footer from './src/components/Footer';

import colors from './src/utils/colors';
import texts from './src/utils/text';
// SafeAreaView es para no coger area de la pantalla no disponible

export default function App() {
  const [capital, setCapital] = useState(null);
  const [interest, setInterest] = useState(null);
  const [month, setMonth] = useState(null);

  const calculate = () => {
    console.log('capital =>', capital);
    console.log('interest =>', interest);
    console.log('month =>', month);
  };
  return (
    <>
      <StatusBar barStyle={colors.STATUS_BAR} />

      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.titleApp}> {texts.TITTLE}</Text>
        <Form
          setCapital={setCapital}
          setInterest={setInterest}
          setMonth={setMonth}
        />
      </SafeAreaView>

      <View>
        <Text> Resulted </Text>
      </View>

      <Footer calculate={calculate} />
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30, //
    alignItems: 'center',
  },
  titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
  },
});
