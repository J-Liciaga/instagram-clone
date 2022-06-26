import * as React from "react";
import {
	View,
	ScrollView,
	Dimensions,
	StyleSheet,
	FlatList,
} from "react-native";
import { CreateStory, Story, Post } from "./lib/components";

interface HomeScreenProps {
	navigation: any;
}

const temp_avatar =
	"https://images.pexels.com/photos/5952647/pexels-photo-5952647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

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
