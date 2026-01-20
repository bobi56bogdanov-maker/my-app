import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Horror Movies</Text>

      <View style={styles.movieItem}>
        <Text style={styles.movieText}>The Conjuring (2013) - James Wan</Text>
        <Text style={styles.movieInfo}>Duration: 112 min | Country: USA | Main Characters: Ed & Lorraine Warren</Text>
      </View>

      <View style={styles.movieItem}>
        <Text style={styles.movieText}>Hereditary (2018) - Ari Aster</Text>
        <Text style={styles.movieInfo}>Duration: 127 min | Country: USA | Main Characters: Annie Graham</Text>
      </View>

      <View style={styles.movieItem}>
        <Text style={styles.movieText}>It (2017) - Andy Muschietti</Text>
        <Text style={styles.movieInfo}>Duration: 135 min | Country: USA | Main Characters: Bill, Pennywise</Text>
      </View>

      <View style={styles.movieItem}>
        <Text style={styles.movieText}>Insidious (2010) - James Wan</Text>
        <Text style={styles.movieInfo}>Duration: 103 min | Country: USA | Main Characters: Josh Lambert</Text>
      </View>

      <View style={styles.movieItem}>
        <Text style={styles.movieText}>The Ring (2002) - Gore Verbinski</Text>
        <Text style={styles.movieInfo}>Duration: 115 min | Country: USA | Main Characters: Rachel Keller</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Черен фон
    padding: 20,
  },
  title: {
    color: 'orange',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  movieItem: {
    marginBottom: 20,
  },
  movieText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  movieInfo: {
    color: 'lightgray',
    fontSize: 16,
    marginTop: 5,
  },
});
