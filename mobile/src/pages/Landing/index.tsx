import React from 'react';
import { Image, Text, TouchableHighlight, View } from 'react-native';

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
    </View>
  );
}

export default Landing;
