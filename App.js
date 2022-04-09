import React, { useState, useEffect } from 'react';
import { View,Text } from 'react-native';
import * as Location from 'expo-location';

export default function App() {

  const [localizacao, setLocalizacao] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [dados, setDados] = useState(Object)

  /** Obtendo Geolocalizacao com Location */ 
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

  /**Fetch API */
  let count = 1;
  useEffect(() => {
    obtemClima(lat, long)
  }, [count]); // Good!


  async function obtemClima(lat, long) {
    const url = `https://api.hgbrasil.com/weather?format=json-cors&key=process.env.KEY&lat=-${lat}&lon=${long}&user_ip=remote`
    await fetch(url)
      .then(response => response.json())
      .then(data => {
        const dados = {
          temperatura: data.results.temp,
        }
        setDados(dados);
      })
      .catch(function (error) {
        console.error('Houve um problema ao efetuar a requisição: ' + error.message);
      });
  }

  return (
    <View>
      <Text>Temperatura: {dados.temperatura}</Text>
    </View>
  );
}