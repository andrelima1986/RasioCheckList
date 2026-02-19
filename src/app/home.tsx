import { useRouter } from "expo-router";
import { useEffect } from "react";
import { View, StyleSheet, Image, ActivityIndicator } from "react-native";
import { Provider } from "react-native-paper";
import { theme } from "../themes";



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
    <View style={styles.container}>
         <Image  source={require('../img/rasio_logo.png')}/>
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text : {
    fontSize: 20,
    fontWeight: 'bold',
        color: '#333',
  }
});

export default Home;