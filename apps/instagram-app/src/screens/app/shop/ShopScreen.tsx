import * as React from "react";
import { View, Text } from "react-native";

interface ShopScreenProps {
	navigation: any;
}

const ShopScreen: React.FC<ShopScreenProps> = ({
	navigation,
}): React.ReactElement => {
	return (
		<View>
			<Text>ShopScreen - Hello World!</Text>
		</View>
	);
};

export default ShopScreen;
