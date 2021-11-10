import React from 'react';
import { Text, View } from 'react-native';

import PageHeader from '../../components/PageHeader';

import styles from './styles';

function CurrentLocation() {
  return (
    <View style={styles.container}>
      <PageHeader />
      <View style={styles.boxContainer}>
        <View style={styles.info}>
          <Text style={styles.textAQI}>47</Text>
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

export default CurrentLocation;
