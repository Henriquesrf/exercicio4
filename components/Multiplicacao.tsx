import { useState } from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native';

export default function Multiplicacao() {
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [valor3, setValor3] = useState('');

  function mostrarMultiplicacao() {
    const multiplicacao =
      Number(valor1) *
      Number(valor2) *
      Number(valor3);

    Alert.alert(
      'Multiplicação',
      `Valor 1: ${valor1}
Valor 2: ${valor2}
Valor 3: ${valor3}

Multiplicação: ${multiplicacao}`
    );
  }

  return (
    <View>
      <Text>Valor 1:</Text>

      <TextInput
        placeholder="Digite o valor 1"
        value={valor1}
        onChangeText={setValor1}
        keyboardType="numeric"
      />

      <Text>Valor 2:</Text>

      <TextInput
        placeholder="Digite o valor 2"
        value={valor2}
        onChangeText={setValor2}
        keyboardType="numeric"
      />

      <Text>Valor 3:</Text>

      <TextInput
        placeholder="Digite o valor 3"
        value={valor3}
        onChangeText={setValor3}
        keyboardType="numeric"
      />

      <Button
        title="Multiplicar"
        onPress={mostrarMultiplicacao}
      />
    </View>
  );
}