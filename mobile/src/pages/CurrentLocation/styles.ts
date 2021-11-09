import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7ED957',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },

  boxContainer: {
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#009966',
    borderRadius: 10,
  },

  textAQI: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textLevel: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 20,
  },

  textStatement: {
    fontFamily: 'Archivo_400Regular',
    fontSize: 15,
    margin: 20,
    lineHeight: 24,
    color: '#FFF',
    textAlign: 'justify',
  },
});

export default styles;
