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
      <View style={styles.congtimg}>
          <Image
              
              source={require('./assets/clap.png')}
          />
      </View>
      <View style={styles.uppersec}>
          <Text style={styles.congt}> Congratulations</Text>
          <View>
            <Text style={styles.text}>
            Your Account has been Registered
            </Text>  
          </View>

      </View>
      
      <View style={styles.botom_part}>
          <View style={styles.uppersec}>
            <Text style={styles.text2}>
            We just need some information to setup for your child use
            </Text>  
          </View>
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
  congtimg:{
    flexDirection:"row",
    justifyContent:'center',
    marginTop:'10%',
    width      : null,
		resizeMode : 'contain',
  },
  uppersec:{
    margin:"1%",
    marginTop:"10%",
    paddingLeft:"10%",
    paddingRight:"10%",
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    fontSize:14,
    color:'black',
  },
  text2:{
    fontSize:16,
    color:'gray',
    textAlign:'center'
  },
  congt:{
    color:'#F2765A',
    fontWeight:'bold',
    fontSize:20,
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
    marginTop:"7%"
  },
});
export default App;
