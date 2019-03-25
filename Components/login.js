
import React, {Component} from 'react';
import {TextInput,Image,ImageBackground,TouchableOpacity, StyleSheet, Text, View,Dimensions} from 'react-native';
import logo from '../images/logo.png';








export default class Login extends Component{

  
  render() {
    return (
        <View style={{flex:1}}>
<View style={styles.logocontainer}>
  <Text style={styles.Text}> Class Task</Text>
</View>

<View style={styles.inputtext}>

<TextInput 
style={styles.TextInput}
placeholder={'Username'}

/>

</View>
<View style={styles.inputtext}>

<TextInput 
style={styles.TextInput}
placeholder={'Password'}

/>

</View>

<TouchableOpacity style={styles.touch}>

<View>
  <Text style={styles.texttouch}>Login</Text>
</View>

</TouchableOpacity>



<View>
  <Text style={{fontWeight:'bold', marginTop:15,marginLeft:30}}>

    Forgot your Password? get help Singing in
  </Text>

  <Text style={{fontWeight:'bold', marginTop:10 , fontSize:15,textAlign:'center',marginLeft:10}}>

OR
  </Text>
  
  </View>
  <TouchableOpacity style={styles.touch}>

<View>
  <Text style={styles.textfacebook}> Signup Now </Text>
</View>

</TouchableOpacity>

</View>




    );
      }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    justifyContent: 'center',
    alignItems: 'center',
  },
  logocontainer:{
alignItems:'center'
  },
  logo:{
    width:120,
    height:120,

  },
  Text:{

    fontSize:30,
  },
  TextInput:{
      
    width: 320,
    height:45,
    borderWidth: 1,
    borderRadius:10,
    fontSize:16,
    paddingLeft:45,
    opacity:0.5,
    borderColor:'rgb(40, 42, 54)'

  },
  inputtext:{
    marginTop:10,
    marginLeft: 20,
  },
  touch:{
  
    marginTop:10,
   borderWidth:1,
    borderRadius:10,
    backgroundColor:'rgb(255,255,255)',
    width:200,
    marginLeft:70
  },
  texttouch:{
    fontSize:20 ,
     fontFamily:'IndieFlower',
     textAlign:'center'
  },
  textfacebook:{

    color:'rgba(0,0,0,0.5)',
    width: 150,
    height:30,
    textAlign:'center',
    borderRadius:20,
    fontWeight:'bold',
    backgroundColor:'rgb(255,255,255)',

  }
});
