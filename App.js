import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const App = () => {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter(counter + 1);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: "https://blog.castle.io/content/images/2021/03/blog-thumb-1.png",
        }}
      />
      <Text style={styles.title}>Native Counter App</Text>
      <Text style={styles.subtitle}>this is a one-screen page</Text>
      <TouchableOpacity style={styles.button} onPress={incrementCounter}>
        <Text style={styles.buttonText}>Counter: {counter}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#101428",
  },
  logo: {
    width: 320,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#ffffff",
  },
  subtitle: {
    fontSize: 18,
    color: "#ffffff",
  },
  button: {
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 5,
    marginTop: 30,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#101428",
  },
});

export default App;
