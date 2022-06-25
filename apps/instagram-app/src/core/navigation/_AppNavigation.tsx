import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { IndexScreen, LoginScreen, SignupScreen } from "../../screens/auth";

const Stack = createNativeStackNavigator();

const AppNavigator: React.FC = (): React.ReactElement => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Index" component={IndexScreen} />
			<Stack.Screen name="Login" component={LoginScreen} />
			<Stack.Screen name="Signup" component={SignupScreen} />
		</Stack.Navigator>
	);
};

export default AppNavigator;
