import * as React from "react";
import { TouchableOpacity, Text } from "react-native";

export interface ButtonProps {
	label: string;
}

const Button: React.FC<ButtonProps> = ({
	label = "hello world",
}): React.ReactElement => {
	return (
		<TouchableOpacity>
			<Text>{label}</Text>
		</TouchableOpacity>
	);
};

export default Button;
