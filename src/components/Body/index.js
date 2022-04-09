import React from 'react';
import {View, Text, Image} from 'react-native'

export default function Body(data){
    const dados = data
    console.log(dados.data.url)
    
    return(
        <View>
            <Image
             style={{width: '250px', height: '250px'}}
             source={{uri: dados.data.url}}></Image>
            <Text>Umidade: {dados.data.humidade}</Text>
            <Text>Velocidade do Vento: {dados.data.humidade}</Text>
            <Text>Nascer do Sol: {dados.data.nascer}</Text>
            <Text>Por do Sol: {dados.data.por}</Text>
            <Text>{dados.data.cidade},{dados.data.time}</Text>
        </View>
    )
}


