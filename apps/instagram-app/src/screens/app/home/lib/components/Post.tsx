import * as React from "react";
import { View, Text } from "react-native";

export interface PostProps {}

const Post: React.FC<PostProps> = (): React.ReactElement => {
	return (
		<View>
			<Text>Post!</Text>
		</View>
	);
};

export default Post;
