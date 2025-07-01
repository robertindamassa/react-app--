import { View, Text, StyleSheet, Image, TextInput, Button } from "react-native";
import { useState } from "react"; 

interface Tarefa {
  id: number;
  texto: string;
}

export default function App() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [textoTarefa, setTextoTarefa] = useState("");

  return( 
    <View style={styles.container}>
      <Text style={styles.title}>TAREFAS</Text>
      <Image
        source={{ uri: "https://cdn-icons-png.flaticon.com/512/1582/1582717.png" }}
        style={styles.logo}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite uma tarefa"
        placeholderTextColor="#888"
      />
      <View style={styles.buttonContainer}>
        <Button title="Enviar" onPress={( ) => {}} color="#2D2DFF" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start", 
    alignItems: "center",
    backgroundColor: "#FFDEAD",
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: "contain",
    marginVertical: 20,
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
    marginTop: 30,
    marginBottom: 30,
  },
  buttonContainer: {
    width: "80%",
    marginTop: 10,
    borderRadius: 8,
    overflow: "hidden",
  },
});