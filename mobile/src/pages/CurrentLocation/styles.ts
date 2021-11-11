import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7ED957',
  },

  boxContainer: {
    backgroundColor: '#009966',
    borderWidth: 1,
    borderColor: '#009966',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
  },

  info: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  textAQI: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 90,
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
    color: '#000',
    textAlign: 'justify',
  },
});

export default styles;
