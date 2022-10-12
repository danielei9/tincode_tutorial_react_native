import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ResultCalculation(props) {
  const {capital, interest, months, total, errorMessage} = props;
  console.log(props);
  return (
    <View style={styles.content}>
      {total && (
        <View style={styles.boxResult}>
          <Text style={styles.tittle}> RESUMEN</Text>
          <DataResult tittle="Solicita:" value={`${capital} €`} />
          <DataResult tittle="Interés:" value={`${interest} %`} />
          <DataResult tittle="Plazos:" value={`${months} meses`} />
          <DataResult tittle="Pago mensual:" value={`${total.monthlyFee} €`} />
          <DataResult tittle="Total:" value={`${total.totalPayable} €`} />
        </View>
      )}
      <View>
        <Text style={styles.error}> {errorMessage}</Text>
      </View>
    </View>
  );
}

function DataResult(props) {
  const {tittle, value} = props;
  return (
    <View style={styles.value}>
      <Text style={styles.tittle}> {tittle}</Text>
      <Text style={styles.tittle}> {value}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  error: {
    textAlign: 'center',
    color: '#f00',
    fontWeight: 'bold',
    fontSize: 20,
  },
  value: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  tittle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 15,
  },
  content: {
    marginTop: 100,
    marginHorizontal: 40,
  },
  boxResult: {
    padding: 30,
  },
});
