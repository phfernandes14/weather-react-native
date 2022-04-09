import React from 'react';
import {View, Text} from 'react-native'

export default function Header(data){
    const dados = data
    return(
        <View>
            <Text>{dados.data.temperatura}°</Text>
            <Text>{dados.data.descricao}</Text>
        </View>
    )
}
