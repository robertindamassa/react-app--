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

