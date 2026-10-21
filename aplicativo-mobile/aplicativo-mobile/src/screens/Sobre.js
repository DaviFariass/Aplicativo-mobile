
import React from "react";
import { ScrollView, Text, View } from "react-native";

import Toolbar from "../components/Toolbar";
import { estilos } from "../styles";

export default function Sobre({ onVoltar }) {
  return (
    <ScrollView contentContainerStyle={estilos.screenContent}>
      <Toolbar titulo="Sobre" onVoltar={onVoltar} />

      <Text style={estilos.sectionLabel}>NOSSO PROPOSITO</Text>

      <Text style={estilos.contentTitle}>
        Conectando você a melhor informação
      </Text>

      <Text style={estilos.contentDescription}>
        Fomos criados para reunir informações úteis e facilitar a comunicação
        entre todos.
      </Text>

      <View style={estilos.contentCard}>
        <Text style={estilos.contentCardTitle}>
          Instituição responsável
        </Text>
        <Text style={estilos.contentCardText}>
          Instituto Davi — instituição fictícia utilizada
          para fins de demonstrativo.
        </Text>
      </View>

      <View style={estilos.contentCard}>
        <Text style={estilos.contentCardTitle}>
          Nossa missão
        </Text>
        <Text style={estilos.contentCardText}>
          Facilitar o acesso a melhor informação de
          forma simples, clara e organizada.
        </Text>
      </View>

      <View style={estilos.contentCard}>
        <Text style={estilos.contentCardTitle}>
          Nossa visão
        </Text>
        <Text style={estilos.contentCardText}>
          Tornar a experiência de todos mais conectada
          e aproximar as pessoas da vida acadêmica.
        </Text>
      </View>

      <View style={estilos.contentCard}>
        <Text style={estilos.contentCardTitle}>
          Nossos valores
        </Text>
        <Text style={estilos.contentCardText}>
          Acessibilidade, colaboração, respeito e organização.
        </Text>
      </View>

      <Text style={estilos.versionText}>
        Versão 1.0 · Projeto acadêmico
      </Text>
    </ScrollView>
  );
}
