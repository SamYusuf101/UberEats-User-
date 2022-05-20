import { StyleSheet } from "react-native";

export default StyleSheet.create ({
    page: {
        flex: 1
    },
    imageicon: {

    },
    image: {
        width: "100%",
        aspectRatio : 4 / 3

    },
    menuTitle: {
        marginVertical:10,
        fontSize:18,
        letterSpacing:0.7,
        fontWeight:'bold',
        top:10

    },
    iconContainer: {
        position: 'absolute',
        top: 40,
        left: 10,
      },
    container: {
         margin: 10,
         paddingBottom:2,
         
    },
    title: {
        fontSize: 30,
        fontWeight: '600'

    },
    subtitle: {
        fontSize: 15,
        color: 'grey'
    }
})