import * as React from "react";
import { View, Text, Image, Dimensions, StyleSheet } from "react-native";

export interface CreateStoryProps {
	avatarURI: string;
}

const CreateStory: React.FC<CreateStoryProps> = ({
	avatarURI = "https://images.pexels.com/photos/5952647/pexels-photo-5952647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
}): React.ReactElement => {
	return (
		<View style={styles.story}>
			<View style={styles.avatar_container}>
				<Image
					source={{ uri: avatarURI }}
					style={styles.stories_avatar}
					resizeMode="center"
				/>
				<View style={styles.create_story_icon_container}>
					<View style={styles.create_story_icon_wrapper}>
						<Text>+</Text>
					</View>
				</View>
			</View>
			<View style={styles.story_username_wrapper}>
				<Text style={styles.story_username_text}>Your Story</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	stories_avatar: {
		height: 55,
		width: 55,
		borderRadius: 100,
	},
	story: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		paddingRight: 8,
	},
	story_username_wrapper: {
		marginTop: 5,
	},
	story_username_text: {
		fontSize: 12,
	},
	create_story_icon_container: {
		height: 25,
		width: 25,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		position: "absolute",
		bottom: -2,
		right: -2,
		borderRadius: 100,
		backgroundColor: "#fff",
	},
	create_story_icon_wrapper: {
		height: 18,
		width: 18,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 100,
		backgroundColor: "lightblue",
	},
	avatar_container: {
		margin: 6,
	},
});

export default CreateStory;
