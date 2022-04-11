import React, { useState } from 'react';
import { Modal, Text, Pressable, View } from 'react-native';

import { styles } from './style';

export default function Footer(data) {

  const dados = data.data.previsoes;

  const [modalVisivel, setModalVisivel] = useState(false);

  return (
    <View style={styles.centralView}>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisivel}
        onRequestClose={() => {
          setModalVisivel(!modalVisivel);
        }}>
        <View style={styles.centralView}>
          <View style={styles.modalView}>

            <View style={styles.linha} />
            <Text style={styles.modalText}>📌 {dados[0].weekday}, {dados[0].description}, Min: {dados[0].min}°, Max: {dados[0].max}°</Text>
            <View style={styles.linha} />
            <Text style={styles.modalText}>📌 {dados[1].weekday}, {dados[1].description}, Min: {dados[1].min}°, Max: {dados[1].max}°</Text>
            <View style={styles.linha} />
            <Text style={styles.modalText}>📌 {dados[2].weekday}, {dados[2].description}, Min: {dados[2].min}°, Max: {dados[2].max}°</Text>
            <View style={styles.linha} />
            <Text style={styles.modalText}>📌 {dados[3].weekday}, {dados[3].description}, Min: {dados[3].min}°, Max: {dados[3].max}°</Text>
            <View style={styles.linha} />
            <Text style={styles.modalText}>📌 {dados[4].weekday}, {dados[4].description}, Min: {dados[4].min}°, Max: {dados[4].max}°</Text>
            <View style={styles.linha} />
            <Text style={styles.modalText}>📌 {dados[5].weekday}, {dados[5].description}, Min: {dados[5].min}°, Max: {dados[5].max}°</Text>
            <View style={styles.linha} />
            <Text style={styles.modalText}>📌 {dados[6].weekday}, {dados[6].description}, Min: {dados[6].min}°, Max: {dados[6].max}°</Text>
            <View style={styles.linha} />

            <View style={styles.textFechar}>
              <Pressable
                style={[styles.button, styles.buttonFechar]}
                onPress={() => setModalVisivel(!modalVisivel)}>
                <Text style={styles.textStyle}>Fechar</Text>
              </Pressable>
            </View>

          </View>
        </View>
      </Modal>
      <Pressable style={[styles.button, styles.buttonAbrir]} onPress={() => setModalVisivel(true)}>
        <Text style={styles.textStyle}>📅 Previsões</Text>
      </Pressable>
    </View>
  );
};

