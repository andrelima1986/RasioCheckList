import { Image, View } from "react-native";
import { rasioColors } from "../themes";

const RasioLogoWhite = () => {
    return (
        <View style={{
              flex: 1,
              backgroundColor: rasioColors.preto,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
                 <Image  
                 source={require('../img/rasio_logo.png')}
                 />
            </View>
    );
}

export default RasioLogoWhite;