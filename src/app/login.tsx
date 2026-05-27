import { View } from "react-native";
import { rasioColors, rasioTipografiasThemesParagraphs, rasioTipografiasThemesTitle } from "../themes";
import RasioMobileInput from "../components/RasioMobileInput";

import RasioMobileTitle from "../components/RasioMobileTitle";
import RasioMobileButton from "../components/RasioMobileButton";
import RasioLogoBlack from "../components/RasioLogoBlack";
import { Link, useRouter } from "expo-router";
import RasioMobilePasswordInput from "../components/RasioMobilePasswordInput";
import React, { useEffect, useState } from "react";
import { LoginModel } from "../models/loginModel";
import { fazerLogin } from "../api/loginApi";

const Login = () => {
  const router = useRouter();

  const [cpf, setCpf] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [erro, setErro] = useState<string | null>("");
  const [message, setMessage] = useState<string | null>(null);


  

  useEffect(() => {
    // Se houver erro ou mensagem
    if (erro || message) {
      const timer = setTimeout(() => {
        setErro(null);
        setMessage(null);
      }, 5000); // 5 segundos

      // Limpa o timer caso o estado mude antes de 5s ou o componente desmonte
      return () => clearTimeout(timer);
    }
  }, [erro, message]);

 const handleLogin = async () => {
  try {

    setErro(null);
    setMessage(null);

    const loginData: LoginModel = {
      usuarioCpf: cpf,
      senha,
    };

    const response = await fazerLogin(loginData);

    if (response?.dados) {

      setMessage(message);

      router.replace("protected/checklist");
      

    } else {

      setErro("Erro no login");

    }

  } catch (error: any) {

    setErro(
      error.message || "Ocorreu um erro inesperado"
    );
  }
};

const handleLimparCampos = () => {
  setCpf("");
  setSenha("");
}

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: rasioColors.branco,
      }}
    >
      <RasioLogoBlack />

      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 200,
          paddingHorizontal: 50,
        }}
      >
        <RasioMobileTitle
          title="Login"
          size={rasioTipografiasThemesTitle.h4.fontSize}
          weight={"medium"}
          color={rasioColors.preto}
        />
        <RasioMobileInput
          maxLength={11}
          value={cpf}
          onChangeText={(e: string) => setCpf(e)}
          onKeyPress={(e) => {
            if (e.nativeEvent.key === "Enter") {
              handleLogin();
            }
          }}
          keyboardType="numeric"
        />

        <RasioMobileTitle
          title="Senha"
          size={rasioTipografiasThemesTitle.h4.fontSize}
          weight={"medium"}
          color={rasioColors.preto}
        />
        <RasioMobilePasswordInput
          value={senha}
          onChangeText={(s: string) => setSenha(s)}
        />
        
        <Link href={"/alterarSenha"}>
          <RasioMobileTitle 
          color={rasioColors.preto}
          title="Quero alterar a minha senha"
          size={rasioTipografiasThemesParagraphs.p12.fontSize}
          weight={"regular"}
          />
        </Link> 
        <View
          style={{
            width: "100%",
            marginTop: 40,
          }}
        >
          {erro ? (
            <RasioMobileTitle
              size={rasioTipografiasThemesParagraphs.p12.fontSize}
              weight="regular"
              textAlign="center"
              color={rasioColors.vermelho}
              title={erro}
            />
          ) : message ? (
            <RasioMobileTitle
              size={rasioTipografiasThemesParagraphs.p12.fontSize}
              weight="regular"
              textAlign="center"
              color={rasioColors.verde}
              title={message}
            />
          ) : null}
        </View>
        
        <View
        style={{
              width: "100%",
              gap: 20,
            }}
        >
          <RasioMobileButton 
          onPress={handleLogin}
          >
            Logar
            </RasioMobileButton>

        <RasioMobileButton 
        onPress={handleLimparCampos}
        >
          Limpar
          </RasioMobileButton>
          
        </View>
        
      </View>
    </View>
  );
};

export default Login;
