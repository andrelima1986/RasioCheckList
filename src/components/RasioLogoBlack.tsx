import { Image } from "react-native";

const RasioLogoBlack = () => {
  return (
    <>
    <Image
              source={require("../img/rasio_logo_preto.png")}
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: 100,
                width: 350,
                height: 150,
              }}
            />
    </>
  );
};

export default RasioLogoBlack;