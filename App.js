import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  const [randomImage, setRandomImage] = useState('https://random-d.uk/api/108.jpg');

  const getRandomImage = async () => {
    const res = await fetch('https://random-d.uk/api/v2/random');
    const data = await res.json();
    setRandomImage(data.url);
  };



  return (
    <View style={styles.container}>
      <Text style={{paddingBottom: 20}}>Cliquez sur le bouton pour faire apparaître l'image...</Text>
      
        <Image
          source={{uri: randomImage}}
          style={{width: 200, height: 200, marginBottom: 20}}
        />
      
      <Button onPress={getRandomImage} title="Click me"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
