import * as React from "react";
import {
	NavigationContainer,
	useNavigationContainerRef,
} from "@react-navigation/native";
import { Router } from "../core/navigation";

export const App = () => {
	const navigationRef = useNavigationContainerRef();

	return (
		<NavigationContainer ref={navigationRef}>
			<Router />
		</NavigationContainer>
	);
};

export default App;
