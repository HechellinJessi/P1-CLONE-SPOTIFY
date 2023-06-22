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
        paddingTop: 90,
        paddingHorizontal: 130,
        marginBottom:130

      },
      contentHeader: {

        width: "100%",
        paddingHorizontal: 30,
        alignItems: "center",
        justifyContent: "center",
 

      },
      Titulo: {

        color: "#F2F2F2",
        fontSize: 15,
        lineHeight: 40,
        fontWeight: "700",
        marginBottom:-20

      },
      SubTitulo: {

        color: "#F2F2F2",
        fontSize: 15,
        lineHeight: 40,
        fontWeight: "700",
        marginBottom:20,

      },
      contentInput: {

        paddingHorizontal: 30,
        width: "100%",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: 16,

      },
      Input: {

        height: "100%",
        color: "#F2F2F2",

      },
      BotaoEntrar: {

        backgroundColor: "#42C83C",
        height: 50,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",

      },
      BotaoRedes:{
        backgroundColor: "#1C1B1B",
        height: 50,
        borderWidth:2,
        borderRadius:30,
        borderColor:'#dddddd5d',
        alignItems: "center",
        justifyContent: "center",
        marginTop:15
      },
      containerButton: {

        paddingTop: 22,
        paddingHorizontal: 30,

      },
      BotaoEntrarTexto: {

        color: "#000000",
        fontSize: 14,
        fontWeight: "700",

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