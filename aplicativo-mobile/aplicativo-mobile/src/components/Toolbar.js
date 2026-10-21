
import React from "react";
import { View, Text, Pressable } from "react-native";
import { estilos } from "../styles";

export default function Toolbar({ titulo, onVoltar }) {
  return (
    <View style={estilos.toolbar}>
      <View style={estilos.toolbarSide}>
        {onVoltar && (
          <Pressable
            style={estilos.backButton}
            onPress={onVoltar}
            accessibilityRole="button"
            accessibilityLabel="Voltar para Home"
          >
            <Text style={estilos.backButtonText}>
              ‹ Voltar
            </Text>
          </Pressable>
        )}
      </View>

      <Text style={estilos.toolbarTitle}>{titulo}</Text>

      <View style={estilos.toolbarSide} />
    </View>
  );
}
