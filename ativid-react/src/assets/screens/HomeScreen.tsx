import { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const [tarefa, setTarefa] = useState("");
  const navigation = useNavigation();

