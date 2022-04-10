import React from 'react';
import { View, Text, Image } from 'react-native';
import { MotiImage } from 'moti';

import 'react-native-reanimated'

import { styles } from './style';

export default function Body(data) {
    const dados = data;
    return (
        <View>
            <MotiImage
                style={styles.imagem}
                source={{ uri: dados.data.url }}

                from={{
                    scale: 0,
                    translateX: -10,
                }}
                animate={{
                    scale: 1,
                    translateX: 0,
                }}
                transition={{ type: 'timing' }}
            ></MotiImage>
            <Text style={styles.texts}> 🌫 Umidade do Ar: {dados.data.humidade}%</Text>
            <Text style={styles.texts}> 💨 Velocidade do Vento: {dados.data.velocidadeVento}</Text>
            <Text style={styles.texts}> ☀️ Nascer do Sol: {dados.data.nascer}</Text>
            <Text style={styles.texts}> 🌙 Por do Sol: {dados.data.por}</Text>
            <Text style={styles.texts}> 📌 {dados.data.cidade}, {dados.data.time}</Text>
        </View>
    )
}


