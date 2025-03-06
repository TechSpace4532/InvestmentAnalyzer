import React from "react";
import { View, Text, Button, StyleSheet, Image, Pressable } from "react-native";
import { Screens, Strings } from "../constants/Strings";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/images/invest_money.jpg")}
      />
      <Text style={styles.title}>{Strings.welcomeText}</Text>
      <Pressable style={styles.buttonStyle} onPress={() => navigation.navigate(Screens.questionnaire)}>
        <Text style={styles.buttonText}>{Strings.startQuestionnaire}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
  image: { width: "80%", height: 300, marginBottom: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  buttonStyle: { backgroundColor: "#4CAF50", padding: 15, borderRadius: 50 },
  buttonText: { color: "#fff", fontWeight: "bold" },
});

export default HomeScreen;
