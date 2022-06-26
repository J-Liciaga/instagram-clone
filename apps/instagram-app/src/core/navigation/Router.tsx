import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppNavigator from "./_AppNavigation";
import AuthNavigator from "./_AuthNavigation";

const Stack = createNativeStackNavigator();

const Router: React.FC = (): React.ReactElement => {
	const auth = true;

	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			{auth ? (
				<Stack.Screen name="app" component={AppNavigator} />
			) : (
				<Stack.Screen name="auth" component={AuthNavigator} />
			)}
		</Stack.Navigator>
	);
};

export default Router;
