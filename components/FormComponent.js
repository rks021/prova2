import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

const FormComponent = () => {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [email, setEmail] = useState("");


  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />
      <Text style={styles.text}>Olá, {nome}!</Text>
    
      <TextInput
      style={styles.input}
      placeholder="Digite sua idade"
      value={idade}
      onChangeText={setIdade}
    />
    <Text style={styles.text}>Olá, {nome}, {idade}!</Text>
    
    <Text style={styles.text}>Olá, {nome}!</Text>
      <TextInput
      style={styles.input}
      placeholder="Digite seu email"
      value={email}
      onChangeText={setEmail}
    />
    <Text style={styles.text}>Olá, {nome}, {email}, {idade}!</Text>
    </View>
    
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    width: "100%",
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
  },
});

export default FormComponent;
