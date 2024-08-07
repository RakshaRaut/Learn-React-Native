import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        <Text style={{color: "green",fontSize: 30, fontFamily: "poppins", fontWeight: "bold"}}>Hola! Buenas Dias </Text>
      </Text>
      <Image 
        source={require('./assets/sunny.jpg')} 
        style={{ width: 300, height: 300 }}
      />
      <Image 
        source={{ uri: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" }} // Ensure the base64 string is valid and complete.
        style={{ width: wp("80%") , height: 200 }}
      />
      <Text>
        <Text style={{color: "green", fontSize: 30}}>que tenga un buen día</Text>
      </Text>
      <Text>
        <Text style={{color: "green", fontSize: 30}}>que tenga un buen día</Text>
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
