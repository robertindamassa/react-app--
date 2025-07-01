import { useRoute, useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { useState } from "react";

export default function TarefasScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const tarefaInicial = route.params?.tarefa ?? "";

  const [tarefas, setTarefas] = useState([tarefaInicial]);

  const deletarTarefa = (index: number) => {
    const novas = tarefas.filter((_, i) => i !== index);
    setTarefas(novas);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TAREFAS</Text>
      <FlatList
        data={tarefas}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            <Text style={styles.texto}>{item}</Text>
            <Button title="Deletar" color="red" onPress={() => deletarTarefa(index)} />
          </View>
        )}
      />
      <Button title="Voltar" onPress={() => navigation.goBack()} color="#2D2DFF" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 60, backgroundColor: "#F3F3FF", paddingHorizontal: 20 },
  title: { fontSize: 24, fontWeight: "bold", color: "#2D2DFF", marginBottom: 20 },
  item: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10, backgroundColor: "#fff", padding: 10, borderRadius: 8, borderColor: "#ccc", borderWidth: 1 },
  texto: { fontSize: 16, color: "#333" },
});