import React, { useState } from "react";
import { MotiView } from "moti";
import { StatusBar, Text, TextInput, TouchableOpacity } from "react-native";

import { getMotivational, getDesmotivational } from "../services/ai";

import styles from "../styles";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [content, setContent] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleResponse = async (responseCallback: Function) => {
    try {
      setIsLoading(true);
      setResponse(await responseCallback(content));
    } catch (error) {
      setResponse("Erro inesperado, tente outra vez!");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />

      <Text style={styles.title}>MUDE.me</Text>
      <Text style={styles.subtitle}>Sua máquina de motivação, ou não!</Text>
      <TextInput style={styles.input} onChangeText={setContent}  placeholder="Digite o tema ou situação que deseja abordar" />

      <TouchableOpacity onPress={() => handleResponse(getMotivational)} style={styles.button} disabled={!content.length}>
        <Text style={styles.label}>Me motive!</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleResponse(getDesmotivational)} style={styles.button} disabled={!content.length}>
        <Text style={styles.label}>Me desmotive!</Text>
      </TouchableOpacity>

      <MotiView
        from={{ opacity: 0, translateY: 200 }}
        animate={{ opacity: 1, translateY: 0 }}
        style={styles.card}
       >
        <Text style={styles.cardTitle}>Resposta:</Text>
        <Text style={styles.cardText}>{isLoading ? 'Carregando...' : response}</Text>
      </MotiView>
    </SafeAreaView>
  )
}
