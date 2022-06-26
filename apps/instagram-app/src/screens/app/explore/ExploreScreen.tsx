import * as React from "react";
import { View, Text } from "react-native";

interface ExploreScreenProps {
	navigation: any;
}

const ExploreScreen: React.FC<ExploreScreenProps> = ({
	navigation,
}): React.ReactElement => {
	return (
		<View>
			<Text>ExploreScreen - Hello World!</Text>
		</View>
	);
};

export default ExploreScreen;
