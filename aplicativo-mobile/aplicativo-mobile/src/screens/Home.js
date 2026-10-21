
import React from "react";
import { ScrollView, Text, Pressable, View,} from "react-native";

import Toolbar from "../components/Toolbar";
import CartaoNavegacao from "../components/CartaoNavegacao";
import { estilos } from "../styles";

export default function Home({
  onAbrirSobre,
  onAbrirContato,
  onSair,
}) {
  return (
    <ScrollView contentContainerStyle={estilos.screenContent}>
      <Toolbar titulo="Home" />

      <Text style={estilos.sectionLabel}>
        Conectado as informações
      </Text>

      <ScrollView
        horizontal={false}
        contentContainerStyle={{ paddingBottom: 2 }}
      >
        <Text style={estilos.homeTitle}>
          Bem vindo ao Instituto Davi!
        </Text>
      </ScrollView>

    



      <Text style={estilos.homeDescription}>
        Reunindo informações para você conhecer 
        e encontrar os principais canais de contato.
      </Text>

      <Text style={estilos.sectionTitle}>
        Por onde começar?
      </Text>

      <CartaoNavegacao
        icone="🏫"
        titulo="Sobre o projeto"
        descricao="Conheça a proposta, a missão e os valores nosso."
        acao="Conhecer o projeto"
        onPress={onAbrirSobre}
      />

      <CartaoNavegacao
        icone="✉️"
        titulo="Fale com a equipe"
        descricao="Consulte os canais de contato e os horários que atendemos."
        acao="Ver contatos"
        onPress={onAbrirContato}
      />

      <Pressable
        style={estilos.logoutButton}
        onPress={onSair}
        accessibilityRole="button"
      >
        <Text style={estilos.logoutText}>
          Voltar para o login
        </Text>
      </Pressable>
    </ScrollView>
  );
}
