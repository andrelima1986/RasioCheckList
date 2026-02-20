import { Image, View } from "react-native";
import { rasioColors, rasioTipografiasThemesTitle } from "../themes";
import RasioMobileInput from "../components/RasioMobileInput";
import RasioMobileTitle from "../components/RasioMobileTitle";
import RasioMobileButton from "../components/RasioMobileButton";
import RasioLogoBlack from "../components/RasioLogoBlack";

const Login = () => {
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
        />
        <RasioMobileInput />

        <RasioMobileTitle
          title="Senha"
          size={rasioTipografiasThemesTitle.h4.fontSize}
          weight={"medium"}
        />
        <RasioMobileInput secureTextEntry />

        <View
          style={{
            width: "100%",
            marginTop: 60,
          }}
        >
          <RasioMobileButton onPress={() => console.log("Botão pressionado")}>
            Logar
          </RasioMobileButton>
        </View>
      </View>
    </View>
  );
};

export default Login;
