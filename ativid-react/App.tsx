import { View, Text, StyleSheet, Image } from "react-native";

export default function App() {
  return( 
    <View style={styles.container}>
     
      <Text style={{ fontSize: 20, color: "#000" }}>TAREFAS</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F3F3FF",
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },

});