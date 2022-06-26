import * as React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const IndexScreen: React.FC = ({ navigation }): React.ReactElement => {
	const navigationHandler = (screen: string) => navigation.navigate(screen);

	return (
		<View style={styles.container}>
			<View style={styles.wrapper}>
				<View style={styles.title_container}>
					<Text style={styles.title}>Instagram</Text>
				</View>
				<View style={styles.section}>
					<TouchableOpacity
						style={styles.button}
						onPress={() => {
							navigationHandler("Signup");
						}}
					>
						<Text style={styles.button_label}>
							Create new account
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.link_button}
						onPress={() => {
							navigationHandler("Login");
						}}
					>
						<Text>Login</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		height: "100%",
		width: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	wrapper: {
		height: "100%",
		width: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	title_container: {
		paddingVertical: 45,
	},
	title: {
		fontSize: 35,
	},
	section: {
		width: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	button: {
		width: "75%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		paddingVertical: 10,
		borderRadius: 4,
		backgroundColor: "blue",
		marginVertical: 5,
	},
	button_label: {
		fontSize: 14,
		fontWeight: "600",
		color: "#fff",
	},
	link_button: {
		width: "75%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		paddingVertical: 10,
		marginVertical: 5,
	},
	link_button_label: {
		fontSize: 14,
		fontWeight: "600",
		color: "blue",
	},
});

export default IndexScreen;
