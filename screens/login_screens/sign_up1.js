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
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from "react-native";
import { Icon } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';
import GoBack from '../../components/GoBack';
const {width, height} = Dimensions.get("window")

const SignUP_1=({navigation})=> {
  const [name, setU_Name] = useState("");
  return (
    <SafeAreaView>
      <GoBack goBack={()=> navigation.goBack()}/>
      <View style={{width:width, height:height-40, backgroundColor:'#FFF', paddingHorizontal:20, paddingVertical:20, flexDirection:'column'}}>
        <View>
          <Text style={{fontSize:18, color:"#505050", fontFamily:"CorsaGrotesk-Bold"}}>Join us to help</Text>
          <Text style={{fontSize:34, color:"#F2765A", fontFamily:"CorsaGrotesk-Bold"}} >Your Children</Text>
        </View>
        <View>
          <Text style={{fontSize:14, color:"#505050", fontFamily:"CorsaGrotesk-Regular", marginTop:10}}>
          We need your help to setup this account. Help us to fill the nec essary information
          </Text>
        </View>
        <View style={{marginTop:30}}>
          <Text style={{fontSize:18, color:"#505050", fontFamily:"CorsaGrotesk-Bold"}}>What is your <Text style={{color:"#F2765A"}}>name</Text>?</Text>
          <TextInput value={name} onChangeText={(text)=> setU_Name(text)}  placeholder='Parent Name' placeholderTextColor={"#CCC"} style={{fontFamily:"CorsaGrotesk-Medium", fontSize:16, height:60, backgroundColor:'#f0f0f0', borderRadius:10, paddingHorizontal:10, marginTop:25}}/>
        </View>
        <View style={{bottom:-325 }}>
        <TouchableOpacity
					activeOpacity={0.9}
					onPress={() => {
						name !== "" ? navigation.navigate('SignUp_2') : alert("Name Field is required")
					}}
					style={{
						alignSelf: "center",
						alignItems: "center",
						justifyContent: "center",
						flexDirection: "row",
						borderRadius: 5,
						width: width - 40,
            
						height: 60,
						marginBottom: 20,
						backgroundColor: "#F2765A",
					}}>
					<Text
						style={{
							marginRight: 15,
							fontFamily: "CorsaGrotesk-Bold",
							fontSize: 18,
							color: "#FFF",
						}}>
						Next
					</Text>
				</TouchableOpacity>
        </View>

      </View>
      
    </SafeAreaView>
    
 );
}
 
const styles = StyleSheet.create({

});

export default SignUP_1;
