import * as React from "react";
import {
	View,
	TouchableOpacity,
	Text,
	Image,
	Dimensions,
	StyleSheet,
} from "react-native";

export interface StoryProps {
	avatarURI: string;
	size?: string;
	username?: string;
}

const Story: React.FC<StoryProps> = ({
	avatarURI = "https://images.pexels.com/photos/5952647/pexels-photo-5952647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
	size,
	username,
}): React.ReactElement => {
	const [viewed, setViewed] = React.useState(false);

	const viewStoryHandler = () => {
		setViewed(true);
	};

	const handleAvatarViewedIndicatorStyles = () => {
		if (size === "small") {
			return {
				borderWidth: viewed ? 1 : 3,
				borderRadius: 100,
				borderColor: viewed ? "gray" : "purple",
				margin: viewed ? 1 : 0,
			};
		}

		return {
			borderWidth: viewed ? 1 : 3,
			borderRadius: 100,
			borderColor: viewed ? "gray" : "purple",
			margin: viewed ? 3 : 0,
		};
	};

	const handleAvatarWrapperStyles = () => {
		if (size === "small") {
			return {
				borderWidth: 1.75,
				borderRadius: 100,
				borderColor: "#fff",
			};
		}

		return {
			borderWidth: 3,
			borderRadius: 100,
			borderColor: "#fff",
		};
	};

	const handleSize = () => {
		if (size === "small") {
			return {
				height: 35,
				width: 35,
				borderRadius: 100,
			};
		}

		return {
			height: 55,
			width: 55,
			borderRadius: 100,
		};
	};

	const avatarViewedIndicatorStyles = handleAvatarViewedIndicatorStyles();
	const avatarWrapperStyles = handleAvatarWrapperStyles();
	const avatarStyles = handleSize();

	return (
		<TouchableOpacity
			style={styles.story}
			onPress={() => viewStoryHandler()}
		>
			<View style={avatarViewedIndicatorStyles}>
				<View style={avatarWrapperStyles}>
					<Image
						source={{ uri: avatarURI }}
						style={avatarStyles}
						resizeMode="center"
					/>
				</View>
			</View>
			{username ? (
				<View style={styles.story_username_wrapper}>
					<Text style={styles.story_username_text}>{username}</Text>
				</View>
			) : null}
		</TouchableOpacity>
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
});

export default Story;
