import React, { useState } from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import * as Location from 'expo-location';

import api from '../../services/api';

import styles from './styles';

import landingImg from '../../assets/images/landing.png';
import gpsImg from '../../assets/images/icons/gps.png';

function Landing() {
  const { navigate } = useNavigation<NativeStackNavigationProp<any, any>>();

  const [currentCity, setCurrentCity] = useState('');

  async function GetCurrentLocation() {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status === 'granted') {
      let currentPosition = await Location.getCurrentPositionAsync({});

      const { coords } = currentPosition;

      if (coords) {
        const { latitude, longitude } = coords;

        await api
          .get('/searchLocation', {
            headers: {
              token: 'AIzaSyCBA4Lm2POl7b0LEF1n2H9-wH4uFC8Xo2Y',
            },
            params: {
              latitude,
              longitude,
            },
          })
          .then(response => {
            console.log(response.data);
            setCurrentCity(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      }
    } else {
      throw new Error('Location permission not granted');
    }
  }

  function ToPollutionInfo() {
    navigate('PollutionInfo', {
      city: currentCity,
    });
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
          value={currentCity}
          onChangeText={text => setCurrentCity(text)}
          placeholder="Qual sua localização ?"
        />
        <BorderlessButton onPress={GetCurrentLocation} style={styles.buttonGps}>
          <Image source={gpsImg} />
        </BorderlessButton>
      </View>

      <View style={styles.buttonContainerSearch}>
        <RectButton onPress={ToPollutionInfo} style={styles.buttonSearch}>
          <Text style={styles.buttonText}>Buscar</Text>
        </RectButton>
      </View>
    </View>
  );
}

export default Landing;
