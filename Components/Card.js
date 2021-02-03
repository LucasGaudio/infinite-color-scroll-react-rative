import React from "react";
import { View, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";

const Card = props => {
	return (
		<TouchableWithoutFeedback>
			<View style={styles.summaryContainer}>
				<Text>You selected the color</Text>
				<View style={{ ...styles.colorCard, ...props.style }}>
					<Text style={{ ...props.style, fontSize: 22 }}>{props.children}</Text>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
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

export default Card;
