import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from "react";
import {
  StyleSheet,
  Text,
  Dimensions,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Icon } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';
import GoBack from '../../components/GoBack';


const {width, height} = Dimensions.get("window")

const App=({navigation})=> {
  const [name, setU_Name] = useState("");
  return (
    <SafeAreaView>
      <GoBack goBack={()=> navigation.goBack()} />
      <View style={{paddingHorizontal:20, width:width, height:height-40, backgroundColor:'#FFF'}}>
      <View style={{alignItems:'center', marginTop:25, marginBottom:60}}>
          <Image 
            resizeMode="cover"
            style={{width:150, height:150}}
              source={require('../../assets/images/letter.png')}             
          />
        </View>
        <View style={{marginTop:30}}>
          <Text style={{fontSize:18, color:"#505050", fontFamily:"CorsaGrotesk-Bold"}}>What is your <Text style={{color:"#F2765A"}}>email</Text>?</Text>
          <TextInput value={name} onChangeText={(text)=> setU_Name(text)}  placeholder='Email' placeholderTextColor={"#CCC"} style={{fontFamily:"CorsaGrotesk-Medium", fontSize:16, height:60, backgroundColor:'#f0f0f0', borderRadius:10, paddingHorizontal:10, marginTop:25}}/>
        </View>
        <View style={{bottom:-200 }}>
        <TouchableOpacity
					activeOpacity={0.9}
					onPress={() => {
						name !== "" ? navigation.navigate('SignUp_3') : alert("Email field is required")
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
  )
}
export default App;
