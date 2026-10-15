import { useState } from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native';

export default function Pessoa() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');

  function mostrarNome() {
    Alert.alert(
      'Nome completo',
      `Nome: ${nome}\nSobrenome: ${sobrenome}`
    );
  }

  return (
    <View>
      <Text>Nome:</Text>

      <TextInput
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      <Text>Sobrenome:</Text>

      <TextInput
        placeholder="Digite seu sobrenome"
        value={sobrenome}
        onChangeText={setSobrenome}
      />

      <Button
        title="Mostrar nome"
        onPress={mostrarNome}
      />
    </View>
  );
}