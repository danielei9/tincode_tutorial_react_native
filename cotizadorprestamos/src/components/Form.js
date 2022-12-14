import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import colors from '../utils/colors';
import texts from '../utils/text';

export default function Form(props) {
  console.log(props);
  const {setCapital, setInterest, setMonths} = props;
  return (
    <View style={styles.viewForm}>
      <View style={styles.viewInputs}>
        <TextInput
          placeholder={texts.INPUT_PEDIR}
          keyboardType="numeric"
          style={styles.input}
          onChange={e => {
            setCapital(e.nativeEvent.text);
          }}
        />
        <TextInput
          placeholder={texts.INTEREST}
          keyboardType="numeric"
          style={[styles.input, styles.inputPercentage]}
          onChange={e => {
            setInterest(e.nativeEvent.text);
          }}
        />
      </View>
      <TextInput
        placeholder={texts.MONTH}
        keyboardType="numeric"
        style={[pickerSelectStyles.inputAndroid]}
        onChange={e => {
          setMonths(e.nativeEvent.text);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  viewForm: {
    position: 'absolute',
    bottom: -90,
    width: '85%',
    paddingHorizontal: 50,
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    borderRadius: 30,
    height: 180,
    justifyContent: 'center',
  },
  viewInputs: {
    flexDirection: 'row',
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR,
    borderRadius: 5,
    width: '60%',
    marginRight: 5,
    marginLeft: -5,
    marginBottom: 10,
    color: '#000',
    paddingHorizontal: 20,
  },
  inputPercentage: {
    width: '40%',
    marginLeft: 5,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4,
    color: 'black',
    backgroundColor: '#fff',
    paddingRight: 30,
    marginLeft: -5,
    marginRight: -5,
  },
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4,
    color: 'black',
    backgroundColor: '#fff',
    paddingRight: 30,
    marginLeft: -5,
    marginRight: -5,
  },
});
