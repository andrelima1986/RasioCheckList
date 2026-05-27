import { View } from "react-native";
import { rasioColors } from "../../themes";

import RasioLogoBlack from "../../components/RasioLogoBlack";
import RasioMobileTitle from "../../components/RasioMobileTitle";
import RasioMobileButton from "../../components/RasioMobileButton";


const Success = () => {

 
    return (
        <View
        style={{
            flex: 1,
            backgroundColor: rasioColors.branco,
        }}
        >
      <View style={{ marginBottom: 20 }}>
        <RasioLogoBlack />
        <RasioMobileTitle
          title="Check-list"
          size={22}
          weight={"medium"}
          textAlign="center"
          color={rasioColors.preto}
        />
          <View 
          style={{
            
            paddingVertical: 15,
            marginVertical: 10
          }}
          >
          <RasioMobileTitle 
          title="Check-list realizado com sucesso" 
          size={40} 
          textAlign="center" 
          weight="medium"
          color={rasioColors.preto}
          />
          </View>

         <View
            style={{
              width: "100%",
              marginTop: 100,
              gap: 20,
              padding: 20,
            }}
          >
            <RasioMobileButton onPress={() => {}}>
              Novo Check-list
            </RasioMobileButton>
            <RasioMobileButton>Fazer Logout</RasioMobileButton>
          </View>
      </View>
        </View>
    )
}

export default Success; 