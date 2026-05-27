import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import RasioMobileButton from "../components/RasioMobileButton";
import { rasioColors, rasioTipografiasThemesTitle } from "../themes";
import RasioMobileTitle from "../components/RasioMobileTitle";
import RasioMobilePasswordInput from "../components/RasioMobilePasswordInput";
import RasioMobileInput from "../components/RasioMobileInput";
import RasioLogoBlack from "../components/RasioLogoBlack";
import { View } from "react-native";
import { AlterarSenhaUsuarioDTO } from "../models/dto";
import { alterarSenha, listarUsuarioPorCpf, listarUsuarioPorId } from "../api/usuarioApi";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";

const AlterarSenha = () => {

    const router = useRouter();
    
 
      const [cpf, setCpf] = useState<string>("");
      const [novaSenha, setNovaSenha] = useState<string>("");
      const [confirmarSenha, setConfirmarSenha] = useState<string>("");
      const [erro, setErro] = useState<string | null>("");
      const [message, setMessage] = useState<string | null>(null);

        

      const handleLimparCampos = () => {
        setCpf("");
        setNovaSenha("");
        setConfirmarSenha("");
      }

      const handleVoltarTelaLogin = () => {
        router.replace("/login");
        handleLimparCampos();
      }

      useEffect(() => {
          // Se houver erro ou mensagem
          if (erro || message) {
            const timer = setTimeout(() => {
              //setErro(null);
              setMessage(null);
            }, 5000); // 5 segundos
      
            // Limpa o timer caso o estado mude antes de 5s ou o componente desmonte
            return () => clearTimeout(timer);
          }
        }, [erro, message]);

    const handleAlterarSenha = async() => {
        try {
          setErro(null);
          setMessage(null);

          

          const usuario : AlterarSenhaUsuarioDTO = {
            usuarioCPF: cpf,
            senha: novaSenha
          }
        
         
          const cpfExistente = await listarUsuarioPorCpf(usuario.usuarioCPF);

          if (!cpfExistente){
            setErro(erro)
            return;
          }

        if (novaSenha != confirmarSenha) {
            setErro("As senhas não conferem");
            return;
          } else {
            const response = await alterarSenha(usuario);  
            if (response.dados){
          setMessage(message);
          router.replace("/login");
        } else {
          setErro(erro);
        }
          } 
        } catch (error: any) {
           console.log("Erro no login:", error);

    throw new Error(
      error.message || "Erro inesperado"
    );
        }
    }
    return (
    <View
      style={{
        flex: 1,
        backgroundColor: rasioColors.branco,
      }}
    >
      <RasioLogoBlack />

     <SafeAreaView
             style={{
               width: "100%",
               flex: 1,
               padding: 20,
             }}
           >
             <ScrollView
               contentContainerStyle={{
                 flexGrow: 1,
                 alignItems: "center",
                 justifyContent: "center",
                 top: 0,
                 padding: 40
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
          value={novaSenha}
          onChangeText={(ns: string) => setNovaSenha(ns)}
        />

         <RasioMobileTitle
          title="Confirmar Senha"
          size={rasioTipografiasThemesTitle.h4.fontSize}
          weight={"medium"}
          color={rasioColors.preto}
        />
        <RasioMobilePasswordInput
          value={confirmarSenha}
          onChangeText={(cs: string) => setConfirmarSenha(cs)}
        />

        <View
          style={{
            width: "100%",
            marginTop: 40,
          }}
        >
          {erro ? (
            <RasioMobileTitle
              size={18}
              weight="regular"
              textAlign="center"
              color={rasioColors.vermelho}
              title={erro}
            />
          ) : message ? (
            <RasioMobileTitle
              size={18}
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
                onPress={handleAlterarSenha}
                >
                  Alterar Senha
                </RasioMobileButton>

                <RasioMobileButton 
                onPress={handleLimparCampos}
                >
                  Limpar
                  </RasioMobileButton>

                  <RasioMobileButton 
                  onPress={handleVoltarTelaLogin}
                  >
                    Voltar para a tela de login
                    </RasioMobileButton>
                </View>
        
      </ScrollView>
      </SafeAreaView>
    </View>
    );
}

export default AlterarSenha;