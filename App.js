import React from 'react';
import { StyleSheet, Text,TouchableHighlight,TouchableWithoutFeedback,TouchableOpacity,TouchableNativeFeedback, View,Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} onPress={()=>console.log("Hello world")}>Hello world good this is my first react naticve project which i working on it</Text>
      {/* <TouchableHighlight activeOpacity={0.6} underlayColor="red" onPress={()=>console.log("Touch Image")}>
      <Image source={{
          width:200,
          height:300,
          uri:"https://picsum.photos/200/300"
          }} />
      </TouchableHighlight> */}

      {/* <TouchableWithoutFeedback  onPress={()=>console.log("Touch Image")}>
      <Image source={{
          width:200,
          height:300,
          uri:"https://picsum.photos/200/300"
          }} />
      </TouchableWithoutFeedback> */}
{/* 
            <TouchableOpacity  onPress={()=>console.log("Touch Image")}>
      <Image source={{
          width:200,
          height:300,
          uri:"https://picsum.photos/200/300"
          }} />
      </TouchableOpacity> */}

      
<TouchableNativeFeedback  onPress={()=>console.log("Touch Image")}>
      <Image source={{
          width:200,
          height:300,
          uri:"https://picsum.photos/200/300"
          }} />
      </TouchableNativeFeedback>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:"center",
    alignItems:"center",
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },
});
