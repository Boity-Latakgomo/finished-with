import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

export default function App() {
  return (
    <View style={{flex:1, justifyContent:"center", alignItems: "center"}}>
    <View style={{
      backgroundColor: "dodgerblue",
      width: 100,
      height: 100,
    
    }}
    ></View>
    </View>
  )
}
