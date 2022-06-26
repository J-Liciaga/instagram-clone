import * as React from "react";
import {
	View,
	Text,
	Image,
	Dimensions,
	TouchableOpacity,
	StyleSheet,
} from "react-native";
import Story from "./_Story";

const temp_avatar =
	"https://images.pexels.com/photos/5952647/pexels-photo-5952647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

export interface PostProps {
	avatarURI: string;
	description?: string;
	follow?: boolean;
	images: string[];
}

const Post: React.FC<PostProps> = ({
	avatarURI,
	description = "description",
	follow = true,
	images,
}): React.ReactElement => {
	return (
		<View style={styles.post_container}>
			<View style={styles.post_header_container}>
				<View style={styles.post_header}>
					<View style={styles.avatar_container}>
						<Story avatarURI={temp_avatar} size="small" />
					</View>
					<View style={styles.username_container}>
						<Text>username</Text>
						{description ? <Text>description</Text> : null}
					</View>
					{follow ? <View style={styles.follow_divider} /> : null}
					{follow ? (
						<TouchableOpacity style={styles.follow_button}>
							<Text>Follow</Text>
						</TouchableOpacity>
					) : null}
				</View>
				<View style={styles.post_header_options}>
					<Text>...</Text>
				</View>
			</View>
			<View style={styles.post_body}>
				<Image
					style={styles.post_body_imge}
					source={{ uri: images[0] }}
					resizeMode="cover"
					resizeMethod="scale"
				/>
			</View>
			<View>
				<View style={styles.post_options}>
					<View style={styles.post_social_buttons}>
						<View>
							<Text>H</Text>
						</View>
						<View>
							<Text>C</Text>
						</View>
						<View>
							<Text>S</Text>
						</View>
					</View>
					<View style={styles.carousel_wrapper}>
						<Text>Carousel</Text>
					</View>
					<View>
						<Text>Bookmark</Text>
					</View>
				</View>
				<View>
					<Text>263 Likes</Text>
				</View>
				<View>
					<Text>description</Text>
				</View>
				<View>
					<Text>View all comments</Text>
				</View>
				<View>
					<Text>2 hours ago</Text>
				</View>
			</View>
		</View>
	);
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
	post_options: {
		width,
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingVertical: 16,
	},
	post_social_buttons: {
		width: "32.5%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 10,
	},
	carousel_wrapper: {
		width: "32.5%",
	},
	bookmark_wrapper: {
		width: "32.5%",
	},
	post_container: {
		width,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	post_header_container: {
		width: "100%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 10,
	},
	post_header: {
		width: "85%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		paddingVertical: 8,
	},
	post_header_options: {
		width: "15%",
		display: "flex",
		justifyContent: "center",
		alignItems: "flex-end",
	},
	avatar_container: {
		marginRight: 4,
	},
	username_container: {
		marginRight: 10,
	},
	follow_container: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	follow_button: {
		marginRight: 15,
	},
	follow_divider: {
		height: 4,
		width: 4,
		borderRadius: 100,
		backgroundColor: "#000",
		marginRight: 15,
	},
	post_body_imge: {
		height: 350,
		width,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	post_body: {
		width,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
});

export default Post;
