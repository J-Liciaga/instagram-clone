import * as React from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	Dimensions,
} from "react-native";

const LoginScreen: React.FC = ({ navigation }): React.ReactElement => {
	const navigationHandler = (screen: string) => navigation.navigate("Signup");
	return (
		<View style={styles.container}>
			<View style={styles.wrapper}>
				<View style={styles.title_container}>
					<Text style={styles.title}>Instagram</Text>
				</View>
				<View style={styles.section}>
					<View style={styles.input_container}>
						<TextInput placeholder="username" />
						<TextInput placeholder="Password" />
					</View>
					<View style={styles.forgot_password_container}>
						<TouchableOpacity style={styles.forgot_password_button}>
							<Text style={styles.link_button_label}>
								Forgot Password?
							</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.login_button_container}>
						<TouchableOpacity style={styles.button}>
							<Text style={styles.button_label}>Log in</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.or_container}>
						<View style={styles.divider} />
						<View style={styles.or_wrapper}>
							<Text style={styles.or_text}>OR</Text>
						</View>
						<View style={styles.divider} />
					</View>
					<TouchableOpacity style={styles.facebook_link_button}>
						<Text style={styles.link_button_label}>
							Log in with Facebook
						</Text>
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.switch_to_signup_button_container}>
				<View style={styles.switch_to_signup_button_wrapper}>
					<TouchableOpacity
						style={styles.switch_to_signup_button}
						onPress={() => {
							navigationHandler("Signup");
						}}
					>
						<Text>Don't have an account? Signup</Text>
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
		padding: 14,
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
	facebook_link_button: {
		width: "75%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		paddingVertical: 10,
		marginVertical: 16,
	},
	link_button_label: {
		fontSize: 14,
		fontWeight: "600",
		color: "blue",
	},
	input_container: {
		width: "100%",
		display: "flex",
		justifyContet: "center",
		alignItems: "center",
		marginVertical: 10,
	},
	login_button_container: {
		width: "100%",
		display: "flex",
		justifyContet: "center",
		alignItems: "center",
		marginVertical: 16,
	},
	forgot_password_container: {
		width: "100%",
		display: "flex",
		justifyContet: "center",
		alignItems: "flex-end",
		marginVertical: 8,
	},
	forgot_password_button: {
		display: "flex",
		justifyContet: "center",
		alignItems: "center",
	},
	or_container: {
		width: "100%",
		display: "flex",
		flexDirection: "row",
		justifyContet: "center",
		alignItems: "center",
	},
	divider: {
		width: "40%",
		display: "flex",
		justifyContet: "center",
		alignItems: "center",
		borderWidth: 0.45,
	},
	or_wrapper: {
		width: "20%",
		display: "flex",
		justifyContet: "center",
		alignItems: "center",
	},
	or_text: {
		display: "flex",
		justifyContet: "center",
		alignItems: "center",
	},
	switch_to_signup_button_container: {
		height: "20%",
		width: "100%",
		display: "flex",
		justifyContet: "center",
		alignItems: "center",
		borderTopWidth: 1,
	},
	switch_to_signup_button_wrapper: {
		height: "100%",
		width: "100%",
		display: "flex",
		justifyContet: "center",
		alignItems: "center",
	},
	switch_to_signup_button: {
		paddingVertical: 25,
		width: "100%",
		display: "flex",
		justifyContet: "center",
		alignItems: "center",
	},
});

export default LoginScreen;
