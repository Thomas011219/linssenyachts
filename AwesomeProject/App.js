import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState, Component} from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, ScrollView } from 'react-native';

export default function App() {


  const test = () => {
    var request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
      if (request.readyState !== 4) {
        return;
      }
      if (request.status === 200) {
        var data = JSON.parse(request.responseText);
        // console.log(data);
        alert(data);
      }
    };
    request.open('GET', 'https://wwapp.joeypfoster.nl/?TEST=test');
    request.send();

  }



  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button style={styles.button} onPress={() => test()} title="Show DATA"/>
      </View>
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
});
