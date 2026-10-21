
import React, { useState } from "react";
import { SafeAreaView, StatusBar } from "react-native";

import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
import Sobre from "./src/screens/Sobre";
import Contato from "./src/screens/Contato";
import { cores, estilos } from "./src/styles";

const CREDENCIAIS_TESTE = {
  usuario: "aluno",
  senha: "123456",
};

export default function App() {
  const [telaAtual, setTelaAtual] = useState("Login");
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagemErro, setMensagemErro] = useState("");

  function atualizarUsuario(texto) {
    setUsuario(texto);
    setMensagemErro("");
  }

  function atualizarSenha(texto) {
    setSenha(texto);
    setMensagemErro("");
  }

  function limparCampos() {
    setUsuario("");
    setSenha("");
    setMensagemErro("");
  }

  function entrar() {
    const usuarioInformado = usuario.trim().toLowerCase();

    if (!usuarioInformado) {
      setMensagemErro("Informe seu usuário.");
      return;
    }

    if (!senha.trim()) {
      setMensagemErro("Informe sua senha.");
      return;
    }

    if (
      usuarioInformado !== CREDENCIAIS_TESTE.usuario ||
      senha !== CREDENCIAIS_TESTE.senha
    ) {
      setMensagemErro("Usuário ou senha inválidos.");
      return;
    }

    limparCampos();
    setTelaAtual("Home");
  }

  function sair() {
    limparCampos();
    setTelaAtual("Login");
  }

  return (
    <SafeAreaView style={estilos.app}>
      <StatusBar
        barStyle={
          telaAtual === "Login" ? "light-content" : "dark-content"
        }
        backgroundColor={
          telaAtual === "Login" ? cores.roxoEscuro : cores.fundo
        }
      />

      {telaAtual === "Login" && (
        <Login
          usuario={usuario}
          senha={senha}
          mensagemErro={mensagemErro}
          onChangeUsuario={atualizarUsuario}
          onChangeSenha={atualizarSenha}
          onEntrar={entrar}
          onLimpar={limparCampos}
        />
      )}

      {telaAtual === "Home" && (
        <Home
          onAbrirSobre={() => setTelaAtual("Sobre")}
          onAbrirContato={() => setTelaAtual("Contato")}
          onSair={sair}
        />
      )}

      {telaAtual === "Sobre" && (
        <Sobre onVoltar={() => setTelaAtual("Home")} />
      )}

      {telaAtual === "Contato" && (
        <Contato onVoltar={() => setTelaAtual("Home")} />
      )}
    </SafeAreaView>
  );
}
