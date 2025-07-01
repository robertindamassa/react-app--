import { View, Text, StyleSheet, Image, TextInput, Button, ScrollView, TouchableOpacity } from "react-native";
import { useState } from "react";
import { MaterialIcons } from '@expo/vector-icons'; // Adicionado para ícones

interface Tarefa {
  id: number;
  nome: string;
  descricao: string;
  concluida: boolean; // Novo campo
}

export default function App() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [nomeTarefa, setNomeTarefa] = useState("");
  const [descricaoTarefa, setDescricaoTarefa] = useState("");

  const adicionarTarefa = () => {
    if (nomeTarefa.trim() !== "" && descricaoTarefa.trim() !== "") {
      const novaTarefa: Tarefa = {
        id: Date.now(),
        nome: nomeTarefa.trim(),
        descricao: descricaoTarefa.trim(),
        concluida: false, // Inicialmente não concluída
      };
      setTarefas([...tarefas, novaTarefa]);
      setNomeTarefa("");
      setDescricaoTarefa("");
    }
  };

  const excluirTarefa = (id: number) => {
    setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
  };

  // Alterna o estado de concluída da tarefa
  const alternarConcluida = (id: number) => {
    setTarefas(tarefas.map(tarefa =>
      tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
    ));
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
        placeholder="Nome da tarefa"
        placeholderTextColor="#888"
        value={nomeTarefa}
        onChangeText={setNomeTarefa}
      />
      <TextInput
        style={[styles.input, {marginTop: 10}]}
        placeholder="Descrição da tarefa"
        placeholderTextColor="#888"
        value={descricaoTarefa}
        onChangeText={setDescricaoTarefa}
        multiline
      />
      <View style={styles.buttonContainer}>
        <Button title="Enviar" onPress={adicionarTarefa} color="#2D2DFF" />
      </View>
      <ScrollView style={styles.tarefasContainer} showsVerticalScrollIndicator={false}>
        {tarefas.map((tarefa ) => (
          <View key={tarefa.id} style={styles.tarefaItem}>
            {/* Ícone de status */}
            <TouchableOpacity onPress={() => alternarConcluida(tarefa.id)} style={{marginRight: 10}}>
              <MaterialIcons
                name={tarefa.concluida ? "check-circle" : "radio-button-unchecked"}
                size={28}
                color={tarefa.concluida ? "#2D2DFF" : "#888"}
              />
            </TouchableOpacity>
            <View style={{flex: 1}}>
              {/* Nome da tarefa com efeito riscado se concluída */}
              <TouchableOpacity onPress={() => alternarConcluida(tarefa.id)}>
                <Text
                  style={[
                    styles.tarefaTexto,
                    tarefa.concluida && styles.tarefaConcluida
                  ]}
                >
                  {tarefa.nome}
                </Text>
              </TouchableOpacity>
              <Text style={styles.tarefaDescricao}>{tarefa.descricao}</Text>
            </View>
            <TouchableOpacity 
              style={styles.botaoExcluir}
              onPress={() => excluirTarefa(tarefa.id)}
            >
              <Text style={styles.textoExcluir}>Excluir</Text>
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
  tarefasContainer: {
    width: "80%",
    marginTop: 20,
    maxHeight: 300, 
  },
  tarefaItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderColor: "#2D2DFF",
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tarefaTexto: {
    flex: 1,
    fontSize: 16,
    color: "#222",
    marginRight: 10,
  },
  tarefaConcluida: {
    textDecorationLine: "line-through",
    color: "#888",
  },
  botaoExcluir: {
    backgroundColor: "#FF4444",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 5,
  },
  textoExcluir: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  tarefaDescricao: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
});