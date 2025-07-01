import { View, Text, StyleSheet, Image } from "react-native";

export default function App() {
  return( 
    <View style={styles.container}>
     
      <Text style={styles.title}>TAREFAS</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start", 
    alignItems: "center",
    backgroundColor: "#F3F3FF",
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },

  title: {
  fontSize: 24,
  color: "#2D2DFF",
  marginTop: 40,
  fontWeight: "bold",
  letterSpacing: 2,
  textTransform: "uppercase",
},
});

