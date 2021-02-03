import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from "react-native";

export default function App() {
	const [boxes, setBoxes] = useState([]);

	const renderListItem = itemData => {
		return (
			<View style={styles.hero}>
				<TouchableOpacity
					key={itemData.index}
					style={{
						width: "100%",
						height: 100,
						backgroundColor:
							itemData.item.bg.length < 7 ? `${itemData.item.bg}1` : itemData.item.bg,
						shadowRadius: 6,
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<View style={styles.listItem}>
						<Text style={styles.number}>{itemData.index + 1}</Text>
						<Text style={styles.number}>
							{itemData.item.bg.length < 7
								? `${itemData.item.bg}1`
								: itemData.item.bg}
						</Text>
					</View>
				</TouchableOpacity>
			</View>
		);
	};

	useEffect(() => {
		if (boxes.length >= 0) {
			const interval = setInterval(() => {
				setBoxes([...boxes, { bg: "#" + ((Math.random() * 16777215) << 0).toString(16) }]);
			}, 1);

			return () => clearInterval(interval);
		}
	}, [boxes]);

	return (
		<FlatList
			data={boxes}
			renderItem={renderListItem}
			keyExtractor={(item, index) => "key" + index}
		/>
	);
}

const styles = StyleSheet.create({
	hero: {
		flexGrow: 1,
		backgroundColor: "#000",
	},
	listItem: {
		alignItems: "flex-start",
		width: "60%",
	},
	number: {
		fontSize: 17,
		textTransform: "uppercase",
		color: "#fff",
		marginVertical: 2,
	},
});
