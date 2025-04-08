// App.js
import React from 'react';
import { Text, View } from 'react-native';
import app from './firebaseConfig'; // This ensures Firebase is initialized

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hello from Firebase App!</Text>
    </View>
  );
}
