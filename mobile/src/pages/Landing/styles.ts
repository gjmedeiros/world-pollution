import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7ED957',
    justifyContent: 'center',
    padding: 40,
  },

  banner: {
    width: '100%',
    resizeMode: 'contain',
  },

  title: {
    fontFamily: 'Poppins_400Regular',
    color: '#FFF',
    fontSize: 20,
    lineHeight: 30,
    marginTop: 80,
  },

  titleBold: {
    fontFamily: 'Poppins_600SemiBold',
  },

  buttonContainerGps: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-around',
  },

  textInput: {
    backgroundColor: '#FFF',
    height: 40,
    width: '100%',
    borderRadius: 8,
  },

  buttonGps: {
    backgroundColor: '#FFF',
    justifyContent: 'center',
    borderRadius: 8,
  },

  buttonContainerSearch: {
    alignItems: 'center',
    marginTop: 30,
    justifyContent: 'center',
  },

  buttonSearch: {
    backgroundColor: '#B2E6F2',
    height: 40,
    width: '50%',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontFamily: 'Archivo_700Bold',
    color: '#000',
    fontSize: 20,
  },
});

export default styles;
