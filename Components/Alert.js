import React from "react";
import { View, StyleSheet, Text, Alert } from "react-native";

const AlerContainer = props => {
	const handleColorPress = Alert.alert("You selected the color", "props.children", [
		{ text: "Okay", style: "destructive" },
	]);
	return handleColorPress;
};

const styles = StyleSheet.create({
	summaryContainer: {
		justifyContent: "space-around",
		alignItems: "center",
		marginTop: 20,
		height: 220,
		width: 220,
	},
	colorCard: {
		borderWidth: 2,
		padding: 10,
		borderRadius: 15,
		marginVertical: 10,
		justifyContent: "center",
		alignItems: "center",
		width: 80,
	},
});

export default AlerContainer;
