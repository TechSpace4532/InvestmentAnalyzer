import React, { useState, useEffect } from "react";
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import questionsData from "../assets/data/questions1.json";
import { Screens, Strings } from "../constants/Strings";

const QuestionnaireScreen = ({ navigation }) => {
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});

    useEffect(() => {
        setQuestions(questionsData);
    }, []);

    const handleAnswer = (questionId, score) => {
        setAnswers({ ...answers, [questionId]: score });
    };

    const calculateScore = () => {
        const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0);
        navigation.navigate(Screens.result, { score: totalScore });
    };

    return (
        <View style={styles.container}>
            <View style={styles.progressContainer}>
                <Text style={styles.progressText}>
                    {Object.keys(answers).length} / {questions.length} {Strings.questionsAnswered}
                </Text>
            </View>
            <FlatList
                data={questions}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.questionContainer}>
                        <Text style={styles.question}>{item.question}</Text>
                        {item.options.map((option, index) => {
                            const isSelected = answers[item.id] === item.scores[index];
                            return (
                                <TouchableOpacity
                                    key={index}
                                    style={[styles.option, isSelected && styles.selectedOption]}
                                    onPress={() => handleAnswer(item.id, item.scores[index])}
                                >
                                    <Text style={isSelected ? styles.selectedText : styles.optionText}>{option}</Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                )}
                initialNumToRender={questions.length}
                maxToRenderPerBatch={questions.length}
            />
            <Button title="Submit" onPress={calculateScore} disabled={Object.keys(answers).length < questions.length} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    questionContainer: { marginBottom: 20 },
    progressContainer: { marginBottom: 10, alignItems: "center" },
    progressText: { marginTop: 5, fontSize: 14, color: "#666" },
    question: { fontSize: 18, fontWeight: "bold" },
    option: { backgroundColor: "#ddd", padding: 10, marginTop: 5, borderRadius: 5, alignItems: "center" },
    selectedOption: { backgroundColor: "#4CAF50" },
    optionText: { fontSize: 16 },
    selectedText: { fontSize: 16, color: "white", fontWeight: "bold" },
});

export default QuestionnaireScreen;
