import { View, Text, StyleSheet, Image, TextInput, Button } from "react-native";

export default function App() {
  return( 
    <View style={styles.container}>
     
      <Text style={styles.title}>TAREFAS</Text>
      <TextInput
      style={styles.input}
      placeholder="Digite uma tarefa"
      placeholderTextColor="#888"
      />
     <View style={styles.buttonContainer}>
        <Button title="Enviar" onPress={() => {}} color="#2D2DFF" />
      </View>
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
  input: { 
    width: "80%",
    height: 40,
    borderColor: "#2D2DFF",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    fontSize: 16,
    color: "#222",
    position: "absolute",
    bottom: 500, 
    alignSelf: "center",
    marginTop: 500,
    marginBottom: 80,
  },
  buttonContainer: {
    width: "80%",
    marginTop: 300,
    borderRadius: 8,
    overflow: "hidden",
  },
});

