import React, { useEffect, useRef } from "react";
import { View, Text, Button, Animated, StyleSheet, Share } from "react-native";
import { getRiskCategory } from "../services/QuestionnaireService";
import { Screens, Strings } from "../constants/Strings";

const ResultScreen = ({ route, navigation }) => {
    const { score } = route.params;
    const riskCategory = getRiskCategory(score);

    const scaleAnim = useRef(new Animated.Value(0)).current;

    const handleShare = async () => {
        try {
            await Share.share({
                message: `My risk profile is ${riskCategory} with a score of ${score}.`
            });
        }
        catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        Animated.spring(scaleAnim, {
            toValue: 1,
            friction: 5,
            useNativeDriver: true,
        }).start();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{Strings.myRiskProfile}</Text>
            <Text style={styles.score}>{Strings.score}: {score}</Text>

            <Animated.View style={[styles.animatedContainer, { transform: [{ scale: scaleAnim }] }]}>
                <Text style={styles.category}>{riskCategory}</Text>
            </Animated.View>

            <Button title={Strings.retakeTest} onPress={() => navigation.navigate(Screens.questionnaire)} />
            <Button title={Strings.share} onPress={handleShare} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center", gap: 20, padding: 20 },
    title: { fontSize: 24, fontWeight: "bold" },
    score: { fontSize: 18, marginVertical: 10 },
    animatedContainer: {
        backgroundColor: "#4CAF50",
        padding: 20,
        borderRadius: 10,
        marginVertical: 15,
    },
    category: { fontSize: 20, fontWeight: "bold", color: "white" },
});

export default ResultScreen;
