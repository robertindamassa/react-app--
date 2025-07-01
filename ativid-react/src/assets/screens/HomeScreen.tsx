import { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const [tarefa, setTarefa] = useState("");
  const navigation = useNavigation();

  const enviarTarefa = () => {
    if (tarefa.trim() === "") return;
    navigation.navigate("Tarefas" as never, { tarefa } as never);
    setTarefa(""); 
  };

  return (
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
        value={tarefa}
        onChangeText={setTarefa}
      />
      <View style={styles.buttonContainer}>
        <Button title="Enviar" onPress={enviarTarefa} color="#2D2DFF" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "flex-start", alignItems: "center", backgroundColor: "#F3F3FF" },
  logo: { width: 200, height: 100, resizeMode: "contain", marginVertical: 2 },
  title: { fontSize: 24, color: "#2D2DFF", marginTop: 40, fontWeight: "bold", letterSpacing: 2, textTransform: "uppercase" },
  input: { width: "80%", height: 40, borderColor: "#2D2DFF", borderWidth: 1, borderRadius: 8, paddingHorizontal: 10, backgroundColor: "#fff", fontSize: 16, color: "#222", marginTop: 40, marginBottom: 20 },
  buttonContainer: { width: "80%", marginTop: 20, borderRadius: 8, overflow: "hidden" },
});

