import React, { Component } from 'react';
import { View, Text,StyleSheet,TextInput ,Button} from 'react-native';

export default class Github extends Component {
  constructor(props) {
    super(props);
    this.state = {
        user:''
    };
  }
  componentDidMount(){
      console.log(1)
      var url="https://api.github.com/users/alihaider589"
      fetch(url).then((response)=>{
      console.log(2)

          return response.json();
          
      }).then((user)=>{
      console.log(3)
      return console.log(user)
      }).catch((error)=>console.log(error))
  }

  


  render() {
    return (
        <View style={{flex:1}}>

      <View style={styles.container}>
<Text style={{fontSize:20}}>Github user  Information</Text>
<TextInput placeholder="User1" onChangeText={(user)=>{this.setState({user})}} style={{width:200,height:40}}></TextInput>
<Button title="GET"></Button>
      </View>
        </View>
    );
  }
}


const styles = StyleSheet.create({

container:{
marginTop:200,
height:100,
width:200,
marginLeft:50,

}

})