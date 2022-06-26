import * as React from "react";
import { View, Text } from "react-native";

interface ReelsScreenProps {
	navigation: any;
}

const ReelsScreen: React.FC<ReelsScreenProps> = ({
	navigation,
}): React.ReactElement => {
	return (
		<View>
			<Text>ReelsScreen - Hello World!</Text>
		</View>
	);
};

export default ReelsScreen;
