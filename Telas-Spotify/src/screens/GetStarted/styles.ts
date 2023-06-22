import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingHorizontal: 53
    },
    title: {

        color: "#DADADA",
        fontSize: 23,
        lineHeight: 33,
        fontWeight: "700",
        marginTop: 220,
        left: 20,
        marginBottom: -22

    },
    texto: {
        color: "#DADADA",
        fontSize: 15,
        lineHeight: 22,
        fontWeight: "400",
        textAlign: "center",

    },
    botao: {
        width: 329,
        height: 92,
        backgroundColor: "#42C83C",
        borderRadius: 30,
        marginTop: -40,
        alignItems: "center",
        justifyContent: "center",
    },
    textBotao: {
        color: "#f6f6f6",
        fontSize: 22,
        lineHeight: 29,
        fontWeight: "700",
        textAlign: "center",
        textTransform: "capitalize",
    }
});

