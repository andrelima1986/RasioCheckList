import { ScrollView, View } from "react-native";
import { rasioColors } from "../../themes";
import RasioLogoBlack from "../../components/RasioLogoBlack";
import RasioMobileButton from "../../components/RasioMobileButton";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import RasioMobileTitle from "../../components/RasioMobileTitle";



import itemCheckList from "../../mocks/item-check-list.json"
import { Text } from "react-native-paper";




const CheckList = () => {
  const route = useRouter();
  //const navigation = useNavigation<DrawerNavigationProp<any>>();
  

  const handleConfirm = () => {
    // Lógica de confirmação aqui (exemplo: salvar dados, enviar para servidor, etc.)
    // Se a confirmação for bem-sucedida, navegue para a tela de confirmação
    route.replace("protected/confirm");
  };

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
      </View>

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
          }}
        >
        <View>
          {itemCheckList.map((item: any, index: number) => (
            <View
              key={index}
              style={{
                marginBottom: 20,
              }}
            >
              <Text>{item.categoriaItemCheckList?.descricao}</Text>
            </View>
          ))}
        <View>
          {itemCheckList.map((item: any, index: number) => (
            <View
              key={index}
              style={{
                marginBottom: 20,
              }}
            >
              <Text>{item.dscItemCheckList}</Text>

            </View>
          ))}

        </View>

        </View>
          
          
          <View
            style={{
              width: "100%",
              marginTop: 60,
              gap: 20,
              padding: 20,
            }}
          >
            <RasioMobileButton onPress={handleConfirm}>
              Confirmar
            </RasioMobileButton>
            <RasioMobileButton>Limpar</RasioMobileButton>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default CheckList;
