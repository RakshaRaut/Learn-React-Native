import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Pressable onPress={() => console.log("Home pressed")} style={styles.navItem}>
        <Text style={styles.navText}>Home</Text>
      </Pressable>
      <Pressable onPress={() => console.log("About pressed")} style={styles.navItem}>
        <Text style={styles.navText}>About</Text>
      </Pressable>
      <Pressable onPress={() => console.log("Contact pressed")} style={styles.navItem}>
        <Text style={styles.navText}>Contact</Text>
      </Pressable>
      <Pressable onPress={() => console.log("Search pressed")} style={styles.navItem}>
        <Text style={styles.navText}>Search</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems:"center",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  navItem: {
    paddingTop: 40,
  },
  navText: {
    color: "black", 
    fontSize: 25,
    fontWeight: "bold", 
    // marginTop: 10,
  },
});

export default Navbar;
