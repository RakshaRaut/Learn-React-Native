import { StatusBar } from "expo-status-bar";
import { useState } from "react"; // Added import for useState
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  Pressable,
  Modal,
} from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false); // Corrected useState syntax

  return (
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
          learners, no matter their experience level or background. You can
          start here and read through these docs linearly like a book; or you
          can read the specific sections you need. Already familiar with React?
          You can skip that section—or read it for a light refresher. To work
          with React Native, you will need to have an understanding of
          JavaScript fundamentals. If you’re new to JavaScript or need a
          refresher, you can dive in or brush up at Mozilla Developer Network.
          The above is a Snack Player. It’s a handy tool created by Expo to
          embed and run React Native projects and share how they render in
          platforms like Android and iOS. The code is live and editable, so you
          can play directly with it in your browser. Go ahead and try changing
          the "Try editing me!" text above to "Hello, world!" People from many
          different development backgrounds are learning React Native. You may
          have experience with a range of technologies, from web to Android to
          iOS and more. We try to write for developers from all backgrounds.
          Sometimes we provide explanations specific to one platform or another
          like so: React Native allows developers who know React to create
          native apps. At the same time, native developers can use React Native
          to gain parity between native platforms by writing common features
          once. We believe that the best way to experience React Native is
          through a Framework, a toolbox with all the necessary APIs to let you
          build production-ready apps. You can also use React Native without a
          Framework, however, we’ve found that most developers benefit from
          using a React Native Framework like Expo. Expo provides features like
          file-based routing, high-quality universal libraries, and the ability
          to write plugins that modify native code without having to manage
          native files. Many different kinds of people use React Native: from
          advanced iOS developers to React beginners, to people getting started
          programming for the first time in their career. These docs were
          written for all learners, no matter their experience level or
          background. You can start here and read through these docs linearly
          like a book; or you can read the specific sections you need. Already
          familiar with React? You can skip that section—or read it for a light
          refresher. To work with React Native, you will need to have an
          understanding of JavaScript fundamentals. If you’re new to JavaScript
          or need a refresher, you can dive in or brush up at Mozilla Developer
          Network. The above is a Snack Player. It’s a handy tool created by
          Expo to embed and run React Native projects and share how they render
          in platforms like Android and iOS. The code is live and editable, so
          you can play directly with it in your browser. Go ahead and try
          changing the "Try editing me!" text above to "Hello, world!" People
          from many different development backgrounds are learning React Native.
          You may have experience with a range of technologies, from web to
          Android to iOS and more. We try to write for developers from all
          backgrounds. Sometimes we provide explanations specific to one
          platform or another like so: React Native allows developers who know
          React to create native apps. At the same time, native developers can
          use React Native to gain parity between native platforms by writing
          common features once. We believe that the best way to experience React
          Native is through a Framework, a toolbox with all the necessary APIs
          to let you build production-ready apps. You can also use React Native
          without a Framework, however, we’ve found that most developers benefit
          from using a React Native Framework like Expo. Expo provides features
          like file-based routing, high-quality universal libraries, and the
          ability to write plugins that modify native code without having to
          manage native files.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#f0f8ff", // Background color for the scroll view
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  greetingText: {
    color: "green",
    fontSize: 30,
    fontFamily: "poppins",
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
    fontFamily: "poppins",
    textAlign: "justify",
  },
});
