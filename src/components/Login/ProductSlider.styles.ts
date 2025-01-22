import { Dimensions, ImageStyle, StyleSheet, ViewStyle } from "react-native"

interface Styles {
    container: ViewStyle,
    rowContainer: ViewStyle,
    itemContainer: ViewStyle,
    image: ImageStyle
}

export default () => {
    return StyleSheet.create<Styles>({
        container: {
            flex: 1,
            backgroundColor: "#fff",
        },
        rowContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 10,
        },
        itemContainer: {
            // flex: 1,
            alignItems: "center",
            justifyContent: 'center',
            margin: 10,
            width: Dimensions.get('screen').width * 0.29,
            height: Dimensions.get('screen').height * 0.085,
        },
        image: {
            height: '100%',
            width: '100%',
            resizeMode: "cover",
            borderRadius: 25,
        },
    })
}