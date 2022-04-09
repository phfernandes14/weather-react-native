import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import * as Location from 'expo-location';
import Header from './src/components/Header'
import Body from './src/components/Body';

export default function App() {

  const [localizacao, setLocalizacao] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [dados, setDados] = useState(Object);
  const [render, setRender] = useState('false');



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
    // console.log("Latituide: ", lat)
    //console.log("Longitude: ", long)
  }

  /**Fetch API */
  let count = 0;
  useEffect(() => {
    obtemClima(lat, long);
  }, [count]);


  async function obtemClima(lat, long) {
    const url = `https://api.hgbrasil.com/weather?format=json-cors&key=8e446dda&lat=-${lat}&lon=${long}&user_ip=remote`
    await fetch(url)
      .then(response => response.json())
      .then(data => {
        //console.log(data)
        const dados = {
          temperatura: data.results.temp,
          descricao: data.results.description,
          humidade: data.results.humidity,
          idImg: data.results.img_id,
          url: `http://assets.api.hgbrasil.com/weather/images/${data.results.img_id}.png`,
          velocidadeVento: data.results.wind_speedy,
          nascer: data.results.sunrise,
          por: data.results.sunset,
          cidade: data.results.city,
          time: data.results.time


        }
        setDados(dados);
        setRender('true');
        console.log(data)
      })
      .catch(function (error) {
        console.error('Houve um problema ao efetuar a requisição: ' + error.message);
      });
  }

  return (
    <View>
      {
        (errorMsg)?<Text>{errorMsg}</Text>
        :<View>
          {
            (render == 'true')?
              <View>
                <Header
                data={dados}
                />
                <Body
                data={dados}
                />
              </View>
            :<Text>Ocorreu um erro ao conectar com a API HG Weather</Text>
            }
          </View>
      }
    </View>
  );
}