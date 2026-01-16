import { useState } from 'react';
import { Button, Text, View } from 'react-native';

export default function Index() {
  const [message, setMessage] = useState('HELLO BOBI');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>{message}</Text>
      <Button
        title="Click me!"
        onPress={() => setMessage('YOU DID IT 🎉')}
      />
    </View>
  );
}
