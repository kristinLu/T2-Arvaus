import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';

export default function App() {
  const [luku, asetaLuku] = useState(Math.floor(Math.random() * 100) + 1);
  let [arvaus, asetaArvo] = useState(0);
  let [arvauksia, laskuri] = useState(1);
  let [teksti, naytaTeksti] = useState(<Text>Guess a number between 1-100</Text>);

  const naytaTulos = () => {
    laskuri(arvauksia + 1);
    if (luku > arvaus) {
      naytaTeksti(<Text>Your guess {arvaus} is too low</Text>);
    } else if (luku < arvaus) {
      naytaTeksti(<Text>Your guess {arvaus} is too high</Text>);
    } else {
      const createAlert = () => Alert.alert(`You guessed the number in ${arvauksia} guesses`);
      createAlert();
      nollaa();
    }
    asetaArvo('');
  }

  const nollaa = () => {
    asetaLuku(Math.floor(Math.random() * 100) + 1);
    laskuri(1);
    naytaTeksti(<Text>Guess a number between 1-100</Text>); 
  }

  return (
    <View style={styles.container}>
      <Text>{teksti}</Text>
      <View>
       <TextInput style={styles.input} keyboardType='numeric' onChangeText={arvaus => asetaArvo(arvaus)} value={arvaus} />
      </View>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button onPress={naytaTulos} title="MAKE GUESS" />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    width: 50,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
  },

  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    width: 120,
  },
});