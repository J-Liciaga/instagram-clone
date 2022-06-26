import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppBottomTabNavigator } from "./app-navigators";

const Stack = createNativeStackNavigator();

const AppNavigator: React.FC = (): React.ReactElement => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="App" component={AppBottomTabNavigator} />
		</Stack.Navigator>
	);
};

export default AppNavigator;
