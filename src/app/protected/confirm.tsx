import { ScrollView, Text, View } from "react-native";
import { rasioColors } from "../../themes";
import RasioLogoBlack from "../../components/RasioLogoBlack";
import RasioMobileButton from "../../components/RasioMobileButton";
import { useRouter } from "expo-router";
import RasioMobileTitle from "../../components/RasioMobileTitle";
import { SafeAreaView } from "react-native-safe-area-context";




const Confirm = () => {
  const router = useRouter();

 
  const handleFinallyConfirm = () => {
    router.replace("protected/success");
  };

  const handleGoBack = () => {
    router.replace("protected/checklist");
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
          color={rasioColors.preto}
          weight={"medium"}
          textAlign="center"
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
         <View style={{ marginBottom: 20 }}>
          <Text>Item 1</Text>
         </View>
         <View style={{ marginBottom: 20 }}>
          <Text>Item 1</Text>
         </View>
         <View style={{ marginBottom: 20 }}>
          <Text>Item 1</Text>
         </View>
         <View style={{ marginBottom: 20 }}>
          <Text>Item 1</Text>
         </View>
         <View style={{ marginBottom: 20 }}>
          <Text>Item 1</Text>
         </View>
         <View style={{ marginBottom: 20 }}>
          <Text>Item 1</Text>
         </View>
         <View style={{ marginBottom: 20 }}>
          <Text>Item 1</Text>
         </View>
         
          <View
          style={{
              width: "100%",
              marginTop: 60,
              gap: 20,
              padding: 20,
            }}
          >
          <RasioMobileButton onPress={handleFinallyConfirm}>
            Finalizar
          </RasioMobileButton>
          <RasioMobileButton onPress={handleGoBack}>Voltar</RasioMobileButton>

          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Confirm;
