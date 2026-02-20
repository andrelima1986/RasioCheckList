import { useRouter } from "expo-router";
import { useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Provider } from "react-native-paper";
import { rasioColors, theme } from "../themes";
import RasioLogoWhite from "../components/RasioLogoWhite";


const Home = () => {
  const router = useRouter();

  useEffect(() => {
     const timer = setTimeout(() => {
      router.replace('/login');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Provider theme={theme}>
      <RasioLogoWhite />
    </Provider>
  );
}

export default Home;