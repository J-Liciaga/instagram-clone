import * as React from "react";
import {
	View,
	ScrollView,
	Text,
	Image,
	Dimensions,
	TouchableOpacity,
	StyleSheet,
	FlatList,
} from "react-native";
import { CreateStory, Story } from "./lib/components";

interface HomeScreenProps {
	navigation: any;
}

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
		</View>
	);
};

const data = [
	{
		id: 1,
		images: [
			"https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		],
	},
	{
		id: 2,
		images: [
			"https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		],
	},
	{
		id: 3,
		images: [
			"https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		],
	},
	{
		id: 4,
		images: [
			"https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		],
	},
	{
		id: 5,
		images: [
			"https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		],
	},
];

const HomeScreen: React.FC<HomeScreenProps> = ({
	navigation,
}): React.ReactElement => {
	const [refresh, setRefresh] = React.useState({});
	const [refreshing, setRefreshing] = React.useState(false);

	const handleRefresh = () => {
		setRefresh({
			page: 1,
			refreshing: true,
		});
	};

	const renderPostItem = item => (
		<Post avatarURI={temp_avatar} images={item.images} />
	);

	return (
		<View style={styles.container}>
			<View style={styles.stories_container}>
				<ScrollView
					contentContainerStyle={styles.stories_scrollview}
					horizontal={true}
					showsHorizontalScrollIndicator={false}
				>
					<CreateStory avatarURI={temp_avatar} />
					<Story avatarURI={temp_avatar} username={"i.mr.robot"} />
					<Story avatarURI={temp_avatar} username={"i.mr.robot"} />
					<Story avatarURI={temp_avatar} username={"i.mr.robot"} />
					<Story avatarURI={temp_avatar} username={"i.mr.robot"} />
					<Story avatarURI={temp_avatar} username={"i.mr.robot"} />
					<Story avatarURI={temp_avatar} username={"i.mr.robot"} />
					<Story avatarURI={temp_avatar} username={"i.mr.robot"} />
					<Story avatarURI={temp_avatar} username={"i.mr.robot"} />
					<Story avatarURI={temp_avatar} username={"i.mr.robot"} />
				</ScrollView>
			</View>
			<View style={styles.posts_container}>
				<FlatList
					contentContainerStyle={
						{
							// height: "100%",
							// width: "100%",
							// display: "flex",
							// justifyContent: "flex-start",
							// alignItems: "center",
							// flex: 1,
							// flexDirection: "column",
						}
					}
					data={data}
					keyExtractor={item => item.id.toString()}
					renderItem={({ item }) => renderPostItem(item)}
				/>
			</View>
		</View>
	);
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
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
	container: {
		height: "100%",
		width,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	stories_container: {
		height: "18%",
		width: "100%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		borderBottomWidth: 0.25,
	},
	stories_scrollview: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		paddingHorizontal: 5,
	},
	posts_container: {
		height: "83%",
		width: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
});

export default HomeScreen;
