
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScanScreen from './Screens/ScanScreen'
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Barcode Scanner App</Text>
     <ScanScreen/>
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
  head:{
    textAlign:"center",
    fontSize:30,
    color:'red'
  }
});
