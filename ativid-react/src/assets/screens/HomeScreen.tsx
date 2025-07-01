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

