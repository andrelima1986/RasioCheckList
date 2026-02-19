import { Image, View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { rasioColors, rasioTipografiasThemes } from "../themes";

const Login = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: rasioColors.branco,
      }}
    >
      <View>
        <Image
          source={require("../img/rasio_logo_preto.png")}
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 200,
            width: 250,
            height: 150,
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 350,
          padding: 40,
        }}
      >
        <Text
          style={{
            fontFamily: rasioTipografiasThemes.fontFamily,
            color: rasioColors.preto,
            fontSize: rasioTipografiasThemes.h4.fontSize,
            fontWeight: rasioTipografiasThemes.fontWeight.medium,
            marginBottom: 20,
          }}
        >
          Login
        </Text>
        <TextInput
          style={{
            width: "100%",
            marginBottom: 20,
            color: rasioColors.preto,
          }}
          underlineColor={rasioColors.preto}
          activeUnderlineColor={rasioColors.preto}
          outlineColor={rasioColors.branco}
          activeOutlineColor={rasioColors.preto}
        />
      </View>
    </View>
  );
};

export default Login;
