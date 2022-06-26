import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
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
        paddingHorizontal: 15,
    },
    stories_scrollview: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    posts_container: {
        height: "83%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
    },
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
        marginTop: 5
    },
    story_username_text: {
        fontSize: 12,
    },
});
