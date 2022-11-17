import React from 'react';
import { ImageBackground,StyleSheet,View, Text, Image } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground  style={styles.background} source={require("../assets/bgrnd.jpg" )}>
        <View style={styles.logoContainer}>
        <Image  style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text>Sell What You Don't Need</Text>
        </View>
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </ImageBackground>

    );
}
const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:"flex-end",
       alignItems: "center",
        //resizeMode: "contain",
        

    },
    
    loginButton:{
        width: "100%",
        height: 70,
        backgroundColor :'purple'
    },
    logo:{
        width:100,
        height:100,
    },
    logoContainer:{
        position:"absolute",
        top:70,
        alignItems:"center"
    },
    registerButton:{
        width: "100%",
        height: 70,
        backgroundColor :'deeppink'
    },
    
})

export default WelcomeScreen;