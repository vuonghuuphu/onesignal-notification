import React from "react";
import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
//  Home
Home_container:{
    alignItems:'center',
},

from_sendNotify:{
    width:"100%",
    alignItems:'center',
    marginTop:"10%",
},

TextInput_sendNotify:{
    width:"90%",
    borderRadius:15,
    height:40,
    marginBottom:"5%",
    borderColor:"black",
    borderWidth:1,
},

btn_sendnotify:{
    width:200,
    alignItems:'center',
    backgroundColor:'green',
    paddingTop:10,
    paddingBottom:10,
    borderRadius:25 
},

text_btn_sendnotify:{
    color:"white",
    paddingStart:10,
    fontWeight:'bold',
    paddingEnd:10,
    fontSize:16
},



});

export default Styles;