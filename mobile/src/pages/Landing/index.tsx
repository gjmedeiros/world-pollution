import React from 'react';
import { Image, Text, TextInput, TouchableHighlight, View } from 'react-native';

import styles from './styles';

import landingImg from '../../assets/images/landing.png';
import gpsImg from '../../assets/images/icons/gps.png';

function Landing() {
  return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner} />

      <Text style={styles.title}>
        Seja Bem Vindo, {'\n'}
        <Text style={styles.titleBold}>Qual é a sua Cidade ?</Text>
      </Text>

      <View style={styles.buttonContainerGps}>
        <TextInput
          style={styles.textInput}
          placeholder="Qual sua localização ?"
        />
        <TouchableHighlight style={styles.buttonGps}>
          <Image source={gpsImg} />
        </TouchableHighlight>
      </View>

      <View style={styles.buttonContainerSearch}>
        <TouchableHighlight style={styles.buttonSearch}>
          <Text style={styles.buttonText}>Buscar</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

export default Landing;
