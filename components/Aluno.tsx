import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function Aluno() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [turma, setTurma] = useState("");
  const [nota1, setNota1] = useState("");
  const [nota2, setNota2] = useState("");
  const [media, setMedia] = useState<number | null>(null);
  const [erro, setErro] = useState("");

  function calcularMedia() {
    const n1 = Number(nota1.replace(",", "."));
    const n2 = Number(nota2.replace(",", "."));

    if (
      nota1.trim() === "" ||
      nota2.trim() === "" ||
      !Number.isFinite(n1) ||
      !Number.isFinite(n2) ||
      n1 < 0 || n1 > 10 ||
      n2 < 0 || n2 > 10
    ) {
      setMedia(null);
      setErro("Informe duas notas válidas de 0 a 10.");
      return;
    }

    setErro("");
    setMedia((n1 + n2) / 2);
  }

  return (
    <ScrollView
      style={styles.pagina}
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.titulo}>Dados do Aluno</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Idade"
        keyboardType="numeric"
        value={idade}
        onChangeText={setIdade}
      />

      <TextInput
        style={styles.input}
        placeholder="Turma"
        value={turma}
        onChangeText={setTurma}
      />

      <TextInput
        style={styles.input}
        placeholder="Nota 1"
        keyboardType="decimal-pad"
        value={nota1}
        onChangeText={(valor) => {
          setNota1(valor);
          setMedia(null);
        }}
      />

      <TextInput
        style={styles.input}
        placeholder="Nota 2"
        keyboardType="decimal-pad"
        value={nota2}
        onChangeText={(valor) => {
          setNota2(valor);
          setMedia(null);
        }}
      />

      <TouchableOpacity style={styles.botao} onPress={calcularMedia}>
        <Text style={styles.textoBotao}>CALCULAR MÉDIA</Text>
      </TouchableOpacity>

      {erro !== "" && <Text style={styles.erro}>{erro}</Text>}

      {media !== null && (
        media >= 7 ? (
          <View style={styles.resultado}>
            <Text style={styles.textoResultado}>
              Média: {media.toFixed(1).replace(".", ",")}
            </Text>
            <View style={styles.linhaSituacao}>
              <Text style={styles.textoResultado}>Situação: </Text>
              <Text style={[styles.textoResultado, styles.aprovado]}>
                Aprovado
              </Text>
            </View>
          </View>
        ) : (
          <View style={styles.resultado}>
            <Text style={styles.textoResultado}>
              Média: {media.toFixed(1).replace(".", ",")}
            </Text>
            <View style={styles.linhaSituacao}>
              <Text style={styles.textoResultado}>Situação: </Text>
              <Text style={[styles.textoResultado, styles.reprovado]}>
                Reprovado
              </Text>
            </View>
          </View>
        )
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pagina: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  container: {
    flexGrow: 1,
    padding: 25,
    paddingTop: 36,
  },
  titulo: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
    color: "#1E293B",
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#CBD5E1",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
    color: "#000000",
  },
  botao: {
    backgroundColor: "#2563EB",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  textoBotao: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  resultado: {
    marginTop: 25,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#F1F1F1",
  },
  linhaSituacao: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 8,
  },
  textoResultado: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
  },
  aprovado: { color: "#008000" },
  reprovado: { color: "#FF0000" },
  erro: { color: "#B91C1C", marginTop: 12 },
});
