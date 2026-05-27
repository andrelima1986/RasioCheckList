import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { rasioColors } from "../themes";
import { useFonts } from "expo-font";
import { Lexend_400Regular, Lexend_700Bold } from "@expo-google-fonts/lexend";
import { View } from "react-native";



const Layout = () => {
  const [fontsLoaded] = useFonts({
    Lexend_400Regular,
    Lexend_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerShown: true,
          sceneStyle: {
            backgroundColor: rasioColors.branco,
            borderRadius: 0,
            borderBlockEndColor: rasioColors.cinzaQuaseBranco,
          },
          headerStyle: {
            backgroundColor: rasioColors.branco,
            borderBottomWidth: 1,
            borderBottomColor: rasioColors.cinzaQuaseBranco,
          },
          drawerStyle: {
            backgroundColor: rasioColors.branco,
            width: "75%",
          },
          headerBackground: () => (
            <View style={{ flex: 1, backgroundColor: rasioColors.branco }} />
          ),
          headerShadowVisible: false,
          drawerHideStatusBarOnOpen: false,
          drawerStatusBarAnimation: "slide",
        }}
        
        initialRouteName="home"
      >
        <Drawer.Screen
          name="home"
          options={{
            headerShown: false,
            drawerItemStyle: { display: "none" },
            drawerLabelStyle: {
              display: "none",
            },
          }}
        />
        <Drawer.Screen
          name="login"
          options={{
            headerShown: false,
            drawerIcon: () => null,
            title: "Logout",
            drawerLabel: "Logout",
            drawerLabelStyle: {
              color: rasioColors.preto,
              fontFamily: "Lexend_400Regular",
              fontSize: 16,
            },
            drawerItemStyle: {
              backgroundColor: rasioColors.cinzaQuaseBranco,
              borderRadius: 0,
              alignContent: "center",
            },
          }}
        />
        <Drawer.Screen
          name="alterarSenha"
          options={{
            headerShown: false,
            drawerIcon: () => null,
            title: "Alterar Senha",
            drawerLabel: "Alterar Senha",
            drawerLabelStyle: {
              color: rasioColors.preto,
              fontFamily: "Lexend_400Regular",
              fontSize: 16,
            },
            drawerItemStyle: {
              backgroundColor: rasioColors.cinzaQuaseBranco,
              borderRadius: 0,
              alignContent: "center",
            },
          }}
        />
        <Drawer.Screen
          name="protected/checklist"
          options={{
            drawerItemStyle: { display: "none" },
            drawerLabelStyle: {
              display: "none",
            },
            drawerLabel: "Check-list",
            title: "",
          }}
        />
        <Drawer.Screen
          name="protected/confirm"
          options={{
            drawerItemStyle: { display: "none" },
            drawerLabelStyle: {
              display: "none",
            },
            title: "",
          }}
        />
        <Drawer.Screen
          name="protected/success"
          options={{
            drawerItemStyle: { display: "none" },
            drawerLabelStyle: {
              display: "none",
            },
            title: "",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default Layout;
