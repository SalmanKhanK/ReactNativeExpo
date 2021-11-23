import React from 'react';
import { StyleSheet,View,Button ,Platform,Alert} from 'react-native';

export default function App() {
  const Separator = () => <View style={styles.separator} />;
  return (
    <View style={styles.container}>
     <Button title="Click me" color="#841584"    onPress={()=>console.log("Button tutorial ")} />
     <Separator />
     <Button title="Alert Button" color="#841584"    onPress={()=>alert("Button clicked")} />
     <Separator />
     <Button title="Alert Api" color="#841584"    onPress={()=>Alert.alert("Title","Message",[
       {text: "Yes",onPress: ()=>console.log("Yes")},
       {text: "No", onPress: ()=>console.log("No")}
     ])} />
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
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
});
