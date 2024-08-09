import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  Pressable,
  Modal,
  Alert,
  SafeAreaView,
} from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import Navbar from "./components/Navbar.js";

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
  <View style={styles.main}>
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.greetingText}>Hola! Buenas Dias</Text>
        <Image
          source={{
            uri: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
          }}
          style={styles.remoteImage}
        />
        <Button
          title="Press"
          onPress={() => setIsModalVisible(true)}
          color="green"
        />
        <Button
          title="Alert"
          onPress={() =>
            Alert.alert(
              "Invalid data!",
              "Age restricted",
              [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                },
                {
                  text: "OK",
                  onPress: () => console.log("Ok Pressed"),
                },
              ],
              { cancelable: true }
            )
          }
          color="red"
        />

        <Modal
          visible={isModalVisible}
          onRequestClose={() => setIsModalVisible(false)}
          animationType="fade"
          presentationStyle="pageSheet"
        >
          <View style={styles.container}>
            <Image source={require("./assets/sunny.jpg")} style={styles.sunnyImage} />
            <Button
              title="Cerca"
              color="lightgreen"
              onPress={() => setIsModalVisible(false)}
            />
          </View>
        </Modal>

        <Pressable onPress={() => console.log("Image pressed")}>
          <Image
            source={{
              uri: "https://pics.craiyon.com/2023-07-07/fca31e9e4c7b496cbc5fbc51a4988fc4.webp",
            }}
            style={styles.remoteImage}
          />
        </Pressable>

        <Pressable onPress={() => console.log("goodDayText pressed")}>
          <Text style={styles.goodDayText}>que tenga un buen día</Text>
        </Pressable>

        <Text style={styles.goodDayTextSmall}>que tenga un buen día</Text>
        <StatusBar style="auto" />
      </View>
      

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          Many different kinds of people use React Native: from advanced iOS
          developers to React beginners, to people getting started programming
          for the first time in their career. These docs were written for all
          learners, no matter their experience level or background...
        </Text>
      </View>

      <View style={{ flex: 1, padding: 60 }}>
        <StatusBar backgroundColor="white" barStyle="light-content" hidden={false} />
      </View>
    </ScrollView>
    <Navbar /> 

    </View>
  );
}

const styles = StyleSheet.create({
  main:{
    paddingTop: 32,
  },
  scrollView: {
    backgroundColor: "#f0f8ff",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  greetingText: {
    marginTop: 20,
    color: "green",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  sunnyImage: {
    width: 300,
    height: 300,
    marginVertical: 10,
  },
  remoteImage: {
    width: wp("80%"),
    height: 200,
    marginVertical: 10,
  },
  goodDayText: {
    color: "green",
    fontSize: 30,
    textAlign: "center",
    marginVertical: 5,
  },
  goodDayTextSmall: {
    color: "green",
    fontSize: 20,
    textAlign: "center",
    marginVertical: 5,
  },
  infoContainer: {
    padding: 10,
  },
  infoText: {
    fontSize: 10,
    textAlign: "justify",
  },
});
