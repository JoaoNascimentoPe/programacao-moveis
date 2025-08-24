import { Image, StyleSheet, Text, View } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Image 
  source={require('../../assets/images/minha-foto.png')} 
  style={styles.image} 
/>
      <Text style={styles.name}>João Nascimento</Text>
      <Text style={styles.bio}>
        Desenvolvedor em formação, apaixonado por tecnologia e criação de
        soluções digitais. Sempre buscando aprender e evoluir na área de
        programação.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginTop: 8,
  },
});
