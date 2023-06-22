import { TouchableOpacity, View, Text, TextInput } from 'react-native'
import { styles } from './styles'
import { CaretLeft, EyeSlash } from 'phosphor-react-native'

import Spotify from '../../assets/Spotify (1).svg'
import Google from '../../assets/GoogleLogo.svg'
import Apple from '../../assets/AppleLogo.svg'

export function Login() {

    return <View style={styles.container}>

        <View style={styles.header}>
            <TouchableOpacity style={styles.BotaoVoltar}>
                <CaretLeft size={24} color='#DDDDDD'></CaretLeft>
            </TouchableOpacity>
            <Spotify width={100} height={33} />
            <View style={{ width: 32, height: 32 }} />
        </View>

        <View style={styles.contentHeader}>
            <Text style={styles.Titulo}>Login</Text>
            <Text style={styles.SubTitulo}>Precisa de ajuda  Clica aqui</Text>
        </View>

        <View style={styles.contentInput}>
            <View style={styles.InputGroup}>
                <TextInput style={styles.Input} placeholderTextColor={"#ffffffc0"} placeholder='Entrar com Usuário ou E-mail' />
            </View>
            <View style={styles.InputGroup}>
                <TextInput style={styles.Input} placeholderTextColor={"#ffffffc0"} placeholder='Senha' secureTextEntry={true} />
                <EyeSlash size={16} color='#ffffffc0' weight='light' />
            </View>
            <Text style={styles.Recuperar}>Recuperar senha</Text>
        </View>

        <View style={styles.containerButton}>
            <TouchableOpacity style={styles.BotaoEntrar}>
                <Text style={styles.BotaoEntrarTexto}>Entrar</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.separador}>
            <View style={{ height: 2, backgroundColor: '#fff', flex: 1 }} />
            <Text style={styles.separadorTexto}>Ou</Text>
            <View style={{ height: 2, backgroundColor: '#fff', flex: 1 }} />
        </View>

        <View style={styles.socialContainerButtons}>
            <TouchableOpacity>
                <Google />
            </TouchableOpacity>
            <TouchableOpacity>
                <Apple />
            </TouchableOpacity>
        </View>
        
    </View>

}