import React from 'react';
import {View, Text, Image} from 'react-native';

import { styles } from './style';

export default function Body(data){
    const dados = data;
    return(
        <View>
             <Image
             style={styles.imagem}
             source={{uri: dados.data.url}}
             ></Image>
             <Text style={styles.texts}> 🌫 Umidade do Ar: {dados.data.humidade}%</Text>
             <Text style={styles.texts}> 💨 Velocidade do Vento: {dados.data.velocidadeVento}</Text>
             <Text style={styles.texts}> ☀️ Nascer do Sol: {dados.data.nascer}</Text>
             <Text style={styles.texts}> 🌙 Por do Sol: {dados.data.por}</Text>
             <Text style={styles.texts}> 📌{dados.data.cidade}, {dados.data.time}</Text>
        </View>
    )
}


