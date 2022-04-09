import React, { useState, useEffect } from 'react';
import { View,Text } from 'react-native';
import * as Location from 'expo-location';

export default function App() {

  const [localizacao, setLocalizacao] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permissão de acesso a localizacao foi negada!');
        return;
      }
      let localizacao = await Location.getCurrentPositionAsync({});
      setLocalizacao(localizacao);
    })();
  }, []);

  if (errorMsg) {
  } else if (localizacao) {
   
    var lat = localizacao.coords.latitude;
    var long = localizacao.coords.longitude;

    console.log("Latituide: ", lat)
    console.log("Longitude: ", long)

  }
  return (
    <View>
      <Text>teste</Text>
    </View>
  );
}