import { StyleSheet, Text, View,Button, TextInput, KeyboardAvoidingView, Platform} from 'react-native'
import { useState } from 'react'
import React from 'react'

const newForm = () => {
  const [username,setUsername]= useState("");
  const [passcode,setPasscode]= useState("");
const [errors, setErrors] = useState({});


  const validationForm =() => {
    let errors = {};

    if(!username) errors.username = "Username is required";
    if(!passcode) errors.passcode = "Passcode is required";

    setErrors(errors);

    return Object.keys(errors).length === 0;

  }

  const handleSubmit =() => {
    if(validationForm()){
      console.log("Submitted", username, passcode)
      setErrors({})
      setPasscode("")
      setUsername("")
    }
  }
  
  

  return (
   <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={Platform.OS ==='ios'?100:0} style={styles.mainContainer}>
<View style={styles.formContainer}>
<Text style={styles.text}>Username</Text>
<TextInput style={styles.input} placeholder="Enter Your Name" value={username} onChangeText={setUsername}/>
{
  errors.username ?<Text style={styles.errorText}>{errors.username}</Text> :null
}



<Text style={styles.text}>Password</Text>
<TextInput style={styles.input}  placeholder="Enter Your Pin" keyboardType="numeric" value={passcode} onChangeText={setPasscode} secureTextEntry/>
{
    errors.passcode ?<Text  style={styles.errorText}>{errors.passcode}</Text> :null

}

<Button title="Login" onPress={handleSubmit} />
</View>

   </KeyboardAvoidingView>
  )
}

export default newForm

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:"plum",
    paddingHorizontal:20,
    justifyContent:"center"  
  },
  formContainer:{
    backgroundColor:"white",
    padding:20,
    borderRadius:10,
    shadowOffset:{
width:0,
height:2
    },
    shadowOpacity:0.3,
    shadowColor:"black",
    shadowRadius:4,
    elevation:5
  },
  input:{
    height:40,
    borderColor:"#ddd",
    marginBottom:15,
    padding:10,
    borderWidth:1,
    borderRadius:5,

  },
  text:{
    fontSize:16,
    marginBottom:5,
    fontWeight:"bold"
  },
  errorText:{
    color:"red",
    marginBottom:10
  }
})