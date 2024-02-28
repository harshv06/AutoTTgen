import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View, SafeAreaView, Button, FlatList } from "react-native";

export default function App() {

  const [message,setMessage]=useState([
    {role:'system',content:'You are a helpful assistant.'},
    {role:'assistant',content:'Hello there how can i help'},
    {role:'user',content:'Hello.'},
  ])

  const onSend=()=>{
    console.log("Send")
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
      contentContainerStyle={{gap:10,padding:10}}
      data={message} renderItem={({item})=>(
        <View style={[styles.message,{marginLeft:item.role=='user'?'auto':0,backgroundColor:item.role=='user'?'#2A87FF':'#DCE7FF'}]}>
          <Text style={styles.messageContent}>{item.content}</Text>
        </View>
      )}/>

      <View style={styles.footer}>
        <TextInput placeholder="How can i help you" style={styles.input} />
        <Button title="Send" onPress={onSend}/>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  input: {
    borderWidth: 1,
    borderColor: "gainsboro",
    flex:1,
    padding:10
  },

  footer:{
    marginTop:'auto',
    flexDirection:'row',
    padding:10,
    gap:5
  },

  message:{
    backgroundColor:'gainsboro',
    padding:10,
    borderRadius:5,
    width:'90%',
  }
});
