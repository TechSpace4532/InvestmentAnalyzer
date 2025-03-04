import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import { Screens, Strings } from "../constants/Strings";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/images/invest_money.jpg")}
      />
      <Text style={styles.title}>{Strings.welcomeText}</Text>
      <Button title={Strings.startQuestionnaire} onPress={() => navigation.navigate(Screens.questionnaire)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  image: { width: "80%", height: 300, marginBottom: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
});

export default HomeScreen;
