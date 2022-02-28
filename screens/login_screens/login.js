import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
 
const App=()=> {
  const [email, setU_Name] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
        <View style={styles.logo}>
          <Image
              
              source={require('./assets/logo.png')}
          />
        </View>

      <View style={styles.inputView1}>
          <View style={styles.inputView2}>
          <TextInput
            style={styles.TextInput}
            placeholder="UserName"
            placeholderTextColor="gray"
            onChangeText={(U_Name) => setU_Name(U_Name)}
          />
          </View>
          <View style={styles.inputView2}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password."
            placeholderTextColor="gray"
            onChangeText={(password) => setU_Name(password)}
          />
          </View>
          <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.botom_part}>
          <View style={styles.loginBtn}>
          <TouchableOpacity>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.bottom_text}>

            <View style={styles.bottom_text}>
              <Text style={styles.Text2}>New to GLA?</Text>
            </View>
            <View>
            <TouchableOpacity>
            <Text style={styles.signup}>Sign up</Text>
            </TouchableOpacity>
            </View>
          </View>
      </View>
    </View>
 );
}
 
const styles = StyleSheet.create({
  container: {
    flexDirection:'column',
    flex:1,
    backgroundColor: "#fff",
    width:"100%",
    height:"100%",
    alignItems:'center',
    marginTop:0,
    justifyContent:'center',
  },
  logo: {
    flex:2,
    flexDirection:"row",
    justifyContent:'flex-start',
    marginTop:'30%',
    width      : null,
		resizeMode : 'contain',
},
 
  inputView1: {
    flex:2,
    justifyContent: 'center',
    flexDirection: "column",
    borderRadius: 30,
    padding:"0%",
    width: "80%",
    height: 45,
    marginBottom: "50%",
    alignItems: "center",
  },
  inputView2: {
    backgroundColor: "#F9F9F9",
    borderRadius: 25,
    width: "100%",
    marginBottom: "5%",
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    padding: "5%",
  },
  loginText:{
    color:'white',
    fontWeight:'bold',
    fontSize:14
  },
  forgot_button: {
    width: "20%",
    height: 50,
    marginLeft:"68%",
    color:"#F2765A",
  },
  signup:{
    
    width: "20%",
    height: 50,
    marginLeft:"68%",
    color:"#F2765A",
  },
  
  Text2: {
    paddingTop:"2%",
    height: 50,
  },
  botom_part:{
    position:'absolute',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    width:"100%",
    bottom:"0%",
  },
  loginBtn: {
    flex:1,
    flexDirection:"row",
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F2765A",
    bottom: "7%",
    marginBottom:"10%",
  },
  bottom_text: {
    alignItems:'center',
    position:'absolute',
    flex:2,
    flexDirection:'row',
    bottom:"0%",
    width:"100%",
    justifyContent:'center',
    marginBottom:"2%"
  }
});

export default App;
