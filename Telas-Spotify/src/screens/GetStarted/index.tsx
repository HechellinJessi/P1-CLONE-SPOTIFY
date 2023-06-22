import { Image, Text, TouchableOpacity, View } from "react-native";

import bille from "../../assets/bille.png"
import Spotify from "../../assets/Spotify (1).svg"
import { styles } from "./styles";


export default function GetStarted({navigation}) {
    
    return (
        <View style={styles.container}>
            <Image style={{ position: "absolute" }} source={bille} />
            <Spotify style={{ marginTop: 37 }} width={196} height={59} />

            <View>
                <Text style={styles.title}> Divirta-se ouvindo música </Text>
                <Text style={styles.texto}>
                    "A dor em si mesma, não tem um significado claro, mas frequentemente se relaciona com o
                    sentimento de tristeza e sofrimento. Em sua essência, é pura e genuína. O curso da vida
                    está cheio de experiências diversas, que podem variar entre momentos de paz e tempos difíceis."
                </Text>
                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.textBotao}>
                        Ouça agora!
                    </Text>
                </TouchableOpacity>
            </View>
            
        </View>
    );
}
