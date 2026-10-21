
import React from "react";
import { View, Text, Pressable } from "react-native";
import { estilos } from "../styles";

export default function CartaoNavegacao({
  icone,
  titulo,
  descricao,
  acao,
  onPress,
}) {
  return (
    <Pressable
      style={({ pressed }) => [
        estilos.navigationCard,
        pressed ? estilos.navigationCardPressed : null,
      ]}
      onPress={onPress}
      accessibilityRole="button"
    >
      <View style={estilos.navigationIcon}>
        <Text style={estilos.navigationIconText}>{icone}</Text>
      </View>

      <View style={estilos.navigationTextArea}>
        <Text style={estilos.navigationCardTitle}>
          {titulo}
        </Text>

        <Text style={estilos.navigationCardDescription}>
          {descricao}
        </Text>

        <Text style={estilos.navigationLink}>
          {acao} →
        </Text>
      </View>
    </Pressable>
  );
}
