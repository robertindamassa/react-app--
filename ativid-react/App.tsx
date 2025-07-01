import { View, Text, StyleSheet, Image, TextInput, Button, ScrollView, TouchableOpacity } from "react-native"; // Adicione ScrollView e TouchableOpacity
import { useState } from "react";

interface Tarefa {
  id: number;
  texto: string;
}

export default function App() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [textoTarefa, setTextoTarefa] = useState("");

  const adicionarTarefa = () => {
    if (textoTarefa.trim() !== "") {
      const novaTarefa: Tarefa = {
        id: Date.now(),
        texto: textoTarefa.trim()
      };
      setTarefas([...tarefas, novaTarefa]);
      setTextoTarefa("");
    }
  };

  const excluirTarefa = (id: number) => {
    setTarefas(tarefas.filter(tarefa => tarefa.id !== id)); 
  };

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
        value={textoTarefa}
        onChangeText={setTextoTarefa}
      />
      <View style={styles.buttonContainer}>
        <Button title="Enviar" onPress={adicionarTarefa} color="#2D2DFF" />
      </View>
      
    
      <ScrollView style={styles.tarefasContainer} showsVerticalScrollIndicator={false}> {}
        {tarefas.map((tarefa ) => (
          <View key={tarefa.id} style={styles.tarefaItem}> {}
            <Text style={styles.tarefaTexto}>{tarefa.texto}</Text> {}
            <TouchableOpacity 
              style={styles.botaoExcluir} 
              onPress={() => excluirTarefa(tarefa.id)}
            >
              <Text style={styles.textoExcluir}>Excluir</Text> {}
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
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