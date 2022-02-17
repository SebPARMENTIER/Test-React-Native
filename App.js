import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  const [duckRandomImage, setDuckRandomImage] = useState('https://random-d.uk/api/108.jpg');
  const [foxRandomImage, setFoxRandomImage] = useState('https://randomfox.ca/images/51.jpg');

  const getDuckRandomImage = async () => {
    const res = await fetch('https://random-d.uk/api/v2/random');
    const data = await res.json();
    setDuckRandomImage(data.url);
  };

  const getFoxRandomImage = async () => {
    const res = await fetch('https://randomfox.ca/floof/');
    const data = await res.json();
    setFoxRandomImage(data.image);
  };

  return (
    <View style={styles.container}>
      <View style={styles.duck}>
        <Text style={{margin: 30, color: 'white', textAlign: 'center'}}>Canard</Text>
        <Image
          source={{uri: duckRandomImage}}
          style={{width: 200, height: 200, marginBottom: 20}}
        />
        <Button onPress={getDuckRandomImage} title="Click me"/>
      </View>
      <View style={styles.fox}>
        <Text style={{margin: 30, color: 'white'}}>Renard</Text>
        <Image
          source={{uri: foxRandomImage}}
          style={{width: 200, height: 200, marginBottom: 20}}
        />
        <Button onPress={getFoxRandomImage} title="Click me"/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  duck: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingBottom: 20,
  },
  fox: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingBottom: 20,
  }
});
