import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';
import api from '../../services/api';

import styles from './styles';

function PollutionInfo() {
  const [infoAqi, setInfoAqi] = useState(0);

  useEffect(() => {
    api
      .get('/searchCity', {
        params: {},
      })
      .then(response => {
        const aqi = response.data;

        setInfoAqi(aqi);
      });
  });

  return (
    <View style={styles.container}>
      <PageHeader />
      <View style={styles.boxContainer}>
        <View style={styles.info}>
          <Text style={styles.textAQI}>{infoAqi}</Text>
          <Text style={styles.textLevel}>Good</Text>
        </View>
      </View>

      <Text style={styles.textStatement}>
        Crianças e adultos ativos e pessoas com doenças respiratórias, como
        asma, devem limitar o esforço prolongado ao ar livre.
      </Text>
    </View>
  );
}

export default PollutionInfo;
