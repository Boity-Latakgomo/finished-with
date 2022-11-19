import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import {MaterialCommunityIcons} from '@expo/vector-icons';

//import AppText from './app/components/AppText/AppText';
import AppButton from './app/components/AppButton';

export default function App() {
  console.log("in app js")
  return (
    <View style={{flex:1, justifyContent:"center", alignItems: "center"}}>
    
    <AppButton title="Login" />
    
    </View>
    
  );
}
