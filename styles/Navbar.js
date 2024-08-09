import { StyleSheet } from "react-native";

export const Navstyles = StyleSheet.create({
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
    },
  });