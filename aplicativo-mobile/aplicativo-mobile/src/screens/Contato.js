
import React from "react";
import { ScrollView, Text, View } from "react-native";

import Toolbar from "../components/Toolbar";
import { estilos } from "../styles";

export default function Contato({ onVoltar }) {
  return (
    <ScrollView contentContainerStyle={estilos.screenContent}>
      <Toolbar titulo="Contato" onVoltar={onVoltar} />

      <Text style={estilos.sectionLabel}>
        ESTAMOS POR AQUI
      </Text>

      <Text style={estilos.contentTitle}>
        Fale com a equipe
      </Text>

      <Text style={estilos.contentDescription}>
        Precisa de alguma informação? Confira os canais
        de contato.
      </Text>

      <View style={estilos.contentCard}>
        <Text style={estilos.infoLabel}>TELEFONE</Text>
        <Text style={estilos.infoValue}>
          +55 4002-8922
        </Text>

        <Text style={estilos.infoLabel}>E-MAIL</Text>
        <Text style={estilos.infoValue}>
          davi.farias01@aluno.cps.sp.gov.br
        </Text>

        <Text style={estilos.infoLabel}>ENDEREÇO</Text>
        <Text style={estilos.infoValue}>
          Avenida Miguel Inácio Curi, 360, São Paulo, São Paulo, 08295-005
        </Text>

        <Text style={estilos.infoLabel}>
          HORÁRIO DE ATENDIMENTO
        </Text>
        <Text style={estilos.infoValue}>
          Segunda a sexta, das 7h às 22h.
        </Text>
      </View>

      <Text style={estilos.versionText}>
        Informações fictícias.
      </Text>
    </ScrollView>
  );
}
