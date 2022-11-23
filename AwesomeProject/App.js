// some library's
import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState, Component} from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, ScrollView } from 'react-native';

// start of the app
export default function App() {
  // normal ajax call
  // creates fucntion
  const test = () => {
    // creates new http request
    var request = new XMLHttpRequest();
    // calls onreadystatechange after api gets called
    request.onreadystatechange = (e) => {
      // ajax call gets 4 responses 1,2,3 are not important for the data to be loaded so we return it
      if (request.readyState !== 4) {
        return;
      }
      // if ajax call gets his 4th response it checks for a status if status 200(meaning success) it gets the data if its not for example 404(meaning not found) it will not go through
      if (request.status === 200) {
        // turns json data in normal data
        var data = JSON.parse(request.responseText);
        // console.log(data);
        // makes and alert and prints data
        alert(data);
      }
    };
    // calls the api
    request.open('GET', 'https://wwapp.joeypfoster.nl/?TEST=test');
    request.send();

  }


  // return is where the HTML will be created
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        {/* makes an button that calls the test function on press */}
        <Button style={styles.button} onPress={() => test()} title="Show DATA"/>
      </View>
    </View>
  );
}
// this is where the style of the app is created
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
