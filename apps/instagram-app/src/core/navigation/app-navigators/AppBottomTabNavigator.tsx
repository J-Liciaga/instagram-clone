import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
	HomeScreen,
	ExploreScreen,
	ProfileScreen,
	ReelsScreen,
	ShopScreen,
} from "@instagram-app/screens/app";

const Tab = createBottomTabNavigator();

const AppBottomTabNavigator = () => {
	return (
		<Tab.Navigator initialRouteName="Home">
			<Tab.Screen name="Home" component={HomeScreen} />
			<Tab.Screen name="Explore" component={ExploreScreen} />
			<Tab.Screen name="Reels" component={ReelsScreen} />
			<Tab.Screen name="Shop" component={ShopScreen} />
			<Tab.Screen name="Profile" component={ProfileScreen} />
		</Tab.Navigator>
	);
};

export default AppBottomTabNavigator;
