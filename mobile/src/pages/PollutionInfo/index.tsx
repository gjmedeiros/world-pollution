import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/AppStack';
import { NavigatorScreenParams } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';
import api from '../../services/api';

import styles from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'PollutionInfo'>;

function PollutionInfo({ navigation, route }: Props) {
  const [infoAqi, setInfoAqi] = useState(0);

  const teste = route.params;
  console.log(teste);

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
