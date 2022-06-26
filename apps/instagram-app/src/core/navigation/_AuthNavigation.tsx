import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
	IndexScreen,
	LoginScreen,
	SignupScreen,
} from "@instagram-app/screens/auth";

const Stack = createNativeStackNavigator();

const AuthNavigator: React.FC = (): React.ReactElement => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Index"
				component={IndexScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen name="Login" component={LoginScreen} />
			<Stack.Screen name="Signup" component={SignupScreen} />
		</Stack.Navigator>
	);
};

export default AuthNavigator;
