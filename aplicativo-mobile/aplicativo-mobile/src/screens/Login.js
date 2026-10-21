import React from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

import { estilos } from "../styles";

export default function Login({
  usuario,
  senha,
  mensagemErro,
  onChangeUsuario,
  onChangeSenha,
  onEntrar,
  onLimpar,
}) {
  return (
    <ScrollView
      contentContainerStyle={estilos.loginContainer}
      keyboardShouldPersistTaps="handled"
    >
      <View style={estilos.loginHeader}>
        <View style={estilos.logo}>
          <Text style={estilos.logoText}>Davi</Text>
        </View>

        <Text style={estilos.brandTitle}>Sempre conectado a informações</Text>

        <Text style={estilos.brandSubtitle}>
          A melhor informação que existe.
        </Text>
      </View>

      <View style={estilos.formCard}>
        <Text style={estilos.formTitle}>
          Faça o login
        </Text>

        <Text style={estilos.formSubtitle}>
          Entre com os dados no rodapé para conhecer
          o aplicativo.
        </Text>

        <Text style={estilos.label}>Usuário</Text>

        <TextInput
          style={estilos.input}
          value={usuario}
          onChangeText={onChangeUsuario}
          placeholder="Digite seu usuário"
          placeholderTextColor="#92889C"
          autoCapitalize="none"
          autoCorrect={false}
          accessibilityLabel="Usuário ou e-mail"
          returnKeyType="next"
        />

        <Text style={estilos.label}>Senha</Text>

        <TextInput
          style={estilos.input}
          value={senha}
          onChangeText={onChangeSenha}
          placeholder="Digite sua senha"
          placeholderTextColor="#92889C"
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          accessibilityLabel="Senha"
          returnKeyType="done"
          onSubmitEditing={onEntrar}
        />

        {mensagemErro !== "" && (
          <Text
            style={estilos.errorMessage}
            accessibilityLiveRegion="polite"
          >
            {mensagemErro}
          </Text>
        )}

        <View style={estilos.buttonRow}>
          <Pressable
            style={estilos.primaryButton}
            onPress={onEntrar}
            accessibilityRole="button"
          >
            <Text style={estilos.primaryButtonText}>
              Entrar
            </Text>
          </Pressable>

          <Pressable
            style={estilos.secondaryButton}
            onPress={onLimpar}
            accessibilityRole="button"
          >
            <Text style={estilos.secondaryButtonText}>
              Limpar
            </Text>
          </Pressable>
        </View>
      </View>

      <Text style={estilos.loginHelper}>
        Usuário: aluno / senha: 123456
      </Text>

      <Text style={estilos.loginFooter}>
        Projeto acadêmico.
      </Text>
    </ScrollView>
  );
}
