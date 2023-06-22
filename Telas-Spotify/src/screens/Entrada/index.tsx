import { TouchableOpacity, View, Text } from 'react-native'
import { styles } from './styles'

import Spotify2 from '../../assets/spotify-white.svg'
import Google from '../../assets/GoogleLogo.svg'
import Facebook from '../../assets/icons8-facebook-novo (2).svg'
import Smartfhone from '../../assets/icons8-contacts (3).svg'

export function Entrada() {

    return <View style={styles.container}>

        <View style={styles.header}>
            <Spotify2 width={100} height={45} />
            <View style={{ width: 32, height: 32 }} />
        </View>

        <View style={styles.contentHeader}>
            <Text style={styles.Titulo}>Milhões de músicas á sua escolha</Text>
            <Text style={styles.SubTitulo}>Grátis no Spotify</Text>
        </View>

        <View style={styles.containerButton}>
           
            <TouchableOpacity style={styles.BotaoEntrar}>
                <Text style={styles.BotaoEntrarTexto}>Inscreva-se grátis</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.BotaoRedes}>
                <View style={{ marginRight: 230 }}>
                    <Smartfhone />
                </View>
            </TouchableOpacity>

            <View style={{ marginLeft: 50, top: -35, left: 20, marginBottom: -20 }}>
                <Text style={{ color: '#fff' }}>Confirmar com numero de telefone</Text>
            </View>

            <TouchableOpacity style={styles.BotaoRedes}>
                <View style={{ marginRight: 230 }}>
                    <Google />
                </View>
                <View style={{ marginRight: 20, top: -25, left: 20, marginBottom: -20 }}>
                    <Text style={{ color: "#fff" }}>Continuar com o Google</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.BotaoRedes}>
                <View style={{ marginRight: 230 }}>
                    <Facebook />
                </View>
                <View style={{ marginRight: 20, top: -27, left: 20, marginBottom: -20 }}>
                    <Text style={{ color: "#fff" }}>Confirmar com Facebook</Text>
                </View>
            </TouchableOpacity>
            
        </View>

    </View>
}