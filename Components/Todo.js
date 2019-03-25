import React, { Component } from 'react';
import { View, Text,StyleSheet , Button,TouchableOpacity} from 'react-native';
import { Item, Input } from 'native-base';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
        todos:[],
        text:'',
    };
  }

  Delete =(val)=>{
    this.setState({
      todos:this.state.todos.filter((name,index)=>{
        return index !== val;
      })
    })
  }
  addTodo=()=>{
      
  this.setState({
todos:this.state.todos.concat(this.state.text),

})

  }
Update=(val)=>{
  this.setState({
    text:this.state.todos[val],
    todos:this.state.todos.filter((name,index)=>{
      return index !==val;
    })
  })
}

  

  render() {
    return (
<View style={styles.container}>

    <Item  rounded>
    
<Input 
placeholder="What to do here "
value ={this.state.value}
onChangeText={(val) => {this.setState({text:val})}}
/>
    </Item>
<Button title="ADD " onPress={this.addTodo} >
</Button>
    

{this.state.todos.map((name,index)=>
   (
            <View key={index}>
            <TouchableOpacity key={index} onPress={()=> this.Delete(index)}onLongPress={()=>this.Update(index)}>
              
<Text style={{fontSize:20}}>
{name}
</Text>
            </TouchableOpacity>
    </View>
    )
)
}
</View>
    );
  }
}
const styles = StyleSheet.create({




  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
