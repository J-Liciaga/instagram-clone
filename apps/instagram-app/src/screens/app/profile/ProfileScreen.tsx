import * as React from "react";
import { View, Text } from "react-native";

interface ProfileScreenProps {
	navigation: any;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({
	navigation,
}): React.ReactElement => {
	return (
		<View>
			<Text>ProfileScreen - Hello World!</Text>
		</View>
	);
};

export default ProfileScreen;
