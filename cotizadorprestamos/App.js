import React, {useState} from 'react';
import {StyleSheet, StatusBar, View, Text, SafeAreaView} from 'react-native';

import Form from './src/components/Form';
import Footer from './src/components/Footer';
import ResultCalculation from './src/components/ResultCalculation';

import {useEffect} from 'react';

import colors from './src/utils/colors';
import texts from './src/utils/text';
// SafeAreaView es para no coger area de la pantalla no disponible

export default function App() {
  const [capital, setCapital] = useState(null);
  const [interest, setInterest] = useState(null);
  const [months, setMonths] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  // cuando capital cambie de estado se ejecuta useEffect
  useEffect(() => {
    if (capital && interest && months) calculate();
    else reset();
  }, [capital, interest, months]);

  const calculate = () => {
    reset();
    if (!capital) {
      setErrorMessage('Añade la cantidad que quieres solicitar');
    } else if (!interest) {
      setErrorMessage('Añade el interés');
    } else if (!months) {
      setErrorMessage('Añade los meses');
    } else {
      const i = interest / 100;
      const fee = capital / ((1 - Math.pow(i + 1, -months)) / i);
      setTotal({
        monthlyFee: fee.toFixed(2).replace('.', ','),
        totalPayable: (fee * months).toFixed(2).replace('.', ','),
      });
    }
  };

  const reset = () => {
    setErrorMessage('');
    setTotal(null);
  };
  return (
    <>
      <StatusBar barStyle={colors.STATUS_BAR} />

      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.titleApp}> {texts.TITTLE}</Text>
        <Form
          setCapital={setCapital}
          setInterest={setInterest}
          setMonths={setMonths}
        />
      </SafeAreaView>

      <ResultCalculation
        errorMessage={errorMessage}
        capital={capital}
        interest={interest}
        months={months}
        total={total}
      />

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
