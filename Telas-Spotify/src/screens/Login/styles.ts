import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({

    container:{

        flex:1,
        backgroundColor: "#1C1B1B"
    },
    header: {

        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: 40,
        paddingHorizontal: 30,

      },
      BotaoVoltar: {

        width: 32,
        height: 32,
        backgroundColor: "rgba(255, 255, 255, 0.03)",
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",

      },
      contentHeader: {

        width: "100%",
        paddingHorizontal: 30,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 52,
        paddingBottom: 5,

      },
      Titulo: {

        color: "#F2F2F2",
        fontSize: 25,
        lineHeight: 40,
        fontWeight: "700",

      },
      SubTitulo: {

        fontSize: 12,
        fontWeight: "400",
        color: "#E1E1E1",
        marginBottom:20,

      },
      contentInput: {

        paddingHorizontal: 30,
        width: "100%",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: 16,

      },
      InputGroup: {

        flexDirection: "row",
        paddingHorizontal: 27,
        width: "100%",
        height: 80,
        borderWidth: 1,
        borderColor: "#757575",
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "space-between",

      },
      Input: {

        height: "100%",
        color: "#F2F2F2",

      },
      Recuperar: {

        color: "#AEAEAE",
        fontSize: 14,
        fontWeight: "700",
        paddingHorizontal: 25,

      },
      BotaoEntrar: {

        backgroundColor: "#42C83C",
        height: 80,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",

      },
      containerButton: {

        paddingTop: 22,
        paddingHorizontal: 30,

      },
      BotaoEntrarTexto: {

        color: "#FFF",
        fontSize: 20,
        fontWeight: "700",

      },
      separador: {

        paddingHorizontal: 30,
        paddingTop: 31,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        
      },
      separadorTexto: {

        color: "#DCDCDC",
        fontSize: 12,
        fontWeight: "400",

      },
      socialContainerButtons: {

        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        gap: 58,
        justifyContent: "center",
        paddingTop: 18,
      }
})