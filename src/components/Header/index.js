import React from 'react';
import {View, Text} from 'react-native';

import { styles } from './style';

export default function Header(data){
    const dados = data;
    return(
        <View>
            <Text style={styles.temperatura} >{dados.data.temperatura}°</Text>
            <Text style={styles.descricao}>{dados.data.descricao} ... </Text>
        </View>
    )
}
