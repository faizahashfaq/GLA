import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Icon } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';
 
const App=()=> {
  const [name, setU_Name] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.back_icon}>
        <TouchableOpacity>
        <Icon name='arrow-left'
          color='#F2765A' 
          size={50}/>
          
          </TouchableOpacity>
      </View>
      <View style={styles.emailimg}>
          <Image
              
              source={require('./assets/email.png')}
          />
      </View>
      <View style={styles.uppersec}>
          <View style={styles.q1}>
          <Text style={styles.text}>What is Your</Text>
          <Text style={styles.email}> Email</Text>
          <Text style={styles.text}>?</Text>
          </View>
          <View style={styles.inputView1}>
          <TextInput
            style={styles.textbox}
            placeholder="Email"
            placeholderTextColor="gray"
            onChangeText={(U_Name) => setU_Name(U_Name)}
          />
          </View>
      </View>

      <View style={styles.botom_part}>
          <View style={styles.nextBtn}>
          <TouchableOpacity>
            <Text style={styles.nexttext}>Next</Text>
          </TouchableOpacity>
          </View>
      </View>
    </View>
    
 );
}
 
const styles = StyleSheet.create({
  back_icon:{
    padding:"2%",
    paddingTop:"6%",
    alignItems:'flex-start',
    margin:0,
  },
  container: {
    flexDirection:'column',
    flex:1,
    backgroundColor: "#fff",
    width:"100%",
    height:"100%",
    marginTop:50,
  },
  emailimg:{
    flexDirection:"row",
    justifyContent:'center',
    marginTop:'10%',
    width      : null,
		resizeMode : 'contain',
  },
  uppersec:{
    margin:"1%",
    marginTop:0,
    paddingLeft:"10%",
    paddingRight:"10%",
  },
  text:{
    fontSize:14,
    color:'black',
    fontWeight:"bold"

  },
  q1:{
    flexDirection:'row',
    paddingTop:"0%",
    paddingBottom:"5%",
    marginTop:"30%",
    alignItems:'center'
  },
  email:{
    color:'#F2765A',
    fontWeight:'bold'
  },
  inputView1: {
    backgroundColor: "#F9F9F9",
    height:50,
    borderRadius: 25,
    width: "100%",
    paddingLeft:0,
    justifyContent:'center'
  },
  textbox:{
    marginLeft:"10%"
  },

  nexttext:{
    color:'white',
    fontSize:16,
    fontWeight:'bold'
  }, 
  botom_part:{
    position:'absolute',
    flex:2,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    width:"100%",
    bottom:"0%",
  },
  nextBtn: {
    flex:1,
    flexDirection:"row",
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F2765A",
    bottom: "5%",
    marginBottom:"5%",
  },
});
export default App;
