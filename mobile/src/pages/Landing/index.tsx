import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

import landingImg from '../../assets/images/landing.png';
import gpsImg from '../../assets/images/icons/gps.png';

function Landing() {
  const { navigate } = useNavigation<NativeStackNavigationProp<any, any>>();

  function ToCurrentLocation() {
    navigate('CurrentLocation');
  }

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
        <RectButton style={styles.buttonGps}>
          <Image source={gpsImg} />
        </RectButton>
      </View>

      <View style={styles.buttonContainerSearch}>
        <RectButton onPress={ToCurrentLocation} style={styles.buttonSearch}>
          <Text style={styles.buttonText}>Buscar</Text>
        </RectButton>
      </View>
    </View>
  );
}

export default Landing;
